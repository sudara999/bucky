import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styles from './MainPage.module.css';
import cx from 'classnames';
import SideBar from "./SideBar";
class MainPage extends Component {

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                />
                <SideBar />
            </div>
        );
    }
}

const mapStyles = {
    width: '100%',
    height: '100%',
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDOd24noPxchfLSG5lay1dCCZMfJ_2cNv4'
})(MainPage);