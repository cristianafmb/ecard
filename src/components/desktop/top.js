import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from "styled-components"


const Top = ({ data }) => {
  const image = getImage(data.imgdesktop)
  const emailicon = getImage(data.emailicon)

  return (
    <StyledTop style={{ height: "100%", maxHeight: "100%" }}>
      <div className="half-width max-h column" >
        <GatsbyImage image={image}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt={data.alt}
          objectFit="contain"
          objectPosition="50% 50%"
          className="max-h width-95"
          imgStyle={{ objectFit: "contain", objectPosition: 'right' }}
        />
      </div>
      <div className="half-width max-h column" >
        <div className="div-contacts max-width m-auto">
          <a className="no-text-decoration max-width" href={data.email} target="_blank">
            <GatsbyImage image={emailicon}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="email"
              objectFit="contain"
              className="width-10 img-email"
              imgStyle={{ zIndex: "80", objectFit: "contain", objectPosition: 'right' }}
            />

          </a>
          <div className="m-auto center max-width">
            <div className=" max-width right div-p">
              <p className="vRegular title-large mb-1 mt-3">{data.name}</p>
              <p className="vSemiBold mb-0 details-small">{data.company}</p>
              <p className="vRegular details-x-small mb-0">{data.job}</p>
            </div>
          </div>
        </div>

      </div>
    </StyledTop >
  )
}

export default Top

const StyledTop = styled.div`
.div-p{
  margin: auto;
  padding-right: 45%;
  margin-bottom: 2%;
}
.m-auto{
  margin: auto;
}
.right{
  text-align: right
}
.max-width{
  width: 100%;
}
.width-95{
  width: 95%
}
.width-70{
  width: 70%
}
.width-10{
  width: 10%;
}
.center{
  text-align: center !important;
}
.img-email{
  display: block;
  margin: auto;
  vertical-align: middle;
}
.half-width {
  width: 50%;
}
.max-h{
  height: 100% !important;
  max-height: 100% !important;
}
.column{
  display: inline-flex;
}
.no-text-decoration{
  text-decoration: none !important;
}
.div-contacts{

}
.title-large{
  font-size: 1.6vw;
}
.details-x-small{
  font-size: calc(9px + 6 * (100vw - 320px) / 680);
}
.details-small {
  font-size: calc(11px + 6 * ((100vw - 320px) / 680));
}
`
