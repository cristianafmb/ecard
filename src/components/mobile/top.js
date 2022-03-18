import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import '../../sass/app.scss'

const Top = ({ data }) => {
  const image = getImage(data.img)
  const whats = getImage(data.whatsappicon)
  return (
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
      <Col sm="6" md="6" lg="6" className="width-50  position-relative">
        <div className="div-whats pe-15 position-absolute pb-3 right">
          <a className="no-text-decoration" href={"https://api.whatsapp.com/send?phone="+data.number} target="_blank">
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
  )
}

export default Top
