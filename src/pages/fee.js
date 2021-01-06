import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/common/layout"

import SEO from "../components/common/seo"

export default ({data, location }) => (
  <Layout>
    <SEO
      pagetitle="設計料について"
      pagedesc="N'sクラフト設計室の設計料について説明しています。"
      pagepath={location.pathname}
      pageimg={data.fee.childImageSharp.original.src}
      pageimgw={data.fee.childImageSharp.original.width}
      pageimgh={data.fee.childImageSharp.original.height}
    />
    <section className="section is-hero">
      <div className="box is-margin-horizontal-lg">
        <figure>
          <Img
            fluid={data.fee.childImageSharp.fluid}
            alt=""
          />
          <figcaption className="decorator">
            <h1 className="project-heading-1">
              設計料について
            </h1>
            <h2 className="project-heading-2">
              8万円/坪
            </h2>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="section is-fee">
      <div className="inner is-padding-horizontal-lg">
        <div className="box">
          <p className="text is-center">
            木造2階建て以下の場合<br></br>
            <br></br>
            設計監理料は、延床面積1坪×8万円(税別)です。<br></br>
            <br></br>
            ※申請手数料は別途頂戴します。<br></br>
            ※特殊申請などは別途設計料を頂戴します。<br></br>
            ※木造3階建て等に必要な構造設計料は別途発生します。<br></br>
            <br></br>
            設計料の考え方はできるだけシンプルにしたいという思いがあります。<br></br>
            不明な点はお気軽にお問い合わせください。<br></br>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql` {
  fee: file(relativePath: {eq: "fee.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid_withWebp
      }
      original {
        src
        height
        width
      }
    }
  }
}
`