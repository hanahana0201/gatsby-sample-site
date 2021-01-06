import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/common/layout"

import SEO from "../components/common/seo"

export default ({data, location }) => (
  <Layout>
    <SEO
      pagetitle="お問い合わせ"
      pagedesc="N'sクラフト設計室にご質問・ご相談の方は、お気軽にお電話ください。メールでのご質問・ご相談は下記のメールアドレスまでご連絡ください。内容を確認後、お返事いたします。メールの確認作業に時間を要する場合がございますので、お急ぎのお客様はお電話にてお問い合わせ頂くことをおすすめいたします。"
      pagepath={location.pathname}
      pageimg={data.contact.childImageSharp.original.src}
      pageimgw={data.contact.childImageSharp.original.width}
      pageimgh={data.contact.childImageSharp.original.height}
    />
    <section className="section is-hero">
      <div className="box is-margin-horizontal-lg">
        <figure>
          <Img
            fluid={data.contact.childImageSharp.fluid}
            alt=""
          />
          <figcaption className="decorator">
            <h1 className="project-heading-1">
              お問い合わせ
            </h1>
            <h2 className="project-heading-2">
              まずは<br></br>
              お電話下さい
            </h2>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="section is-contact">
      <div className="inner is-padding-horizontal-lg">
        <div className="box is-contact text is-center is-space-xxl">
            <p className="text is-strong is-fablet-xxl is-xl">
              <a className="text is-link is-project-primary" href="tel:09091251863">
                <span className="text is-inline-block is-margin-right-sm">tel</span>
                <span className="text is-inline-block">090-9125-1863</span>
              </a>
            </p>
            <p className="text">
              ご質問・ご相談の方は、お気軽にお電話ください。
            </p>
        </div>
        <div className="box is-contact text is-center is-space-xxl">
          <p>
            メールでのご質問・ご相談は下記のメールアドレスまでご連絡ください。<br></br>
            内容を確認後、お返事いたします。<br></br>
            <br></br>
            メールの確認作業に時間を要する場合がございますので、<br></br>
            お急ぎのお客様はお電話にてお問い合わせ頂くことをおすすめいたします。<br></br>
          </p>
          <p className="text is-strong is-fablet-lg">
            <a className="text is-link is-project-primary" href="mailto:t-nakamura@craftsekkei.com">
              <span className="text is-inline-block is-margin-right-sm">e-mail</span>
              <span className="text is-inline-block">t-nakamura@craftsekkei.com</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql` {
  contact: file(relativePath: {eq: "contact.jpg"}) {
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