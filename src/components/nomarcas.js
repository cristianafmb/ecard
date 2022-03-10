import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import Carousel from 'react-grid-carousel'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import left from '../images/left.png'
import right from '../images/right.png'


function NoMarcas({ mobile, data }) {


    return (

        <div className="m-auto pt-5 bg-grey pb-5">
            <div className="pt-5 pb-5">
                <Row className="max-width">
                    <Col sm="4" md="4" lg="4">
                    </Col>
                    <Col sm="4" md="4" lg="4" className=" m-auto ">
                        <p className="orange mExtraLight title-xx-large">{data.title}</p>
                    </Col>
                    <Col sm="4" md="4" lg="4">
                    </Col>
                </Row>
                <Row className="max-width">
                    <Col sm="4" md="4" lg="4" className="no-space-col-left">
                    </Col>
                    <Col sm="8" md="8" lg="8" className=" m-auto space-col-left-3">
                        <p className="white mRegular title-small letter-sp-5 no-wrap overflow-hidden">{data.details}</p>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default NoMarcas;