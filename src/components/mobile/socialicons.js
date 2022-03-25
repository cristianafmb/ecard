import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from "styled-components"

const SocialIcons = ({ data }) => {
  return (
    <StyledSocialIconsMobile>
      <div className="max-width mt-4">
        <div className="width-80 m-auto">
          {data.map((social, l) => (
            <div key={"social" + l} className="div-social d-inline-block">
              <a className="no-text-decoration" href={social.link} target="_blank">
                <GatsbyImage image={getImage(social.icon)}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt={social.alt}
                  className={social.alt !== 'Site' ? (social.alt === 'Email' ? social.alt + " full-height  img-social icon-small mt-1 ms-2" : social.alt + " full-height  img-social icon-small") : social.alt + " full-height  img-social"}
                />
              </a>
            </div>
          ))}

        </div>
      </div>
    </StyledSocialIconsMobile>
  )
}

export default SocialIcons
const StyledSocialIconsMobile = styled.div`
.max-width {
  width: 100%;
}
.width-80 {
  width: 80% !important;
}
.m-auto {
  margin: auto;
}
.div-social {
    width: 20%;
    text-align: center;

    vertical-align: middle;
    @media (max-width: 990px) {
        height: 100%;
    }
}
.no-text-decoration{
    text-decoration: none !important;
}
.Instagram{
  margin-right: 10%;
}
.Facebook{
  margin-left: 13%;
}
.full-height {
    min-height: 100%;
    height: 100%;
}
.img-social{
    @media (min-width: 1150px){
        width: 12vh;
    }
}
.icon-small {
    max-width: 4vh;
    max-height: 5vh;
    @media (min-width: 990px) {
        max-width: 4vh;
        max-height: 100%;
        filter: brightness(0%);
    }
}
`