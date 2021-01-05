import React from "react"
import Layout from "../components/common/layout"

import SEO from "../components/common/seo"

export default ({ location }) => (
  <Layout>
    <SEO pagetitle="ページが見つかりません" pagepath={location.pathname} />
    <section className="section is-hero is-no-image">
      <div className="inner is-padding-horizontal-lg is-space-xxxl">
        <h1 className="text is-strong is-center is-lg is-fablet-xl is-tablet-xxl">
          404 NOT FOUND
        </h1>
        <p className="text is-padding-horizontal-xxl is-line-height-lg is-center">
          お探しのページが見つかりませんでした
        </p>
      </div>
    </section>
  </Layout>
)