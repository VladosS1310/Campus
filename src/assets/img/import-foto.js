import Logo from './logo.png';
import Background from './foto-1.jpg';
import Slide1 from './Slide1.jpg';
import Slide2 from './Slide2.jpg';
import Slide3 from './Slide3.jpg';
import Foto2 from './foto2.jpg';
import Foto3 from './foto3.jpg';
// import Foto4 from './foto4.jpg';
// import Foto5 from './foto5.jpg';
// import Foto6 from './foto6.jpg';
// import Foto7 from './foto7.jpg';
import Foto8 from './foto8.jpg';
import Foto9 from './foto9.jpg';
import Foto10 from './foto10.jpg';
import Foto11 from './foto11.jpg';
import Foto12 from './foto12.jpg';
import Foto13 from  './foto13.png';
import Foto14 from  './foto14.png';
import Foto15 from  './foto15.png';
import Foto16 from  './foto16.png';
import Flags from './flags.png';
import LogoWhite from './logo-white.svg';
import ContactFoto from './contacts.png';
import {transformedArrayImages} from "../../helpers";

export const arrayFotos = transformedArrayImages([Foto13, Foto14, Foto15, Foto16]);
export const arrayFotoSlider = transformedArrayImages([Background, Foto8, Foto9, Foto11, Foto10, Foto12]);
export const arrayFotoAboutPage = transformedArrayImages([Slide1, Foto3, Foto2, Slide2]);
export const arrayFotoAboutPage2 = transformedArrayImages([Foto8, Foto9]);

export {
    Logo,
    LogoWhite,
    Background,
    Slide1,
    Slide2,
    Slide3,
    Flags,
    ContactFoto
}