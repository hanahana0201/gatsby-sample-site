import React from "react"
import { graphql,Link } from "gatsby"
import Imgix from "react-imgix"
import Layout from "../components/common/layout"

import SEO from "../components/common/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons"

export default ({ data,location,pageContext,props }) => (
  <Layout
   class="is-light"
  >
    <SEO
      pagetitle="しごと"
      pagedesc="N'sクラフト設計室の実績一覧です。"
      pagepath={location.pathname}
    />
    <section className="section is-hero is-no-image">
      <div className="inner is-padding-horizontal-lg is-space-xxxl">
        <h1 className="text is-strong is-center is-lg is-fablet-xl is-tablet-xxl">
          しごと
        </h1>
      </div>
    </section>
    <section className="section is-works">
      <div className="inner is-space-xxxl">
          {data.allMicrocmsWork.edges.map(({ node }) => (
            <div className="box is-works-item" key={node.id}>
              <Link to={`/work/post/${node.slug}/`}>
                <div className="box is-eyecatch">
                  <figure>
                    <Imgix
                      src={node.eyecatch.url}
                      sizes="(max-width: 1600px) 100vw, 1600px"
                      htmlAttributes={{
                        alt: "",
                      }}
                    />
                    <figcaption className="text is-center is-space">
                      <h2>
                        <figure>
                          <Imgix
                            src={node.title_image.url}
                            htmlAttributes={{
                              alt: node.title
                            }}
                          />
                        </figure>
                      </h2>
                      <h3 className="text is-strong is-lg is-light is-shadow">{node.construction_year}</h3>
                    </figcaption>
                  </figure>
                </div>
              </Link>
            </div>
          ))}
        <ul className="pagenation">
          {!pageContext.isFirst && (
            <li className="prev">
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/work/`
                    : `/work/${pageContext.currentPage - 1}`
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
              <Link to={`/work/${pageContext.currentPage + 1}/`} rel="next">
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
          title_image {
            url
          }
          construction_year
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