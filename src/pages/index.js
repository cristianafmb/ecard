import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../sass/app.scss'
import Layout from "../components/layout"
import Seo from "../components/seo"

import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import FixedTop from '../components/fixedTop'
import WeMakeItSimple from '../components/wemakeitsimple'
import NoMarcas from '../components/nomarcas'
import NoMarcasMobile from '../components/nomarcasmobile'
import Marcas from '../components/marcas'
import Form from '../components/form'
import Bottom from '../components/bottom'
import BottomMobile from '../components/bottommobile'
import Footer from '../components/footer'
import FooterMobile from '../components/footermobile'

const IndexPage = ({ data }) => {

  const breakpoints = useBreakpoint();

  return (
    <Layout>

      <Seo title="Home" />
      <div className="bg-black">

        <FixedTop data={data.globalJson.head} />

        <WeMakeItSimple img={data.globalJson.wemakeitsimple.left.img} alt={data.globalJson.wemakeitsimple.left.alt} right={data.globalJson.wemakeitsimple.right} breakpoints={breakpoints} />

        <div className="bg-grey pt-5 pb-5">
          {breakpoints.mobile ?
            <NoMarcasMobile mobile={breakpoints.mobile} data={data.globalJson.nomarcas} />
            :
            <NoMarcas mobile={breakpoints.mobile} data={data.globalJson.nomarcas} />
          }

          {/*<Marcas mobile={breakpoints.mobile} data={data.globalJson.marcas} />*/}
        </div>

        <div style={{ backgroundImage: `url(${data.globalJson.form.bg})` }}>
          <Form data={data.globalJson.form} />
        </div>

        {breakpoints.mobile ?
          <div className="bg-bottom" style={{ backgroundImage: `url(${data.globalJson.bottom.bgmobile})`, backgroundRepeat: "no-repeat" }}>
            <BottomMobile data={data.globalJson.bottom} />
          </div>
          :
          <div className="bg-bottom" style={{ backgroundImage: `url(${data.globalJson.bottom.bg})`, backgroundRepeat: "no-repeat" }}>
            <Bottom data={data.globalJson.bottom} />
          </div>
        }

        ´
        {breakpoints.mobile ?
          <FooterMobile data={data.globalJson.footer} />
          :
          <Footer data={data.globalJson.footer} />
        }


        <div>

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
      nomarcas{
        title
        details
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
      bottom{
        bg
        bgmobile
        alt
        line
        comercial{
          email
          numberdisplay
          number
        }
        tecnico{
          email
          numberdisplay
          number
        }
      }
      footer{
        contactos{
          title
          email
          emailicon{
            childImageSharp {
              gatsbyImageData
            }
          }
          emailalt
          phonedisplay
          phone
          phoneicon{
            childImageSharp {
              gatsbyImageData
            }
          }
          phonealt
        }
        siganos{
          title
          icons{
            link
            icon{
              childImageSharp {
                gatsbyImageData
              }
            }
            alt
          }
        }
        topright{
          title
          address
          link
        }
        politicas{
          title
          link
        }
        copywriter
        livroreclamacoes{
          link
          alt
          icon{
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`