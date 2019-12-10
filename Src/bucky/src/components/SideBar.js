import React, { Component } from 'react';
import cx from 'classnames';
import styles from "./SideBar.module.css";

class SideBar extends Component {

    state = {
        isActive: false,
    }

    // populateDiv () {
    //     for(var i=0; i < this.props.buckyList.length; i++){
    //         document.getElementById("places").innerText += this.props.buckyList[i] + "\n";
    //     }
    // };

    // componentDidMount() {
    //     this.populateDiv();
    // };

    changeActive = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <nav id={styles["sidebar"]} className={this.state.isActive ? styles["active"] : styles["inactive"]}>
                    <div className={styles["sidebar-header"]}>
                        <h3>Bucky</h3>
                    </div>
                    <ul className={cx(styles["list-unstyled"], styles["components"])}>
                        <p>Welcome Back {this.props.fname} </p>
                        <li>
                            <a className={styles.l}>Saved Places</a>
                            <p id="places"></p>
                        </li>
                        {/* <li>
                            <a className={styles.l} href="#">Your profile</a>
                        </li> */}
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

export default SideBar;