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
        <div className="chart-item">
          <h2>タイトル</h2>
          <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
        </div>
        <div className="chart-item">
          <h2>タイトル</h2>
          <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
        </div>
        <div className="chart-item">
          <h2>タイトル</h2>
          <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
        </div>
        <div className="chart-item">
          <h2>タイトル</h2>
          <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
        </div>
        <div className="chart-item">
          <h2>タイトル</h2>
          <p>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
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