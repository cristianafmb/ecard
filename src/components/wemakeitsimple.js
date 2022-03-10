import * as React from "react"
import { Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function WeMakeItSimple({ img, alt, right, breakpoints }) {

    const mobile = breakpoints.mobile
    const image = getImage(img)

    return (

        <Row className={mobile ? "width-80 m-auto pt-5 bb-white no-space-col-left" : "max-width m-auto pt-5 bb-white no-space-col-left"}>
            <Col lg="6" md="6" sm="12" >
                <GatsbyImage image={image}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt={alt}
                    className={mobile ? "img-left-top bb-white center mb-5" : "img-left-top  center"}
                />

            </Col>
            <Col lg="6" md="6" sm="12" >
                <div className="text-right-top m-auto">
                    <div>
                        <p className="mBoldItalic title-large white">{right.title}</p>
                    </div>
                    <div className="div-slogan-overflow">
                        <p className="mBold title-small orange">{right.subtitle}</p>
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