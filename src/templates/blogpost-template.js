import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/common/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faCheckSquare, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Imgix from "react-imgix"

import unified from "unified"
import parse from "rehype-parse"
import rehypeReact from "rehype-react"

import SEO from "../components/common/seo"
import htmlToText from "html-to-text"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    h2: props => {
      return (
        <h2>
          <FontAwesomeIcon icon={faCheckSquare} />
          {props.children}
        </h2>
      )
    },
    img: props => {
      return (
        <Imgix
          src={props.src}
          size="(max-width: 785px) 100vw, 785px "
          htmlAttributes={{
            alt: props.alt,
          }}
        />
      )
    }
  },
}).Compiler

export default ({ data, pageContext, location }) => {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(data.microcmsBlog.content)

  const pb =
    (data.microcmsBlog.fields.height /data.microcmsBlog.fields.width) * 100

  return (
    <Layout>
      <SEO
        pagetitle={data.microcmsBlog.title}
        pagedesc={`${htmlToText
          .fromString(data.microcmsBlog.content, {
            ignoreImage: true,
            ignoreHref: true,
          }).slice(0, 70)}…`}
        pagepath={location.pathname}
        blogimg={data.microcmsBlog.eyecatch.url}
        pageimgw={data.microcmsBlog.fields.width}
        pageimgh={data.microcmsBlog.fields.height}
      />
      <div className="eyecatch">
        <figure>
          <div className="eyecatch-wrapper" style={{ paddingBottom: `${pb}%` }}>
            <Imgix
              src={data.microcmsBlog.eyecatch.url}
              sizes="(max-width: 1600px) 100vw, 1600px"
              htmlAttributes={{
                alt: "",
              }}
            />
          </div>
        </figure>
      </div>
      <article className="content">
        <div className="container">
          <h1 className="bar">{data.microcmsBlog.title}</h1>
          <aside className="info">
            <time dateTime={data.microcmsBlog.publishDate}>
              <FontAwesomeIcon icon={faClock} />
              {data.microcmsBlog.publishDateJP}
            </time>
            <div className="cat">
              <FontAwesomeIcon icon={faFolderOpen} />
              <ul>
                {data.microcmsBlog.category.map(cat => (
                  <li className={cat.categorySlug} key={cat.id}>
                    <Link to={`/cat/${cat.categorySlug}/`}>
                      {cat.category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="postbody">{renderAst(htmlAst)}</div>
          <ul className="postlink">
            {pageContext.next && (
              <li className="prev">
                <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>{pageContext.next.title}</span>
                </Link>
              </li>
            )}
            {pageContext.previous && (
              <li className="next">
                <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next">
                  <span>{pageContext.previous.title}</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </article>
    </Layout>
  )
}


export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      title
      publishDateJP:publishDate(formatString: "YYYY年MM月DD日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        url
      }
      fields {
        height
        width
      }
      content
    }
  }
`