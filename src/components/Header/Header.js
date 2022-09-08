import React, {useState} from "react";
import './Header.scss';
import Logo from "../../assets/img/logo.png";
import {Navbar, Container} from 'react-bootstrap'
import {NavLink} from "react-router-dom";
import {history} from "../../helpers";

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    history.listen(() => {
        if(isOpen) setIsOpen(!isOpen);
    });

    const handlerOnToggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <Container>
            <header>
                <Navbar expanded={isOpen} onToggle={handlerOnToggle} expand="lg" className="pl-0 pr-0">
                    <NavLink to="/"><img src={Logo} alt="Logo"/></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navbar-menu d-flex flex-column w-100">
                            <div className="navbar-menu__contacts d-none d-lg-flex justify-content-end ">
                                <span>+38 099 108 80 10</span>
                                <span>м. Лесная, ул. Красноткацкая, 65, г. Киев, Украина</span>
                            </div>
                            <div className="navbar-menu__links flex-column flex-lg-row d-flex justify-content-end text-right">
                                <NavLink exact to="/" activeClassName="active">Главная </NavLink>
                                <NavLink to="/about" activeClassName="active">О нас</NavLink>
                                <NavLink to="/contacts" activeClassName="active" className="mr-3 mr-lg-0">Контакты</NavLink>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </Container>
    )
};


export default Header;