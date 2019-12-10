import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import styles from './MainPage.module.css';
import cx from 'classnames';
import SideBar from "./SideBar";
import myFirebase from "../firebase/firebase";

class MainPage extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        stores: [],
        isUser: false,
        //if isUser is true, the following would be updated on the database too
        fname: "",
        lname: "",
        buckyList: [],
    };

    componentDidMount() {
        let db = myFirebase.firestore();
        this.loadLocations(db);
        this.loadUserData(db);
    };

    loadLocations = (db) => {
        // Look in the Places collection
        db.collection("Locations").get().then(locations => {
            // Each location is a document
            locations.forEach(location => {
                let data = location.data();
                this.setState({
                    stores: this.state.stores.concat([{
                        latitude: data.lat,
                        longitude: data.lng,
                        name: location.id,
                        description: data.description,
                    }])
                });
            });
        });
    }

    loadUserData = (db) => {
        let user = myFirebase.auth().currentUser;
        if (user != null) {
            this.setState({ isUser: true });
            db.collection("Users").doc( user.email || user.providerData[0].email ).get().then(doc => {
                if (doc.exists) {
                    let userData = doc.data();
                    this.setState({
                        buckyList: userData.buckyList,
                        fname: userData.fname,
                        lname: userData.lname,
                    });
                }
                else {
                    db.collection("Users").doc(user.email).set({
                        fname: "",
                        lname: "",
                        dob: "",
                        add1: "",
                        add2: "",
                        country: "",
                        state: "",
                        city: "",
                        zip: "",
                        buckyList: []
                    });
                }
            }).catch(error => alert(error.message));
        }
    }

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

    addToBucky = () => {
        console.log("Add to bucky");
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={7.27}
                    initialCenter={{ lat: 36.3560818, lng: 127.6840431 }}
                    defaultOptions={{ mapTypeControl: false }}
                >
                    {this.displayMarkers()}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >   
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                            <p>{this.state.selectedPlace.description}</p>
                            <button type="button" onClick={this.addToBucky} className={cx(styles["btn"], styles["btn-success"], styles["float-right"])}>Add to bucky</button>
                        </div>
                    </InfoWindowEx>
                </Map>
                <SideBar fname={this.state.fname} lname={this.state.lname} buckyList={this.state.buckyList}/>
            </div>
        );
    }
}

class InfoWindowEx extends Component {
    constructor(props) {
      super(props);
      this.infoWindowRef = React.createRef();
      this.contentElement = document.createElement(`div`);
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.children !== prevProps.children) {
        ReactDOM.render(
          React.Children.only(this.props.children),
          this.contentElement
        );
        this.infoWindowRef.current.infowindow.setContent(this.contentElement);
      }
    }
  
    render() {
      return <InfoWindow ref={this.infoWindowRef} {...this.props} />;
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCT_Fn0Zrkp8a2k-G5MeYTMlxj6jW2iW_E'
})(MainPage);

