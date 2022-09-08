import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ContactFoto} from '../../assets/img/import-foto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Contacts.scss'
import MyMap from '../MyMap/MyMap';

const Contacts = () => {
    return (
        <div className='contacts-wrapper'>
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <img src={ContactFoto} alt=""/>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center" md={12} lg={6}>
                        <h2>Хостел Campus</h2>
                        <span>- Удобное место полежение</span><br/>
                        <span>- Заселение 24/7</span><br/>
                        <span>- Бесплатная парковка на територии хостела</span><br/>
                        <span>- Предоставляем услуги стирки и сушки вещей за отдельную плату.</span><br/>
                        <div className='d-flex align-items-center location'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span className="pl-4">улица Красноткацкая, 65, Киев</span>
                        </div>
                        <div className='d-flex align-items-center phone'>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                            <span className="pl-4">+38 (099) 108 89 10</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <MyMap />
        </div>
    )
}

export default Contacts;