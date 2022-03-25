import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import '../../sass/app.scss'

import styled from "styled-components"

const SocialIcons = ({ data, breakpoints }) => {

  const large = breakpoints.custom;
  const length = data.socialdesk.length
  console.log(data.socialdesk)
  return (
    <StyledSocialIcons className="width-55 m-auto max-height">

      {data.socialdesk.map((social, l) => (
        <div className={l !== 0 ? (l !== (length - 1) ? "width-10 max-height d-inline-block center m-auto" : "width-40 max-height d-inline-block center m-auto") : "width-20 max-height d-inline-block center m-auto"} >
          <Link to={social.link} target="_blank" className={l === (length - 1) ? "no-text-decoration cursor-none" : "no-text-decoration"}>
            <GatsbyImage image={getImage(social.icon)}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt={social.alt}
              objectFit="contain"
              className={"icon-desk " + social.alt}
            />
          </Link>
        </div>
      ))}


    </StyledSocialIcons>
  )
}

export default SocialIcons

const StyledSocialIcons = styled.div`

.width-55{
  width: 55%;
}
.m-auto{
  margin: auto !important;
}
.max-height{
  height: 100% !important;
}
.width-10{
  width: 10%;
}
.width-40{
  width: 40%;
}
.width-20{
  width: 20% !important;
}
.d-inline-block{
  display: inline-block;
}
.center{
  text-align: center !important;
  vertical-align: middle;
}
.no-text-decoration{
  text-decoration: none !important;
}
.cursor-none{
  cursor:  default !important;
}
.icon-desk{
  max-width: 20vh;
  height: 15.9%;
}
.Invisual{
  max-width: 50%;
}
.Facebook{
  max-width: 20%;
}
.Instagram{
  max-width: 40%
}
.Linkedin{
  max-width: 40%
}
.Whatsapp{
  max-width: 40%
}
.Touch{
  max-width: 85%
}
`
