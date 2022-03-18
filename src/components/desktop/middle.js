import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'

import '../../sass/app.scss'

const Middle = ({ data, alt, bg }) => {
  const imagebg = getImage(bg)
  const imageperson = getImage(data.imgdesktop)
  const whats = getImage(data.whatsappicon)
  return (

    <Row className="max-width max-height m-auto align-middle ">
      <Col className="z-index-bg">
        <GatsbyImage image={imageperson}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt={data.alt}
          objectFit="contain"
          className="d-flex img-person"
        />

      </Col>
      <Col className="height-100 col-middle">
        <a className="no-text-decoration" href={data.site} target="_blank">
          <GatsbyImage image={imagebg}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt={alt}
            objectFit="cover"
            style={{ zIndex: "99" }}
          />
        </a>
        <div className="width-70 div-whats-text">
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
          <div className="position-absolute">
            <p className="vRegular title-large mb-1">{data.name}</p>
            <p className="vSemiBold mb-0 details-small">{data.company}</p>
            <p className="vRegular details-small mb-0">{data.job}</p>
          </div>

        </div>


      </Col>
    </Row>
  )
}

export default Middle
