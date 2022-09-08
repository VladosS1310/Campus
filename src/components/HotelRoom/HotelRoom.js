import React from "react";
import './HotelRoom.scss'
import {Container, Row, Col} from "react-bootstrap";
// import {arrayFotoSlider} from '../../assets/img/import-foto';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import {getCategoriesAction} from "../../actions/getCategories.action";
import {connect} from "react-redux";
import Payment from "../Payment/Payment";
import {history} from "../../helpers";

const HotelRoom = ({categories}) => {

    const configSlider = {
        showFullscreenButton: false,
        showPlayButton: false,
        showNav: false,
    };

    return (
        <div className='hotel-room-wrapper'>
            {
                categories.map(item => {
                    return <Container>
                        <Row>
                            <Col>
                                <ImageGallery items={item.img.map(item => {return {
                                    original: `https://utes.majex.org${item}`,
                                    thumbnail: `https://utes.majex.org${item}`
                                }})} {...configSlider}/>
                            </Col>
                        </Row>
                        <div className="hotel-room-content">
                            <Row>
                                <Col>
                                    <h3>{item.name}</h3>
                                    <span className='hotel-room-content_text'>{item.info}</span>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col sm={12} md={6}>
                                    <h3>Условия проживания</h3>
                                    <div>
                                        <Row className='mt-4'>
                                            <Col><b>Мебель: </b></Col>
                                            <Col>
                                                {
                                                    item.furniture.map(item => <React.Fragment><span>{item}</span><br/></React.Fragment>)
                                                }
                                            </Col>
                                        </Row>
                                        <Row className='mt-4'>
                                            <Col><b>Кровати: </b></Col>
                                            <Col>
                                                {
                                                    item.beds.map(item => <React.Fragment><span>{item}</span><br/></React.Fragment>)
                                                }
                                            </Col>
                                        </Row>
                                        <Row className='mt-4'>
                                            <Col><b>Вид из окон: </b></Col>
                                            <Col>
                                                {
                                                    item.environment.map(item => <React.Fragment><span>{item}</span><br/></React.Fragment>)
                                                }
                                            </Col>
                                        </Row>
                                        <Row className='mt-4'>
                                            <Col><b>Ванная комната:</b></Col>
                                            <Col>
                                                {
                                                    item.bathroom.map(item => <React.Fragment><span>{item}</span><br/></React.Fragment>)
                                                }
                                            </Col>
                                        </Row>
                                        <Row className='mt-4'>
                                            <Col><b>Интернет, телефония:</b></Col>
                                            <Col>
                                                {
                                                    item.network.map(item => <React.Fragment><span>{item}</span><br/></React.Fragment>)
                                                }
                                            </Col>
                                        </Row>
                                        <Row className='mt-4'>
                                            <Col><b>Электроника</b></Col>
                                            <Col>
                                                    {
                                                        item.electronics.map(item => <React.Fragment><span>{item}</span><br/></React.Fragment>)
                                                    }
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} className='mt-4 d-flex justify-content-end'>
                                    <div className="block-action text-center">
                                        <h1>Акция!</h1>
                                        <span className='mt-4 d-flex'>При оплате за месяц или неделю действуют скидки:</span>
                                        <Row className='mt-4'>
                                            <Col className='text-left mt-2'><b>Сутки:</b></Col>
                                            <Col className='text-right mt-2'><b>100 грн</b></Col>
                                        </Row>
                                        <Row>
                                            <Col className='text-left mt-2'><b>Неделя:</b></Col>
                                            <Col className='text-right mt-2'><b>665 грн</b></Col>
                                        </Row>
                                        <Row>
                                            <Col className='text-left mt-2'><b>Месяц:</b></Col>
                                            <Col className='text-right mt-2'><b>560 грн</b></Col>
                                        </Row>
                                        <button className='btn' onClick={() => history.push('/payment')}>Забронировать</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                })
            }
        </div>
    )
};

const mapStateToProps = (state, {match}) => {
    return {
        categories: state.categories.allData.filter(item => +item.id === +match.params.id)
    }
};

const mapDispatchToProps = (dispatch, {history, match}) => {
    if(history.action === 'POP') {
        dispatch(getCategoriesAction());
    }
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelRoom);
