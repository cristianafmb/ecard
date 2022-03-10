import * as React from "react"
import { Row, Col } from 'react-bootstrap'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Footer({ data }) {

    return (
        <div className="pt-10 m-auto width-80">
            <Row className="mb-5">
                <Col sm="12" md="3" lg="3">
                    <p className="grey title-medium mBlack text-uppercase mb-3 bb-orange width-70 pb-3">{data.contactos.title}</p>
                    <Row className="d-flex align-items-start">
                        <Col sm="2" md="2" lg="2" >
                            <GatsbyImage image={getImage(data.contactos.emailicon)}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                                alt={data.contactos.emailalt}
                                className="m-auto center mt-15"
                            />
                        </Col>
                        <Col sm="10" md="10" lg="10" className="no-space-col-left ">
                            <p className="mMedium white ">{data.contactos.email}</p>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-start">
                        <Col sm="2" md="2" lg="2" >
                            <GatsbyImage image={getImage(data.contactos.phoneicon)}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                                alt={data.contactos.phonealt}
                                className="m-auto center mt-15"
                            />
                        </Col>
                        <Col sm="10" md="10" lg="10" className="no-space-col-left ">
                            <a href={"tel:" + data.contactos.phone} className="no-text-decoration">
                                <p className="mMedium white ">{data.contactos.phonedisplay}</p>
                            </a>
                        </Col>
                    </Row>

                </Col>
                <Col sm="12" md="3" lg="3">
                    <p className="grey title-medium mBlack text-uppercase mb-3 bb-orange width-70 pb-3">{data.siganos.title}</p>
                    <Row className="width-70">
                        {data.siganos.icons.map((item, i) => (
                            <Col sm="3" lg="3" md="3" className="icon-cols-width">
                                <a className="no-text-decoration" href={item.link} target="_blank">
                                    <GatsbyImage image={getImage(item.icon)}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt={item.alt}
                                        className="m-auto center mt-15"
                                    />
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col sm="12" md="6" lg="6" className="right">
                    <a href={data.topright.link} className="right no-text-decoration" target="_blank">
                        <p className="white title-medium mBlack text-uppercase mb-3 pb-3 right">{data.topright.title}</p>
                        {data.topright.address.map((item, i) => (
                            <p className="white details-x-small mMedium text-uppercase mb-0 right letter-sp-2" key={"p" + i}>{item}</p>
                        ))}
                    </a>

                </Col>
            </Row>

            <Row className="mt-5 bt-orange max-width">
                <Col sm="12" md="6" lg="6">
                    <Row>
                        {data.politicas.map((pol, j) => (
                            <>
                                <Col className="no-space-col-left mt-3">
                                    <a href={pol.link} className="no-text-decoration" target="_blank" key={"politica" + j}>
                                        <p className="white details-x-small mMedium text-uppercase mb-0 ">{pol.title}</p>

                                    </a>

                                </Col>
                                {j < data.politicas.length - 1 ? <Col sm="1" md="1" lg="1" className="no-space-col-left mt-3"> <p className="white details-x-small mMedium">   |   </p> </Col> : ""}
                            </>

                        ))}
                    </Row>

                </Col>
                <Col sm="12" md="6" lg="6" className="right mt-3">
                    {data.copywriter.map((copy, k) => (
                        <div key={"copywriter"+k}>
                            <p className="white mMedium mb-1 details-xx-small text-uppercase" >{copy}</p>
                        </div>
                    ))}
                    
                </Col>
                <div>
                    <a href={data.livroreclamacoes.link} className="no-text-decoration" target="_blank">
                        <GatsbyImage image={getImage(data.livroreclamacoes.icon)}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt={data.livroreclamacoes.alt}
                        />
                    </a>
                </div>
            </Row>
        </div>

    );
}

export default Footer;