import * as React from "react"
import { Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function WeMakeItSimple({ img, alt, right, breakpoints }) {

    const mobile = breakpoints.mobile
    const image = getImage(img)

    return (

        <Row className={mobile ? "width-80 m-auto pt-5 bb-white " : "max-width m-auto pt-5 bb-white"}>
            <Col lg="6" md="6" sm="12" className="no-space-col-left ">
                <GatsbyImage image={image}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt={alt}
                    className={mobile ? "img-left-top bb-white center mb-5 max-width object-cover" : "img-left-top  center max-width object-cover"}
                />

            </Col>
            <Col lg="6" md="6" sm="12" >
                <div className="text-right-top ms-1">
                    <div>
                        <p className="mBoldItalic title-large white">{right.title}</p>
                    </div>
                    <div className="div-slogan-overflow">
                        <p className="mBold title-cut-text orange">{right.subtitle}</p>
                    </div>

                    {right.details.map((item, i) => (
                        <div key={"text"+i} className="width-80">
                            <br />
                            <p className="mMedium details-medium white">{item}</p>
                        </div>
                    ))}

                </div>
            </Col>
        </Row>
    );
}

export default WeMakeItSimple;