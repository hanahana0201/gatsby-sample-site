import React from "react"
import { graphql } from "gatsby"
import LayoutLight from "../components/common/layout-light"

import Imgix from "react-imgix"

import unified from "unified"
import parse from "rehype-parse"
import rehypeReact from "rehype-react"

import SEO from "../components/common/seo"
import htmlToText from "html-to-text"


const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {},
}).Compiler

export default ({ data, location }) => {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(data.microcmsWork.description)

  return (
    <LayoutLight>
      <SEO
        pagetitle={data.microcmsWork.title}
        pagedesc={`${htmlToText
        .fromString(data.microcmsWork.description, {
          ignoreImage: true,
          ignoreHref: true,
        }).slice(0, 70)}…`}
        pagepath={location.pathname}
      />
      <section className="section is-hero-full">
        <div className="box">
          <figure>
            <Imgix
              src={data.microcmsWork.eyecatch.url}
              htmlAttributes={{
                alt: "",
              }}
            />
          </figure>
        </div>
      </section>
      <section className="section is-work">
        <div className="inner">
          <div className="box is-work is-space-xxxl text is-center">
            <p>
              {renderAst(htmlAst)}
            </p>
            {data.microcmsWork.detail_image.map(({ image }) => (
              <figure>
                <Imgix
                  src={image.url}
                  htmlAttributes={{
                    alt: "",
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </LayoutLight>
  )
}

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