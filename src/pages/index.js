import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TopMobile from "../components/mobile/top"
import Top from "../components/desktop/top"
import SocialIconsMobile from "../components/mobile/socialicons"
import SocialIcons from "../components/desktop/socialicons"
import InteractMobile from "../components/mobile/interact"


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

          <div style={{ height: "84.1%", maxHeight: "84.1%" }}>
            <div style={{ height: "45.9%", maxHeight: "45.9%" }}>
              <Top data={data.globalJson.top} />
            </div>
            <Link to={data.globalJson.top.site} target="_blank" style={{ height: "54.1%", maxHeight: "54.1%"}}>
              <div style={{ height: "54.1%", maxHeight: "54.1%", backgroundImage: `url(${data.globalJson.bgmiddle})`, backgroundSize: "cover", backgroundPosition: "center" }} >


              </div>
            </Link>

          </div>

          <div style={{ height: "15.9%", maxHeight: "15.9% " }}>
            <SocialIcons data={data.globalJson} breakpoints={breakpoints} />
          </div>


        </>
        )}
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
        telalt
        telicon{
          childImageSharp {
            gatsbyImageData
          }
        }
        emailicon{
          childImageSharp {
            gatsbyImageData
          }
        }
        email
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
      bgmiddle
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
      socialdesk{
        icon{
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        link
      }
    }
  }
`
