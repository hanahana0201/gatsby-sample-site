import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/common/layout"

import Imgix from "react-imgix"

import SEO from "../components/common/seo"
// import htmlToText from "html-to-text"

export default ({data}) => (
  <Layout>
    <SEO
      pagetitle="ブログ"
      pagedesc="ESSENTIALSのブログです"
      // pagepath={location.pathname}
    />
    <figure>
      <Imgix
        src={data.microcmsWork.eyecatch.url}
        sizes="(max-width: 500px) 100vw, 500px"
        htmlAttributes={{
          alt: "",
        }}
      />
    </figure>
    <section className="content bloglist">
      <div className="container">
        <p>
          {data.microcmsWork.description}
        </p>
        {data.microcmsWork.detail_image.map(({ image }) => (
          <figure>
            <Imgix
              src={image.url}
              sizes="(max-width: 500px) 100vw, 500px"
              htmlAttributes={{
                alt: "",
              }}
            />
          </figure>
        ))}
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    microcmsWork {
      title
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
`