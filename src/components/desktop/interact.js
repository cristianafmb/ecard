import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import '../../sass/app.scss'

const Interact = ({ data }) => {
  const image = getImage(data.icon)
  return (
    <div className="max-width  m-auto align-middle">

      <div className="div-social d-block align-middle m-auto div-touch">
        <GatsbyImage image={image}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt={data.alt}
          className=" me-1 mb-4"
        />
        <p className="vRegular m-auto text-uppercase details-x-small text-vertical">{data.text}</p>
      </div>
    </div>
  )
}

export default Interact
