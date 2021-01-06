import React from "react"
import { graphql,Link } from "gatsby"
import Imgix from "react-imgix"
import Layout from "../components/common/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/common/seo"

export default ({ data,location,pageContext }) => {
  const years = new Set();
  years.add(data.allMicrocmsBlog.edges.map(({ node }) => (
    <li>
      { node.year }
    </li>
  )
  ));

  return (
    <Layout>
      <SEO
        pagetitle="日々のこと"
        pagedesc="N'sクラフト設計室のブログです"
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
        <div className="inner">
          <div className="grid is-column-reverse-mobile-fablet is-space">
            <div className="column is-mobile-12 is-desktop-3 is-padding-horizontal-lg">
              <div className="sidebar text is-center is-space-xxl is-margin-top-xxxl-mobile-fablet">
                <div className="box is-space">
                  <h3 className="text is-strong project-heading-3">カテゴリ</h3>
                  <ul>
                    {data.allMicrocmsCategory.edges.map(({ node }) => (
                      <li>
                        <Link
                          className="text is-sm"
                          to={`/blog/category/${node.categorySlug}`}
                        >
                          {node.category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="box is-space">
                  <h3 className="text is-strong project-heading-3">アーカイブ</h3>
                  <ul>
                    <li>
                      <Link
                        className="text is-sm"
                        to="/blog/archive/2021"
                      >
                        2021
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column is-mobile-12 is-desktop-9 is-padding-horizontal-lg">
              <div className="blog-list-wrap is-space-xxxl">
                <div className="posts is-space-xxxl">
                  {data.allMicrocmsBlog.edges.map(({ node }) => (
                    <>
                      <article className="post is-space" key={node.id}>
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
                        <div className="box is-content is-space-lg">
                          <h3 className="text is-strong is-xl is-fablet-xxl">{node.title}</h3>
                          <aside className="box is-detail is-flex text is-sm is-space-right">
                            <time dateTime={node.publishDate}>
                              {node.publishDateJP}
                            </time>
                            <div className="box is-category">
                              <ul className="box is-flex is-space-right">
                                {node.category.map(cat => (
                                  <li className={cat.categorySlug} key={cat.id}>
                                    <Link to={`/blog/category/${cat.categorySlug}/`}>
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
                      <hr className="article-line"></hr>
                    </>
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
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        <span>前のページ</span>
                      </Link>
                    </li>
                  )}

                  {!pageContext.isLast && (
                    <li className="next">
                      <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
                        <span>次のページ</span>
                        <FontAwesomeIcon icon={faChevronRight}/>
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
}

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
          publishDate
          publishDateJP:publishDate(formatString: "YYYY年MM月DD日")
          year :publishDate(formatString: "YYYY")
          category {
            category
            categorySlug
          } 
          content
        }
      }
    } 
    allMicrocmsCategory {
      edges {
        node {
          category
          categorySlug
        }
      }
    }
  }
`