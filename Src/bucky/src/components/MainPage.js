import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import styles from './MainPage.module.css';
import cx from 'classnames';
import SideBar from "./SideBar";
import myFirebase from "../firebase/firebase";
class MainPage extends Component {

    db = myFirebase.firestore();

    componentDidMount() {
        // Look in the Places collection
        this.db.collection("Locations").get().then(locations => {
            // Each location is a document
            locations.forEach(location => {

                console.log(location.id);

                let data = location.data();
                console.log(data.lat);
                console.log(data.lng);
                this.setState({
                    stores: this.state.stores.concat([{
                        latitude: data.lat,
                        longitude: data.lng,
                        name: data.name,
                        description: data.description,
                    }])
                });
            });
        });
    };

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        stores: [],
    };

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} name={store.name} id={index}
                        description={store.description} 
                        position={{
                            lat: store.latitude,
                            lng: store.longitude
                        }}
                        onClick={this.onMarkerClick} />
        })
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={7.27}
                    initialCenter={{ lat: 36.3560818, lng: 127.6840431 }}
                    defaultOptions={{mapTypeControl: false}}
                >
                    
                    {this.displayMarkers()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                            <p>{this.state.selectedPlace.description}</p>
                            <button className={cx(styles["btn"], styles["btn-success"], styles["float-right"])}>Add to bucky</button>
                        </div>
                    </InfoWindow>
                </Map>
                <SideBar />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCT_Fn0Zrkp8a2k-G5MeYTMlxj6jW2iW_E'
})(MainPage);

