import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import Carousel from 'react-grid-carousel'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import left from '../images/left.png'
import right from '../images/right.png'

const ArrowLeft = () => {

    return (
        <img src={left} alt="Arrow Left" className="left-arrow"/>
    )
}
const ArrowRight = () => {

    return (
        <img src={right} alt="Arrow Right" className="right-arrow"/>
    )
}

function Marcas({ breakpoints, data }) {
    const image = getImage(data.line.img)

    return (

        <div className="m-auto pt-5 bg-grey pb-5">
            <div className="m-5 center">
                <p className="mSemiBold white title-medium letter-sp-10">{data.title}</p>
                <div>
                    <GatsbyImage image={image}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt={data.line.alt}
                        className="line-orange"
                    />
                </div>
            </div>
            <div className="width-80 m-auto">
                <Carousel cols={4} rows={1} gap={15} loop={true} arrowLeft={ArrowLeft} arrowRight={ArrowRight}>
                    {data.marcas.map((item, i) => (
                        <Carousel.Item key={"car" + i} className="m-auto">
                            <GatsbyImage image={getImage(item.img)}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                                alt={item.alt}
                                className="m-auto center"
                            />

                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Marcas;