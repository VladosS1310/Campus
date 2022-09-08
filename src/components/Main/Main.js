import React, {useState} from "react";
import './Main.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { DateRangePicker } from 'rsuite';
import {Button, Form} from "react-bootstrap";
import MyModal from "../Modal/Modal";
import MySlider from "../Slider/Slider";
import MyMap from "../MyMap/MyMap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {history, validationInput} from "../../helpers";

const Main = ({width}) => {

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

    let currentData = new Date();

    const [dates, setDates] = useState([currentData, currentData]);

    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="main-wrapper">
            <div className="bg-photo d-flex align-items-center justify-content-center">
                <div className="blue-block d-none d-lg-flex align-items-center justify-content-center flex-column">
                    <span>Более</span>
                    <span>200</span>
                    <span>койко - мест</span>
                </div>
                <div className="block-choose-room ml-2 mr-2 mr-sm-2">
                    <span className='block-choose-room_title d-flex w-100 justify-content-center'>Забронируйте место онлайн</span>
                    <Form>
                        <div className="d-flex justify-content-center flex-column flex-sm-row">
                            <div className="d-flex flex-column">
                                <label htmlFor="dataRangePicker">Дата заезда - выезда</label>
                                <DateRangePicker
                                    value={dates}
                                    showOneCalendar={width.setMobile} onChange={(dates) => setDates([...dates])} ranges={[]} locale={Locale} disabledDate={beforeToday()} id="dataRangePicker"/>
                            </div>
                            <div className="d-flex flex-column ml-0 ml-sm-2 mt-3 mt-sm-0 w-100 addIcon">
                                <label htmlFor="young">Взрослых</label>
                                <FontAwesomeIcon icon={faUser} />
                                <input value={inputValue2} onChange={(e) => validationInput(setInputValue2, e)} type="text" id="young"/>
                            </div>
                            <div className="d-flex flex-column ml-0 ml-sm-1 mt-3 mt-sm-0 w-100 addIcon">
                                <label htmlFor="children">Детей</label>
                                <FontAwesomeIcon icon={faUser} />
                                <input value={inputValue} onChange={(e) => validationInput(setInputValue, e)} type="text" id='children'/>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-sm-row mt-5">
                            <Button className="w-100 mr-0 mr-sm-1" onClick={handleShow}>Оставить заявку</Button>
                            <Button className="w-100 ml-0 ml-sm-1 mt-3 mt-sm-0" onClick={() => history.push('/payment')}>Забронировать место</Button>
                        </div>
                    </Form>
                </div>
            </div>
            <MyModal width={width} show={show} handleClose={handleClose}/>
            <MySlider />
            <MyMap isMarkerShown />
        </div>
    )
};

export default Main;