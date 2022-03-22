/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
 
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}

        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:image`,
            content: `https://nuno-carvalho.invisual.pt/static/593c2474305d8181790a506d9a6a095d/69e8d/logo_preto.webp`,
            itemprop: `image`,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
      <link itemprop="thumbnailUrl" href="https://nuno-carvalho.invisual.pt/static/593c2474305d8181790a506d9a6a095d/69e8d/logo_preto.webp" />
      <span itemprop="thumbnail" itemscope itemtype="http://schema.org/ImageObject" >
        <link itemprop="url" href="https://nuno-carvalho.invisual.pt/static/593c2474305d8181790a506d9a6a095d/69e8d/logo_preto.webp" />
      </span>
    </>


  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
