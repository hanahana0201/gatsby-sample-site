import React from "react";
import Img from "gatsby-image"

export default () => (
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
)