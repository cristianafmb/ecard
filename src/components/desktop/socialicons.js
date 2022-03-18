import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SocialIcons = ({ data, breakpoints }) => {

  const large = breakpoints.custom;

  return (
    <div className="width-85 max-height div-social-big m-auto align-middle">

      {data.map((social, l) => (
        <div key={"social" + l} className="div-social d-block align-middle m-auto pt-8">
          <a className="no-text-decoration a-social" href={social.link} target="_blank" >
            <GatsbyImage image={large ? getImage(social.iconbig) : getImage(social.icon)}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt={social.alt}
              className={social.alt !== 'Site' ? (social.alt === 'Email' ? "full-height  img-social icon-small mt-1 ms-2" : "full-height  img-social icon-small") : "full-height  img-social"}
            />
          </a>
        </div>
      ))}
    </div>
  )
}

export default SocialIcons
