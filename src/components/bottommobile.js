import * as React from "react"
import { Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function BottomMobile({ data }) {
    const imageBg = getImage(data.imgback)
    const imageTop = getImage(data.imghover)

    return (
        <div className="position-relative pt-5 m-auto wrapper-bottom">
            <Row className="width-80 m-auto">
                <Col sm="12" lg="2" md="2"></Col>
                <Col sm="12" lg="2" md="2"></Col>
                <Col sm="12" lg="2" md="2" className="right  m-auto pt-5">
                    <p className="mBlack white right mt-5 mb-0 title-medium text-uppercase">DEP. comercial</p>

                    <img src={data.line} alt="mini-line comercial" className="right width-70" />
                    {data.comercial.map((item, i) => (
                        <>
                            <p className="mMedium white title-medium mt-1 mb-1">{item.name}</p>
                            <a className="no-text-decoration" href={"mailto:" + item.email}><p className="mMedium white details-small mb-1"> {item.email}</p>
                            </a>
                            <a className="no-text-decoration" href={"tel:" + item.number}><p className="mMedium white details-small mt-0"> {item.numberdisplay}</p>
                            </a>
                        </>

                    ))}

                </Col>
                <Col sm="12" lg="2" md="2">
                
                </Col>
                <Col sm="12" lg="2" md="2">
                </Col>
                <Col sm="12" lg="2" md="2">
                </Col>
            </Row>

        </div>

    );
}

export default BottomMobile;