import React from "react";
import './Slider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from 'react-redux';
import {getCategoriesAction} from "../../actions/getCategories.action";
import {NavLink, Switch} from "react-router-dom";

const MySlider = ({categories}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

  return (
      <Switch>
          <Container>
              <Row className="mr-0 mr-sm-3 ml-0 ml-sm-3">
                  <Col>
                      <Slider {...settings} >
                          {
                              categories.allData && categories.allData.map(item => {
                                  return (
                                      <NavLink to={'/hotelroom/' + item.id}>
                                          <div className='slider-block d-flex flex-column justify-content-between'>
                                              <div className="d-flex flex-column justify-content-between mb-2">
                                                  <h3>{item.name}</h3>
                                                  <span>{item.price} грн</span>
                                              </div>
                                              {/*<img src={'https://utes.majex.org' + item?.img ? 'https://utes.majex.org' + item?.img[0] : ''} alt=""/>*/}
                                              <img src="../../assets/img/foto13.png" alt=""/>
                                          </div>
                                      </NavLink>
                                  )
                              })
                          }
                      </Slider>
                  </Col>
              </Row>
          </Container>
      </Switch>

      )
};

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
};

const mapDispatchToProps = dispatch => {
    dispatch(getCategoriesAction());
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MySlider);
