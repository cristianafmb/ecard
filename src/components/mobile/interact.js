import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import '../../sass/app.scss'

const Interact = ({ data }) => {
  const image = getImage(data.icon)
  return (
    <div className="max-width mt-4">
      <div className="width-65 m-auto text-center">
        <GatsbyImage image={image}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt={data.alt}
          className=" me-1 d-inline-block"
        />
        <p className="ms-1 vRegular  d-inline-block text-uppercase details-small">{data.text}</p>
      </div>
    </div>

  )
}

export default Interact