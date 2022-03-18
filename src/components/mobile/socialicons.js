import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SocialIcons = ({ data }) => {
  return (
    <div className="max-width mt-4">
      <div className="width-80 m-auto">
        {data.map((social, l) => (
          <div key={"social" + l} className="div-social d-inline-block">
            <a className="no-text-decoration" href={social.link} target="_blank">
              <GatsbyImage image={getImage(social.icon)}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt={social.alt}
                className={social.alt !== 'Site' ? (social.alt === 'Email' ? "full-height  img-social icon-small mt-1 ms-2" : "full-height  img-social icon-small") : "full-height  img-social"}
              />
            </a>
          </div>
        ))}

      </div>
    </div>

  )
}

export default SocialIcons
