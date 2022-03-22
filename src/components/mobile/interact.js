import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import '../../sass/app.scss'

const Interact = ({ data }) => {
  const image = getImage(data.icon)
  return (
    <StyledInteractMobile>
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
    </StyledInteractMobile>
  )
}

export default Interact


const StyledInteractMobile = styled.div`
.max-width {
  width: 100%;
}
.width-65 {
  width: 65%;
}
.m-auto {
  margin: auto;
}
.details-small {
  font-size: calc(11px + 6 * ((100vw - 320px) / 680));
}
`