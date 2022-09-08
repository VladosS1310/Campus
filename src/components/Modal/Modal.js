import React, {useState} from "react";
import {Modal, Button, Row, Col, Form} from "react-bootstrap";
import {DateRangePicker} from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
import ReactTelephoneInput from "react-telephone-input/es/ReactTelephoneInput";
import 'react-telephone-input/css/default.css'
import './Modal.scss'
import {Flags} from '../../assets/img/import-foto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {validationInput} from "../../helpers";

const MyModal = ({show, handleClose, width}) => {
    const Locale = {
        sunday: 'Нд',
        monday: 'Пн',
        tuesday: 'Вт',
        wednesday: 'Ср',
        thursday: 'Чт',
        friday: 'Пт',
        saturday: 'Сб',
        ok: 'OK',
        today: 'Today',
        yesterday: 'Yesterday',
        last7Days: 'Last 7 Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    };

    const {
        beforeToday
    } = DateRangePicker;

    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    let currentData = new Date();

    const [dates, setDates] = useState([currentData, currentData]);

    return (
        <Modal className='my-modal' show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton> </Modal.Header>
            <Modal.Body>
                <form>
                    <Row>
                        <Col md={12} lg={4}>
                            <div className="d-flex flex-column">
                                <label htmlFor="dataRangePicker">Дата заезда - выезда</label>
                                <DateRangePicker value={dates} showOneCalendar={width.setMobile} ranges={[]} locale={Locale}
                                                 disabledDate={beforeToday()} id="dataRangePicker"/>
                            </div>
                        </Col>
                        <Col className='pr-3 pr-lg-2 mt-3 mt-lg-0' md={12} lg={4}>
                            <div className="d-flex flex-column w-100 addIcon">
                                <label htmlFor="young">Взрослых</label>
                                <FontAwesomeIcon icon={faUser} />
                                <input value={inputValue} onChange={(e) => validationInput(setInputValue, e)} type="text" id="young"/>
                            </div>
                        </Col>
                        <Col className='pl-3 pl-lg-2 mt-3 mt-lg-0' md={12} lg={4}>
                            <div className="d-flex flex-column w-100 addIcon">
                                <label htmlFor="children">Детей</label>
                                <FontAwesomeIcon icon={faUser} />
                                <input value={inputValue2} onChange={(e) => validationInput(setInputValue2, e)} type="text" id='children'/>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Control type="text" placeholder="Им'я" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReactTelephoneInput
                                defaultCountry="ua"
                                flagsImagePath={Flags}
                            />
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <Form.Group controlId="email">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="textarea">
                                <Form.Control as="textarea" rows="3" placeholder='Комментарик заказу' />
                            </Form.Group>
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Отправить
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default MyModal;