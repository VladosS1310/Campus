import React, {useEffect, useState} from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import {Router, Route} from "react-router-dom";
import About from "../About/About";
import HotelRoom from "../HotelRoom/HotelRoom";
import Footer from "../Footer/Footer";
import {history} from "../../helpers";
import Contacts from "../Contacts/Contacts";
import Payment from "../Payment/Payment";

const ResponsiveLayout = () => {

    const [width, setWidth] = useState({setMobile: false});

    useEffect(() => {
        const handler = (e) => {
            let getWidth = e.target.innerWidth;
            if (getWidth <= 768) {
                if (!width.setMobile) {
                    setWidth({setMobile: true});
                }
            }
            if (getWidth >= 768) {
                if (width.setMobile) {
                    setWidth({setMobile: false});
                }
            }
        };

        window.addEventListener('resize', handler);
        return () => {
            window.removeEventListener('resize', handler);
        }
    });

    return (
        <div>
            <Router history={history}>
                <Header/>
                <div className="app-wrapper-content">
                    <Route exact path='/' render={ () => <Main width={width}/> } />
                    <Route path='/about' render={ () => <About /> } />
                    <Route path='/hotelroom/:id' component={HotelRoom} />
                    <Route path='/contacts' render={ () => <Contacts />} />
                    <Route path='/payment' render={ () => <Payment /> } />
                </div>
                <Footer width={width}/>
            </Router>
        </div>
    )
}

export default ResponsiveLayout;