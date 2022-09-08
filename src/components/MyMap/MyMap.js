import React, {useState} from "react"
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './MyMap.scss'


const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCMEXaZReac2hZ3gsJFopCp1CspdByzDqc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px` }} className="myMap" />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 50.460401, lng: 30.648404 }
    }),
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
)((props) => {

    const [isOpenInfoBox, setIsOpenInfoBox] = useState(true);

    return <GoogleMap
        zoom={16}
        defaultZoom={8}
        defaultCenter={props.center }
    >
        <div style={{display: isOpenInfoBox ? "flex" : "none"}}>
            <div className="boxInfo-block">
                <div className="boxInfo-block_content">
                    <h3>Хостел Campus</h3>
                    <div className="pt-4 description">
                        <span>- Удобное место полежение</span><br/>
                        <span>- Заселение 24/7</span><br/>
                        <span>- Бесплатная парковка на територии хостела</span><br/>
                        <span>- Предоставляем услуги стирки и сушки вещей за отдельную плату.</span><br/>
                    </div>
                    <div className='d-flex align-items-center location pt-2'>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span className="pl-4">улица Красноткацкая, 65, Киев</span>
                    </div>
                    <div className='d-flex align-items-center phone'>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span className="pl-4">+38 (099) 108 89 10</span>
                    </div>
                </div>
                <div className="btn-close" onClick={() => setIsOpenInfoBox(false)}>X</div>
            </div>
        </div>
        <InfoBox
            defaultPosition={new window.google.maps.LatLng({lat: 50.461201, lng: 30.648704})}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            <div style={{ backgroundColor: `transparent` }}>
                <div className='marker-map'>
                   <span>вулиця <br/> Червонотроцька, 65</span><br/>
                   <span>23 мин. на автомобиле - дом</span>
                </div>
            </div>
        </InfoBox>
        {props.isMarkerShown && <Marker position={{ lat: 50.460401, lng: 30.648404 }} onClick={() => setIsOpenInfoBox(true)} />}
    </GoogleMap>
    }
);

class MyFancyComponent extends React.PureComponent {
    state = {
        isMarkerShown: false,
    };

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    };

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false });
        this.delayedShowMarker()
    };

    render() {
        return (
            <MyMapComponent
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}

export default MyFancyComponent;