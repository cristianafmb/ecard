import React, { useState } from "react"
import { Modal, Row, Col, Button } from 'react-bootstrap'

import $ from 'jquery/dist/jquery.slim' // importing this worked like a charm
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import axios from 'axios'

function Form({ data }) {
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [response, setResponse] = useState("")
    var checker = [];

    const handleClose = () => setShow(false);

    const handleCloseError = () => setShowError(false);
    const [errorResponse, setErrorResponse] = useState("")

    function doSubmit(e) {
        checkValues();
        if (checker.length < 1) {

            e.preventDefault()
            var formData = new FormData()
            if (typeof document !== 'undefined') {
                formData.append('name', document.querySelector("#name").value)
                formData.append('company', document.querySelector("#company").value)
                formData.append('email', document.querySelector("#email").value)
                formData.append('contact', document.querySelector("#contact").value)
                formData.append('message', document.querySelector("#message").value)
            }

            axios({
                url: 'https://invisual.pt/teste-form/enomac-form-contact.php',
                method: 'post',
                config: { headers: { 'Content-Type': 'multipart/form-data' } },
                data: formData
            })
                .then(res =>
                    res.data === "success"
                        ? success()
                        : setResponse("Mensagem enviada com sucesso!")

                )
            setShow(true)
        } else {
            e.preventDefault()
            setResponse("" + checker + ".");
            setShowError(true)
            if (checker.length > 2) {
                setErrorResponse("Faltam preencher")
            } else {
                setErrorResponse("Falta preencher")
            }
        }
    }

    function checkValues() {
        checker = []
        let checkerTemp = []
        if (typeof document !== 'undefined') {
            if (!document.querySelector("#name").value) {
                checkerTemp.push(" Nome")
            }
            if (!document.querySelector("#email").value) {
                checkerTemp.push(" Email")
            }
            if (document.querySelector("#email").value) {
                if (!document.querySelector("#email").value.toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )) {
                    checkerTemp.push(" Email válido")
                }
            }
            if (!document.querySelector("#company").value) {
                checkerTemp.push(" Empresa")
            }
            if (!document.querySelector("#message").value) {
                checkerTemp.push(" Mensagem")
            }

        }

        checker = checkerTemp
    }

    const success = () => {
        setResponse("Mensagem enviada com sucesso!")
        if (typeof document !== 'undefined') {
            document.getElementById("form").reset();

            /*if (typeof window !== "undefined") {
                 window.gtag("event", "Submit", {
                     event_category: "Formulário Consulta",
                     event_label: "Marcação de Consulta " + document.querySelector("#especiality").value,
                 })
             }*/
        }

    }

    return (
        <div className="position-relative">
            <Modal show={show} onHide={handleClose} centered className="success-form">
                <Modal.Header >
                    <Modal.Title>Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Formulário Enviado.</Modal.Body>
            </Modal>
            <Modal show={showError} onHide={handleCloseError} centered className="">
                <Modal.Header >
                    <Modal.Title>{errorResponse}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{response}</Modal.Body>
            </Modal>

            <div className='wrapper'>
                <div >
                    <p className="white mMedium title-medium letter-sp-5 mb-5 text-uppercase">{data.title}</p>
                </div>
                <form method="POST" onSubmit={doSubmit} action="/" id="form">
                    <Row>
                        <Col sm="12" md="6" lg="6" className="mb-3">
                            <input className="input-form mMedium max-width details-medium" type='text' id="name" name='name' placeholder='NOME *' required />
                        </Col>
                        <Col sm="12" md="6" lg="6" className="mb-3">
                            <input className="input-form mMedium max-width details-medium" type='text' id="company" name='company' placeholder='EMPRESA *' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="6" lg="6" className="mb-3">
                            <input className="input-form mMedium max-width details-medium" type='text' id="email" name='email' placeholder='EMAIL *' required />
                        </Col>
                        <Col sm="12" md="6" lg="6" className="mb-3">
                            <input className="input-form mMedium max-width details-medium" type='text' id="contact" name='contact' placeholder='TELEMÓVEL' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="12" lg="12">
                            <textarea className="input-form mMedium max-width details-medium" type='text' id="message" name='message' placeholder='MENSAGEM *' required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="6" lg="6" className="mb-3">
                            <p className="white mRegular pt-4 pb-2 details-medium">{data.obrigatorio}</p>
                            <p className="white mRegular pb-3 details-medium">{data.details}</p>
                        </Col>
                        <Col sm="12" md="6" lg="6" className="mb-3">
                            <div className="max-width right pt-4">
                                <Button variant="warning" className="btn-form details-small pt-3 pb-3 pe-5 ps-5 mBold" type="submit" id='button' onClick={doSubmit}>{data.txtbtn}</Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>

    );
}

export default Form;