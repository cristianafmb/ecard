import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../sass/app.scss'
import Layout from "../components/layout"
import Seo from "../components/seo"

import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import FixedTop from '../components/fixedTop'
import WeMakeItSimple from '../components/wemakeitsimple'
import Marcas from '../components/marcas'
import Form from '../components/form'

const IndexPage = ({ data }) => {

  const breakpoints = useBreakpoint();

  return (
    <Layout>

      <Seo title="Home" />
      <div className="bg-black">

        <FixedTop data={data.globalJson.head} />

        <WeMakeItSimple img={data.globalJson.wemakeitsimple.left.img} alt={data.globalJson.wemakeitsimple.left.alt} right={data.globalJson.wemakeitsimple.right} breakpoints={breakpoints} />

        <div className="bg-grey pt-5 pb-5">
          <Marcas breakpoints={breakpoints} data={data.globalJson.marcas} />
        </div>

        <div style={{ backgroundImage: `url(${data.globalJson.form.bg})` }}>
          <Form data={data.globalJson.form} />
        </div>


      </div>

    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query allHomeJson {
    globalJson {
      head {
        imghoveralt
        imghover {
          childImageSharp {
            gatsbyImageData
          }
        }
        imgbackalt
        imgback {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      wemakeitsimple{
        left{
          alt
          img{
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        right{
          title
          subtitle
          details
        }
      }
      marcas{
        title
        line{
          alt
          img{
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        marcas{
          alt
          img{
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      form{
        title
        bg 
        obrigatorio
        txtbtn
        details
      }
    }
  }
`