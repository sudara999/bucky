import React, { Component } from 'react';
import cx from 'classnames';
import styles from "./SideBar.module.css";

class SideBar extends Component {

    state = {
        isActive: false,
        isClicked: true,
    }

    changeActive = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    changeClicked = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }

    render() {
        return (
            <div className={styles.wrapper}>

                <nav id={styles["sidebar"]} className={this.state.isActive ? styles["active"] : styles["inactive"]}>
                    <div className={styles["sidebar-header"]}>
                        <h3>Bucky</h3>
                        <p style={{color: "#c0c0c0"}}>Welcome Back {this.props.fname} </p>
                    </div>
                    <ul className={cx(styles["list-unstyled"], styles["components"])}>
                            <li>
                                <a onClick={this.changeClicked} className={styles.l}>Saved Places</a>
                            </li>
                            {this.state.isClicked &&
                                <SavedPlaces buckyList={this.props.buckyList} removeFromBucky={this.props.removeFromBucky}/>
                            }
                    </ul>
                </nav>

                <button type="button" id={styles["sidebarCollapse"]} className={this.state.isActive ? styles["active"] : styles["inactive"]} onClick={this.changeActive}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        );
    }
}

class SavedPlaces extends Component {

    showBuckyList = () => {
        return this.props.buckyList.map((place,index) => {
            return (
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "baseline", margin: "5px" }} key={index}>
                    <div style={{ backgroundColor: "transparent", paddingLeft: "15px" }}>{place}</div>
                    <button className={cx(styles["btn"], styles["btn-success"], styles["float-right"])} onClick={() => this.props.removeFromBucky(this.props.buckyList[index])}>
                        Remove
                    </button>
                </div>
            );
        });
    }

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }} id="places">
                {this.showBuckyList()}
            </div>
        );
    }
}

export default SideBar;