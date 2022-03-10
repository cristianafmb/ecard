import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import Carousel from 'react-grid-carousel'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import left from '../images/left.png'
import right from '../images/right.png'


function NoMarcas({ mobile, data }) {


    return (

        <div className="m-auto pt-5 bg-grey pb-5 ">
            <div className="pt-5 pb-5">
                <Row className="width-80 ps-3 m-auto">
                    <Col sm="4" md="4" lg="4">
                    </Col>
                    <Col sm="4" md="4" lg="4" className=" m-auto ">
                        <p className="orange mExtraLight title-xx-large">{data.title}</p>
                    </Col>
                    <Col sm="4" md="4" lg="4">
                    </Col>
                </Row>
                <div className="max-width ps-5 m-auto">
                    <p className="white mRegular title-small  no-wrap overflow-hidden">{data.details}</p>
                </div>
            </div>
        </div>
    );
}

export default NoMarcas;