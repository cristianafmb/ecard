import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopMobile from "../components/mobile/top"
import Top from "../components/desktop/top"
import SocialIconsMobile from "../components/mobile/socialicons"
import SocialIcons from "../components/desktop/socialicons"
import InteractMobile from "../components/mobile/interact"
import Interact from "../components/desktop/interact"
import Middle from "../components/desktop/middle"

const IndexPage = ({ data }) => {
  const breakpoints = useBreakpoint();

  const imagemobile = getImage(data.globalJson.bgmiddlemobile)
  
  return (
    <Layout>
      <Seo title="Nuno Carvalho" />
      <div className="fullscreen">
        {breakpoints.mobile ? (
          <>

            <TopMobile data={data.globalJson.top} />

            <div style={{ height: "50vh" }}>
              <a className="no-text-decoration" href={data.globalJson.top.site} target="_blank">
                <GatsbyImage image={imagemobile}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt={data.globalJson.bgmiddlealt}
                  objectFit="cover"
                  style={{ height: "50vh" }}
                />
              </a>

            </div>

            <SocialIconsMobile data={data.globalJson.social} />

            <InteractMobile data={data.globalJson.interact} />

          </>
        ) : (<>
          <div className="max-width fullscreen">
            <div className="sides max-height d-inline-flex" >

              <SocialIcons data={data.globalJson.social} breakpoints={breakpoints}/>

            </div>
            <div className="middle d-inline-flex  max-height ">

              <Middle data={data.globalJson.top} bg={data.globalJson.bgmiddle} alt={data.globalJson.bgmiddlealt} />

            </div>
            <div className="sides d-inline-flex ">

              <Interact data={data.globalJson.interact} />

            </div>

          </div>

        </>)}
      </div>

    </Layout>
  )
}
export default IndexPage

export const IndexQuery = graphql`
  query globalJson {
    globalJson {
      top{
        img{
          childImageSharp {
            gatsbyImageData
          }
        }
        imgdesktop{
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        site
        whatsappicon{
          childImageSharp {
            gatsbyImageData
          }
        }
        whatsappalt
        number
        name
        company
        job
      }
      bgmiddlealt
      bgmiddlemobile{
        childImageSharp {
          gatsbyImageData
        }
      }
      bgmiddle{
        childImageSharp {
          gatsbyImageData
        }
      }
      social{
        icon{
          childImageSharp {
            gatsbyImageData
          }
        }
        iconbig{
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        link
      }
      interact{
        icon{
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        text
      }
    }
  }
`

