import React from "react"

import BackgroundSlider from 'gatsby-image-background-slider'
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/common/seo"
import TopMenu from "../components/parts/top-menu"
import TopFooter from "../components/common/top-footer"

import "../assets/scss/project.scss"

export default () => (
  <>
    <SEO />
    <main>
      <BackgroundSlider
        query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "bg"}}, sort: {order: ASC, fields: name}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
        initDelay={2}
      >
        {/* Menu in sync with background images*/}
        <div>
          <TopMenu />
          <TopFooter class="is-top" />
        </div>
        <div>
          <TopMenu class="is-light" />
          <TopFooter class="is-top is-light" />
        </div>
        <div>
          <TopMenu class="is-light" />
          <TopFooter class="is-top is-light" />
        </div>
        <div>
          <TopMenu class="is-light" />
          <TopFooter class="is-top is-light" />
        </div>
        <div>
          <TopMenu class="is-light" />
          <TopFooter class="is-top is-light" />
        </div>
      </BackgroundSlider>

    </main>
  </>
)
