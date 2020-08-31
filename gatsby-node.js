const path = require("path");
const axios = require("axios");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogresult = await graphql(`
    query {
      allMicrocmsBlog(sort: {fields: publishDate, order: DESC}) {
        edges {
          node {
            id
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
      allMicrocmsCategory {
        edges {
          node {
            categorySlug
            categoryId
          }
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
    return
  }

  blogresult.data.allMicrocmsBlog.edges.forEach(({ node,next,previous }) => {
    createPage({
      path: `/blog/post/${node.slug}`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })

  const blogPostPerPage = 6 //1ページに表示する記事の数
  const blogPosts = blogresult.data.allMicrocmsBlog.edges.length //記事の総数
  const blogPages = Math.ceil(blogPosts / blogPostPerPage) //記事一覧ページの総数

  Array.from({ length: blogPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        skip: blogPostPerPage * i,
        limit: blogPostPerPage,
        currentPage: i + 1, //現在のページ番号
        isFirst: i + 1 === 1, //最初のページ
        isLast: i + 1 === blogPages, //最後のページ
      },
    })
  })

  blogresult.data.allMicrocmsCategory.edges.forEach(({ node }) => {
    createPage({
      path: `/cat/${node.categorySlug}/`,
      component: path.resolve(`./src/templates/cat-template.js`),
      context: {
        catid: node.categoryId,
        skip: 0,
        limit: 100,
        currentPage: 1, // 現在のページ番号
        isFirst: true, // 最初のページ
        isLast: true, // 最後のページ
      },
    })
  })
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MicrocmsBlog') {
    const results = await axios.get(`${node.eyecatch.url}?fm=json`)
    const { data } = results

    createNodeField({
      node,
      name: "width",
      value: data.PixelWidth,
    })

    createNodeField({
      node,
      name: "height",
      value: data.PixelHeight,
    })
  }
}