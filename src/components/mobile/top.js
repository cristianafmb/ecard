import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import styled from "styled-components"

const Top = ({ data }) => {
  const image = getImage(data.img)
  const whats = getImage(data.whatsappicon)
  return (
    <StyledSocialIconsMobile>
      <Row className="max-width row-top">
        <Col sm="6" md="6" lg="6" className="width-50 full-height position-relative">
          <div className="full-height">
            <GatsbyImage image={image}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt={data.alt}
              objectFit="cover"
              objectPosition="50% 50%"
              className="full-height position-absolute img-person"
            />
          </div>

        </Col>
        <Col sm="6" md="6" lg="6" className="width-50  position-relative right">
          <div className="div-whats pe-15 position-absolute pb-3 right">
            <a className="no-text-decoration" href={"https://api.whatsapp.com/send?phone=" + data.number} target="_blank">
              <GatsbyImage image={whats}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt={data.whatsappalt}
                objectFit="cover"
                objectPosition="0% -110%"
                className="img-whats mb-2"
              />

            </a>

            <p className="vRegular title-large mb-1">{data.name}</p>
            <p className="vSemiBold mb-0 details-small">{data.company}</p>
            <p className="vRegular details-small mb-0">{data.job}</p>
          </div>
        </Col>
      </Row>
    </StyledSocialIconsMobile>
  )
}

export default Top

const StyledSocialIconsMobile = styled.div`
.max-width {
  width: 100%;
}
.row-top {
    height: 30vh;
}
.width-50 {
    width: 50%;
}
.full-height {
    min-height: 100%;
    height: 100%;
}
.img-person {
    width: 100%;
    height: 100%;
    transform: scale(1.4);
    @media (max-width: 990px) {
        transform: scale(1.4);
        overflow: hidden;
        width: 100%;
        height: 100%;
        margin-top: 25%;
    }
    @media (min-width: 1536px){
        transform: scale(1.2);
    }
}
.div-whats {
    max-height: 25vh;
    width: 100%;
    bottom: 0px !important;
}
.right {
    text-align: right;
    float: right;
}
.no-text-decoration{
    text-decoration: none !important;
}
.img-whats {
    width: 20%;
}
@font-face {
  font-family: "vRegular";
  src: url("./Volte-W03-Regular.woff2") format("truetype");
}
@font-face {
  font-family: "vSemiBold";
  src: url("./Volte-Semibold.woff2") format("truetype");
}
/** END - import fonts **/

// USAGE
.vRegular {
  font-family: "vRegular", sans-serif;
  font-feature-settings: "lnum";
}
.vSemiBold {
  font-family: "vSemiBold", sans-serif;
  font-feature-settings: "lnum";
}
.details-small {
    font-size: calc(11px + 6 * ((100vw - 320px) / 680));
}
.title-large {
    font-size: 1.2rem;
}
`