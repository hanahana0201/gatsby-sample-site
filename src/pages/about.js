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
    />
    <section className="section is-hero is-no-image">
      <div className="inner is-padding-horizontal-lg is-space-xxxl">
        <h1 className="text is-strong is-center is-lg is-fablet-xl is-tablet-xxl">
          わたしたち
        </h1>
        <h2 className="text is-strong is-center is-lg is-fablet-xl is-tablet-xxl">
          ”なんだかいい家だな”
        </h2>
        <p className="text is-padding-horizontal-xxl is-line-height-lg is-center">
          <span className="text is-inline-block">N’ｓクラフト設計室は、</span>
          <span className="text is-inline-block">春日井市にある</span>
          <span className="text is-inline-block">夫婦二人の</span>
          <span className="text is-inline-block">小さな設計事務所です。</span>
          <br></br>
          <span className="text is-inline-block">”丁寧な家づくり”　</span>
          <span className="text is-inline-block">”心地よい空間づくり”　を</span>
          <span className="text is-inline-block">大切に設計しています。</span>
          <br></br>
          <span className="text is-inline-block">魅力的な</span>
          <span className="text is-inline-block">「暮らしづくり」の</span>
          <span className="text is-inline-block">お手伝いを</span>
          <span className="text is-inline-block">してまいります。</span>
        </p>
        <div className="box text is-center is-space-xxl">
          <div className="grid is-space">
            <div className="column is-full">
              <a href="../flow/" className="button is-outline is-project-primary text is-strong">家づくりの流れ</a>
            </div>
            <div className="column is-full">
              <a href="../fee/" className="button is-outline is-project-primary text is-strong">設計料について</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section is-outline">
      <div className="inner">
        <div className="box is-padding-horizontal-xxl">
          <table className="table is-project-primary is-line">
            <tbody>
              <tr>
                <td>事務所名</td>
                <td>N’sクラフト設計室</td>
              </tr>
              <tr>
                <td>住所</td>
                <td>愛知県春日井市</td>
              </tr>
              <tr>
                <td>連絡先</td>
                <td>
                  <span className="text is-inline-block">TEL</span> <span className="text is-inline-block">090-9125-1863</span><br></br>
                  <span className="text is-inline-block">E-mail</span> <span className="text is-inline-block">t-nakamura</span><span className="text is-inline-block">@craftsekkei.com</span>
                </td>
              </tr>
              <tr>
                <td>登録</td>
                <td>
                  <span className="text is-inline-block">一級建築士</span><span className="text is-inline-block">事務所</span><br></br>
                  <span className="text is-inline-block">愛知県知事登録</span><span className="text is-inline-block">第 (い-1) 13674号</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section className="section is-profile">
      <div className="inner">
        <div className="grid is-bottom is-center is-gap-lg">
          <div className="column is-desktop-0 is-12">
            <div className="box project-image is-profile is-margin-horizontal-lg">
              <figure>
                <Img
                  fluid={data.tadashi.childImageSharp.fluid}
                  alt=""
                />
                <figcaption>
                  <h2 className="project-heading-2">
                    中村<br></br>
                    忠司
                  </h2>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="column is-desktop-0 is-12">
            <div className="box is-margin-horizontal-lg">
              <p className="text">
                1984年　　岐阜県大垣市生まれ<br></br>
                2006年　　大同大学建築学部建築学科卒業<br></br>
                2006年～　愛知県内の住宅会社勤務<br></br>
                2019年6月 N’sクラフト設計室設立<br></br>
                <br></br>
                資格 / 一級建築士<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section is-profile">
      <div className="inner">
        <div className="grid is-bottom is-center is-gap-lg">
          <div className="column is-desktop-0 is-12">
            <div className="box project-image is-profile is-margin-horizontal-lg">
              <figure>
                <Img
                  fluid={data.yoshie.childImageSharp.fluid}
                  alt=""
                />
                <figcaption>
                  <h2 className="project-heading-2">
                    中村<br></br>
                    嘉絵
                  </h2>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="column is-desktop-0 is-12">
            <div className="box is-margin-horizontal-lg">
              <p className="text">
                1985年　　愛知県岡崎市生まれ<br></br>
                2008年　　名古屋市立大学芸術工学部<br></br>
                　　　　 　生活環境デザイン学科卒業<br></br>
                2008年～　愛知県内の住宅会社勤務<br></br>
                2014年　　結婚後2児の母となる<br></br>
                2019年6月 N’sクラフト設計室設立<br></br>
                <br></br>
                資格 / 二級建築士<br></br>
                インテリアコーディネーター<br></br>
                整理収納アドバイザー2級
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    tadashi: file(relativePath: {eq: "tadashi.jpg"}) {
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
    yoshie: file(relativePath: {eq: "yoshie.jpg"}) {
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