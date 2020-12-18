import React from "react"
import { graphql,Link } from "gatsby"
import Imgix from "react-imgix"
import Layout from "../components/common/layout"

import unified from "unified"
import parse from "rehype-parse"
import rehypeReact from "rehype-react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/common/seo"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {},
}).Compiler

export default ({ data,location,pageContext }) => (
    <Layout>
      <SEO
        pagetitle="ブログ"
        pagedesc="ESSENTIALSのブログです"
        pagepath={location.pathname}
      />
      <section className="section is-hero is-no-image">
        <div className="inner is-padding-horizontal-lg is-space-xxxl">
          <h2 className="text is-strong is-center is-lg is-fablet-xl is-tablet-xxl">
            日々のこと
          </h2>
        </div>
      </section>
      <section className="section is-blog">
        <div className="inner is-padding-horizontal-lg">
          <div className="grid">
            <div className="column is-mobile-12 is-desktop-3">
              <div className="sidebar text is-center">
                <h3>カテゴリ</h3>
                <ul>

                </ul>
                <h3>アーカイブ</h3>
                <ul>

                </ul>
              </div>
            </div>
            <div className="column is-mobile-12 is-desktop-9">
              <div className="blog-list-wrap">
                <div className="posts">
                  {data.allMicrocmsBlog.edges.map(({ node }) => (
                    <article className="post" key={node.id}>
                      <div className="box is-eyecatch">
                        <figure>
                          <Imgix
                            src={node.eyecatch.url}
                            htmlAttributes={{
                              alt: "",
                            }}
                          />
                        </figure>
                      </div>
                      <div className="box is-content">
                        <h3>{node.title}</h3>
                        <aside className="info">
                          <time dateTime={node.publishDate}>
                            {node.publishDateJP}
                          </time>
                          <div className="cat">
                            <ul>
                              {node.category.map(cat => (
                                <li className={cat.categorySlug} key={cat.id}>
                                  <Link to={`/cat/${cat.categorySlug}/`}>
                                    {cat.category}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </aside>
                        <div
                          className="postbody"
                          dangerouslySetInnerHTML={{
                            __html: `${node.content}`,
                          }}
                        >
                        </div>
                      </div>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
)

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMicrocmsBlog(
      sort: { fields: publishDate, order:DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          id
          slug
          eyecatch {
            url
          }
          publishDateJP:publishDate(formatString: "YYYY年MM月DD日")
          publishDate
          category {
            category
            categorySlug
          } 
          content
        }
      }
    } 
  }
`