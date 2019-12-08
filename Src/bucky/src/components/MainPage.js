import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import styles from './MainPage.module.css';
import cx from 'classnames';
import SideBar from "./SideBar";
class MainPage extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        stores: [{lat: 37.3797566, lng: 126.6589001, name: 'Tripple Street'},
            {latitude: 37.3797566, longitude: 126.6589001, name: 'Tripple Street'},
            {latitude: 37.3797566, longitude: 126.6589001, name: 'Tripple Street'},
            {latitude: 37.3797566, longitude: 126.6589001, name: 'Tripple Street'},
            {latitude: 37.3797566, longitude: 126.6589001, name: 'Tripple Street'},
            {latitude: 37.3797566, longitude: 126.6589001, name: 'Tripple Street'}]
    };

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} name={store.name} id={index} position={{
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
                    zoom={12}
                    initialCenter={{ lat: 37.4834909, lng: 126.8905134 }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Some Place'}
                    />
                    {this.displayMarkers()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
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