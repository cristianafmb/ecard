import React, { useState } from "react"
import { Row, Col, Modal } from 'react-bootstrap'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

function FooterMobile({ data }) {

    const [fullscreenPrivacidade, setFullscreenPrivacidade] = useState(true);
    const [fullscreenCookies, setFullscreenCookies] = useState(true);
    const [showPrivacidade, setShowPrivacidade] = useState(false);
    const [showCookies, setShowCookies] = useState(false);

    function handleShowPrivacidade(breakpoint) {
        setFullscreenPrivacidade(breakpoint);
        setShowPrivacidade(true);
    }
    function handleShowCookies(breakpoint) {
        setFullscreenCookies(breakpoint);
        setShowCookies(true);
    }

    function handleShow(pol) {
        switch (pol) {
            case 'POLÍTICA DE PRIVACIDADE':
                handleShowPrivacidade(true)
                break;
            default:
                handleShowCookies(true)
                break;
        }
    }

    return (
        <div className="pt-10 m-auto width-80 pb-10">
            <Modal show={showPrivacidade} dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title" onHide={() => setShowPrivacidade(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="details-x-small mMedium text-uppercase">Política de Privacidade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="details-x-small mLight">
                        O presente documento explicita os termos em que a ENOMAC, Lda. com sede na
                        Avenida da Estação, Lote 2, Letra C, Zona Industrial de Oiã 3770-068 Oiã, procede ao
                        tratamento das informações recolhidas e utilizadas nas suas aplicações. Todas estas
                        regras estão de acordo com a legislação nacional.
                    </p>
                    <p className="details-x-small mLight">
                        Enomac, Lda. protege a privacidade dos seus utilizadores bem como os dados pessoais
                        submetidos pelos mesmos, sendo responsável pelo sítio <a href="www.enomac.pt" className=" white">www.enomac.pt</a> (doravante, o
                        “Sítio”)
                    </p>
                    <br />
                    <p className="details-x-small mBold">
                        1) Informação recolhida
                    </p>
                    <p className="details-x-small mLight">
                        A ENOMAC recolhe dois tipos de informação: informação pessoal e informação anónima.
                        A informação anónima ocorre enquanto o utilizador visita o Sítio e tem como objetivo
                        melhorar o funcionamento do mesmo, incluindo a gestão e priorização de conteúdos.
                    </p>
                    <p className="details-x-small mLight">
                        Os dados recolhidos têm como finalidades: a identificação dos membros da comunidade/
                        utilizador; gestão das permissões para efeitos de envio de comunicações de marketing via
                        email; possíveis ações de marketing.
                    </p>
                    <br />
                    <p className="details-x-small mBold">
                        2) Responsabilidade
                    </p>
                    <p className="details-x-small mLight">
                        A recolha de dados pessoais no Sítio é da total responsabilidade da ENOMAC, Lda. que
                        assume o compromisso de não transmitir de modo nenhum, informações pessoais dos
                        utilizadores do Sítio a terceiros, sem uma devida autorização dos titulares de tais
                        informações. A ENOMAC, Lda. não se responsabiliza pelo conteúdo acedido através de
                        qualquer hiperligação que leve o utilizador a navegar fora do domínio <a href="www.enomac.pt" className=" white">www.enomac.pt</a>
                        sempre que tais hiperligações sejam da responsabilidade de terceiros. A ENOMAC, Lda.
                        utiliza diversas formas de proteção tecnológica contra ataques à informação pessoal dos
                        utilizadores.
                    </p>
                    <br />
                    <p className="details-x-small mBold">
                        3) Violação de base de dados
                    </p>
                    <p className="details-x-small mLight">
                        A violação, ou tentativa de violação, de bases de dados obtidos através do Sítio terá como
                        consequência a abertura de processo judicial contra o(s) infrator(es).
                    </p>
                    <br />
                    <p className="details-x-small mBold">
                        4) Atualizações/Manutenções de informação pessoal
                    </p>
                    <p className="details-x-small mLight">
                        Ao utilizar o Sítio, o utilizador compromete-se a fornecer e manter os seus dados pessoais
                        atualizados e verdadeiros.
                    </p>
                    <br />
                    <p className="details-x-small mLight">
                        Pode aceder aos seus dados pessoais, obter uma cópia dos mesmos e/ou pedir a sua
                        atualização ou eliminação, nos termos da lei, contactando-nos para a <a target="_blank" href="https://www.google.com/maps/uv?pb=!1s0xd23a72fadb5bbaf%3A0xc7ef79298be3c359!3m1!7e115!4s%2Fmaps%2Fplace%2Fenomac%2Blda%2F%4040.5545216%2C-8.5563557%2C3a%2C75y%2C255.84h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sWxfDQVAaWR4MrAl7QEhoLg*212e0*214m2*213m1*211s0xd23a72fadb5bbaf%3A0xc7ef79298be3c359%3Fsa%3DX!5senomac%20lda%20-%20Pesquisa%20Google!15sCgIgAQ&imagekey=!1e2!2sWxfDQVAaWR4MrAl7QEhoLg&hl=pt-PT&sa=X&ved=2ahUKEwj-8N29vLv2AhXSz4UKHZxlDT4Qpx96BAgqEAg"
                            className="white">morada Avenida da
                            Estação, Lote 2, Letra C, Zona Industrial de Oiã 3770-068 Oiã</a> ou via e-mail
                        para <a href="mailto:geral@enomac.pt" className="white">geral@enomac.pt</a>
                    </p>
                </Modal.Body>
            </Modal>

            <Modal show={showCookies} dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title" onHide={() => setShowCookies(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="details-x-small mMedium text-uppercase">Política de Cookies</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="details-x-small mLight">
                        A ENOMAC, Lda. utiliza cookies que permitem melhorar o desempenho e a experiência
                        de navegação do utilizador. Qualquer navegador de internet (browser) permite ao
                        utilizador aceitar, recusar ou apagar cookies, através das definições do próprio navegador.
                        Se optar por desativar os cookies, alguns serviços do nosso site irão deixar de funcionar,
                        afetando assim a sua experiência de navegação no site.
                    </p>
                    <br />
                    <p className="details-x-small mBold">
                        O que são cookies?
                    </p>
                    <p className="details-x-small mLight">
                        Os cookies são curtos ficheiros de texto com informações relevantes que o seu browser
                        processa, quando um site é visitado por um utilizador.
                    </p>
                    <p className="details-x-small mLight">
                        A colocação de cookies ajuda o Sítio a reconhecer o dispositivo (tablet, desktop, mobile,
                        etc) do utilizador sempre que nos visita. Os cookies retêm apenas informação relacionada
                        com as suas preferências, não revelando informações pessoais.
                    </p>
                    <p className="details-x-small mLight">
                        Para que a sua experiência de navegação seja otimizada o mais possível, recomendamos
                        que não desative os cookies. Os mesmos aumentam a rapidez de resposta na
                        navegação.
                    </p>
                    <br />
                    <p className="details-x-small mBold">
                        Tipos de cookies:
                    </p>
                    <p className="details-x-small mLight">
                        Existem vários tipos de cookies com caraterísticas e funções diferentes. São eles:
                    </p>
                    <p className="details-x-small mLight">
                        • Cookies essenciais – São bastante importantes para aceder a áreas específicas do
                        site permitindo uma navegação correta.
                    </p>
                    <p className="details-x-small mLight">
                        • Cookies de funcionalidade – Os cookies de funcionalidade permitem que as
                        preferências do utilizador sejam guardadas quando visita o site. Desta forma, não é
                        necessário personalizar o Sítio sempre que o visita.
                    </p>
                    <p className="details-x-small mLight">
                        • Cookies analíticos – Este tipo de cookies permite analisar a forma como os
                        utilizadores utilizam o Sítio, conhecer as páginas mais populares e monitorizar o
                        desempenho do site, possibilitando perceber possíveis mensagens de erro. Nunca
                        serão reveladas informações de cariz pessoal.
                    </p>
                    <br />
                    <p className="details-x-small mBold">
                        Considerações Finais
                    </p>
                    <p className="details-x-small mLight">
                        A ENOMAC, Lda. reserva-se o direito de alterar as normas descritas nesta página pelo
                        que aconselhamos a visita frequente a este endereço. Consideramos que os utilizadores
                        estão conscientes destas políticas ao navegar em <a href="www.enomac.pt" className="white">www.enomac.pt</a>.
                    </p>
                </Modal.Body>
            </Modal>
            <Row className="mb-5">
                <Col sm="12" md="3" lg="3">
                    <p className="grey title-medium mBlack text-uppercase mb-3 bb-orange width-70 pb-3">{data.contactos.title}</p>
                    <Row className="d-flex align-items-start">
                        <Col sm="2" md="2" lg="2" className="col-sm-icons-text">
                            <GatsbyImage image={getImage(data.contactos.emailicon)}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                                alt={data.contactos.emailalt}
                                className="m-auto center mt-15"
                            />
                        </Col>
                        <Col sm="10" md="10" lg="10" className="no-space-col-left col-lg-icons-text">
                            <a href={"mailto:" + data.contactos.email} className="no-text-decoration">
                                <p className="mMedium details-large white ">{data.contactos.email}</p>
                            </a>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-start">
                        <Col sm="2" md="2" lg="2" className="col-sm-icons-text">
                            <GatsbyImage image={getImage(data.contactos.phoneicon)}
                                quality={100}
                                formats={["auto", "webp", "avif"]}
                                alt={data.contactos.phonealt}
                                className="m-auto center mt-15"
                            />
                        </Col>
                        <Col sm="10" md="10" lg="10" className="no-space-col-left col-lg-icons-text">
                            <a href={"tel:" + data.contactos.phone} className="no-text-decoration">
                                <p className="mMedium details-large white ">{data.contactos.phonedisplay}</p>
                            </a>
                        </Col>
                    </Row>

                </Col>
                <Col sm="12" md="3" lg="3">
                    <p className="grey title-medium mBlack text-uppercase mb-3 mt-3 bb-orange width-70 pb-3">{data.siganos.title}</p>
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
                <Col sm="12" md="6" lg="6" className="left mt-5">
                    <a href={data.topright.link} className="left no-text-decoration" target="_blank">
                        <p className="white title-medium mBlack text-uppercase mb-1 pb-2 left">{data.topright.title}</p>
                        {data.topright.address.map((item, i) => (
                            <p className="white details-x-small mMedium text-uppercase mb-0 left letter-sp-2" key={"p" + i}>{item}</p>
                        ))}
                    </a>

                </Col>
            </Row>

            <Row className="mt-5 bt-orange max-width">
                <Col sm="12" md="6" lg="6" className="mt-3 no-wrap">
                    <btn  className="no-text-decoration display-inline-block" onClick={() => handleShow(data.politicas[0].title)} >
                        <p className="white details-x-small mMedium text-uppercase mb-0 ">{data.politicas[0].title}</p>

                    </btn>
                    <p className="white details-x-small mMedium display-inline-block ms-3 me-3 ">   |   </p>
                    <btn className="no-text-decoration display-inline-block" onClick={() => handleShow(data.politicas[1].title)} >
                        <p className="white details-x-small mMedium text-uppercase mb-0 ">{data.politicas[1].title}</p>
                    </btn>
                </Col>
                <div className="width-50 ">
                    <a href={data.livroreclamacoes.link} className="no-text-decoration" target="_blank">
                        <GatsbyImage image={getImage(data.livroreclamacoes.icon)}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt={data.livroreclamacoes.alt}
                        />
                    </a>
                </div>
                <Col sm="12" md="6" lg="6" className="right mt-3">
                    {data.copywriter.map((copy, k) => (
                        <div key={"copywriter" + k}>
                            <p className="white mMedium mb-1 details-xx-small text-uppercase" >{copy}</p>
                        </div>
                    ))}

                </Col>

            </Row>
        </div>

    );
}

export default FooterMobile;