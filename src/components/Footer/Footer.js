import React, {useState} from "react";
import './Footer.scss'
import {Container, Row, Col, Button} from "react-bootstrap";
import LogoWhite from '../../assets/img/logo-white.svg';
import {NavLink} from "react-router-dom";
import MyModal from "../Modal/Modal";
import {history} from "../../helpers";

const Footer = ({width}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="footer-wrapper">
            <footer>
                <Container>
                    <Row>
                        <Col className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                            <div className="d-flex flex-column w-100">
                                <NavLink to="/" className="d-flex justify-content-center justify-content-sm-start">
                                    <img src={LogoWhite} alt=""/>
                                </NavLink>
                                <span className="footer-text text-center text-sm-left ">Забронируйте место онлайн </span>
                            </div>
                            <div className="footer-buttons w-100 d-flex flex-column flex-lg-row justify-content-end align-items-center">
                                <Button className="mr-0 mr-lg-3" variant="primary" onClick={handleShow}>Оставить заявку</Button>
                                <Button className="mt-2 mt-lg-0" onClick={() => history.push('/payment')}>Забронировать место</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <MyModal width={width} show={show} handleClose={handleClose}/>
            </footer>
            <div className="under-footer">
                <Container>
                    <Row>
                        <Col>
                            <span>Сделано с помощью технологий Majex</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
};

export default Footer;