import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import mainStyles from './MainPage.module.css';
import cx from 'classnames';
import SideBar from "./SideBar";
class MainPage extends Component {

    componentDidMount() {

    }

    state = {
        isActive: true,
    }

    changeActive = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        return (
            <div>
                <div className={mainStyles["wrapper"]}>

                    <div>
                        <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                        />
                        <div className={mainStyles.fixed}>
                            <div id={mainStyles["content"]} className={mainStyles.onTop}>
                            <SideBar active={this.state.isActive} />
                                {/* Button */}
                                <nav className={cx(mainStyles.navbar, mainStyles["navbar-expand-lg"], mainStyles["navbar-light"], mainStyles["bg-light"])}>
                                    <div className={mainStyles["container-fluid"]}>
                                        <button type="button" id={mainStyles["sidebarCollapse"]} className={this.state.isActive ? mainStyles["active"] : mainStyles["inactive"]} onClick={this.changeActive}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStyles = {
    width: '100%',
    height: '100%',
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDOd24noPxchfLSG5lay1dCCZMfJ_2cNv4'
})(MainPage);