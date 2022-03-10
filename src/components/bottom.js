import * as React from "react"
import { Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Bottom({ data }) {
    const imageBg = getImage(data.imgback)
    const imageTop = getImage(data.imghover)

    return (
        <div className="position-relative pt-5 m-auto wrapper-bottom">
            <Row className="max-width">
                <Col sm="12" lg="2" md="2"></Col>
                <Col sm="12" lg="2" md="2"></Col>
                <Col sm="12" lg="2" md="2">
                </Col>
                <Col sm="12" lg="2" md="2" className="col-dep-tecnico">
                    <p className="mBlack white left mb-0 title-x-medium text-uppercase">DEP. COMERCIAL</p>

                    <img src={data.line} alt="mini-line comercial" className="center m-auto" />

                    {data.comercial.map((item, i) => (
                        <>
                            <p className="mMedium white title-medium mt-3 mb-1">{item.name}</p>
                            <a className="no-text-decoration" href={"mailto:" + item.email}><p className="mMedium white details-x-small mb-1"> {item.email}</p>
                            </a>
                            <a className="no-text-decoration" href={"tel:" + item.number}><p className="mMedium white details-x-small mt-0"> {item.numberdisplay}</p>
                            </a>
                        </>

                    ))}
                </Col>
                <Col sm="12" lg="2" md="2">
                </Col>
                <Col sm="12" lg="2" md="2">
                </Col>
            </Row>

        </div>

    );
}

export default Bottom;