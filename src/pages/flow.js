import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/common/layout"

import SEO from "../components/common/seo"

export default ({data, location }) => (
  <Layout>
    <SEO
      pagetitle="ESSENTIALSについて"
      pagedesc="食べ物についての情報を発信しているサイトです。"
      pagepath={location.pathname}
      pageimg={data.flow.childImageSharp.original.src}
      pageimgw={data.flow.childImageSharp.original.width}
      pageimgh={data.flow.childImageSharp.original.height}
    />
    <section className="section is-hero">
      <div className="box is-margin-horizontal-lg">
        <figure>
          <Img
            fluid={data.flow.childImageSharp.fluid}
            alt=""
          />
          <figcaption className="decorator">
            <h1 className="project-heading-1">
              家づくりの流れ
            </h1>
            <h2 className="project-heading-2">
              あなたに<br/>
              合わせます
            </h2>
          </figcaption>
        </figure>
      </div>
    </section>
    <section className="section is-chart">
      <div className="inner">
        <div className="chart-item is-space-xxl">
          <h2 className="text is-xl is-strong">「家を建てたい」と思ったら</h2>
          <p>
            まずはお気軽にお電話ください。<br></br>
            家づくりに関する想い・不安・相談事 なんでもどうぞ！！
          </p>
        </div>
        <div className="chart-item is-space-xxl">
          <h2 className="text is-xl is-strong">ヒアリング</h2>
          <p>
            会って話しましょう。<br></br>
            設計に取り掛かるまでは無料ですのでお気軽にどうぞ。<br></br>
            家づくりの想いを教えてください。<br></br>
            わたしたちの想いもお伝えします。<br></br>
          </p>
        </div>
        <div className="chart-item is-space-xxl">
          <h2 className="text is-xl is-strong">ラフプラン</h2>
        </div>
        <div className="chart-item is-space-xxl">
          <h2 className="text is-xl is-strong">わたしたちと家づくりをする(したい)と決まったら</h2>
          <p>
            設計契約を交わしましょう。
          </p>
        </div>
        <div className="chart-item is-paid is-space-xxl">
          <h2 className="text is-xl is-strong">基本設計</h2>
          <p>
            土地を見た上で、間取り等のご提案をいたします。<br></br>
            納得いくまで打合せを重ねましょう。
          </p>
        </div>
        <div className="chart-item is-paid is-space-xxl">
          <h2 className="text is-xl is-strong">実施設計</h2>
          <p>
            基本設計をもとに、詳細・仕様を詰めていきます。
          </p>
        </div>
        <div className="chart-item is-paid is-space-xxl">
          <h2 className="text is-xl is-strong">本見積もり・施工契約</h2>
          <p>
            実施設計をもとに、施工会社による本見積もりののち、工事契約を交わしていただきます。
          </p>
        </div>
        <div className="chart-item is-paid is-space-xxl">
          <h2 className="text is-xl is-strong">祝・工事着工</h2>
          <p>
            設計士としてしっかり現場チェックをしてまいります。<br></br>
            適宜現場打ち合わせを行います。
          </p>
        </div>
        <div className="chart-item is-paid is-space-xxl">
          <h2 className="text is-xl is-strong">祝・お引渡し</h2>
          <p>
            最終チェックと、必要に応じ手直しをし、<br></br>
            カギの交換をおこない、新しい暮らしのスタートです。
          </p>
        </div>
        <div className="chart-item is-space-xxl">
          <h2 className="text is-xl is-strong">定期訪問</h2>
          <p>
            お引渡し1年前後に行います。<br></br>
            その他不具合があれば随時お手伝いいたします。
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql` {
  flow: file(relativePath: {eq: "flow.jpg"}) {
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