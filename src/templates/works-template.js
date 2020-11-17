import React from "react"
import { graphql,Link } from "gatsby"
import Imgix from "react-imgix"
import Layout from "../components/common/layout"

import SEO from "../components/common/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons"

export default ({ data,location,pageContext }) => (
  <Layout>
    <SEO
      pagetitle="ブログ"
      pagedesc="ESSENTIALSのブログです"
      pagepath={location.pathname}
    />
    <section className="content bloglist">
      <div className="container">
        <h1 className="bar">Works</h1>
        <div className="posts">
          {data.allMicrocmsWork.edges.map(({ node }) => (
            <article className="post" key={node.id}>
              <Link to={`/work/post/${node.slug}/`}>
                <figure>
                  <Imgix
                    src={node.eyecatch.url}
                    sizes="(max-width: 500px) 100vw, 500px"
                    htmlAttributes={{
                      alt: "",
                    }}
                  />
                </figure>
                <h3>{node.title}</h3>
              </Link>
            </article>
          ))}
        </div>

        <ul className="pagenation">
          {!pageContext.isFirst && (
            <li className="prev">
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/blog/`
                    : `/blog/${pageContext.currentPage - 1}`
                }
                rel="prev"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>前のページ</span>
              </Link>
            </li>
          )}

          {!pageContext.isLast && (
            <li className="next">
              <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
                <span>次のページ</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsWork(
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          slug
          description
          eyecatch {
            url
          }
          detail_image {
            image {
             url
            }
          }
        }
      }
    } 
  }
`