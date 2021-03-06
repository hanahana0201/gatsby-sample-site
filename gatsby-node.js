const path = require("path");
const axios = require("axios");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // ブログのページの自動生成
  const blogresult = await graphql(`
    query {
      allMicrocmsBlog(
      sort: {fields: publishDate, order: DESC
      }) {
        edges {
          node {
            id
            slug
            year :publishDate(formatString: "YYYY")
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
        group(field: category___categorySlug) {
          totalCount
          fieldValue
        }
      }
      allMicrocmsCategory {
        nodes {
            category
            categorySlug
            categoryId
        }
      }
    }
  `)

  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
    return
  }

  const blogPostPerPage = 5 //1ページに表示する記事の数
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

  blogresult.data.allMicrocmsBlog.group.forEach(node => {
    const catPostsPerPage = 5 //1ページに表示する記事の数
    const catPosts = node.totalCount //カテゴリーに属した記事の総数
    const catPages = Math.ceil(catPosts / catPostsPerPage) //カテゴリーページの総数

    Array.from({ length: catPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/blog/category/${node.fieldValue}/`
            : `/blog/category/${node.fieldValue}/${i + 1}/`,
        component: path.resolve(`./src/templates/category-template.js`),
        context: {
          catid: blogresult.data.allMicrocmsCategory.nodes.find(
            n => n.categorySlug === node.fieldValue
          ).categoryId,
          catname: blogresult.data.allMicrocmsCategory.nodes.find(
            n => n.categorySlug === node.fieldValue
          ).category,
          catslug: node.fieldValue,
          skip: catPostsPerPage * i,
          limit: catPostsPerPage,
          currentPage: i + 1, // 現在のページ番号
          isFirst: i + 1 === 1, // 最初のページ
          isLast: i + 1 === catPages, // 最後のページ
        },
      })
    })
  })

  const years = new Set();

  blogresult.data.allMicrocmsBlog.edges.forEach(({ node }) => {

    years.add(node.year)

    const archivePostsPerPage = 100 //1ページに表示する記事の数
    const archivePosts = years.size //アーカイブに属した記事の総数
    const archivePages = Math.ceil(archivePosts / archivePostsPerPage) //アーカイブの総数
    //
    Array.from({ length: archivePages }).forEach((_, i) => {
      years.forEach(year => {
        createPage({
          path:
          i === 0
            ? `/blog/archive/${year}/`
            : `/blog/archive/${year}/${i + 1}/`,
          component: path.resolve(`./src/templates/archive-template.js`),
          context: {
            displayYear: year,
            periodStartDate: `${year}-01-01T00:00:00.000Z`,
            periodEndDate: `${year}-12-31T23:59:59.999Z`,
            skip: archivePostsPerPage * i,
            limit: archivePostsPerPage,
            currentPage: i + 1,
            isFirst: i + 1 === 1,
            isLast: i + 1 === archivePages,
          },
        })
      })
    })
  })

  // 制作実績のページの自動生成
  const workresult = await graphql(`
    query {
      allMicrocmsWork {
        edges {
          node {
            id
            slug
            title
          }
          next {
            title
            slug
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `)

  if (workresult.errors) {
    reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
    return
  }

  workresult.data.allMicrocmsWork.edges.forEach(({ node,next,previous }) => {
    createPage({
      path: `/work/post/${node.slug}`,
      component: path.resolve(`./src/templates/work-template.js`),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })

  const workPostPerPage = 5 //1ページに表示する記事の数
  const workPosts = workresult.data.allMicrocmsWork.edges.length //記事の総数
  const workPages = Math.ceil(workPosts / workPostPerPage) //記事一覧ページの総数

  Array.from({ length: workPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/work/` : `/work/${i + 1}/`,
      component: path.resolve("./src/templates/works-template.js"),
      context: {
        skip: workPostPerPage * i,
        limit: workPostPerPage,
        currentPage: i + 1, //現在のページ番号
        isFirst: i + 1 === 1, //最初のページ
        isLast: i + 1 === workPages, //最後のページ
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
