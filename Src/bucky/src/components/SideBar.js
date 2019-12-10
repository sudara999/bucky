import React, { Component } from 'react';
import cx from 'classnames';
import styles from "./SideBar.module.css";

class SideBar extends Component {

    state = {
        isActive: false,
        isClicked: false,
    }

    populateDiv = () => {
        for(var i=0; i < this.props.buckyList.length; i++){
            var temp = i;
            document.getElementById("places").innerHTML += "<div class=\"plc\"></div>" + "<button id=\"removeButton" + temp + "\" style=\"display: inline-block; width: 100%; float: right; font-weight: 400; color: #212529; text-align: center; vertical-align: middle; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; background-color: transparent; border: 1px solid transparent; padding: 0.375rem 0.75rem; font-size: 1rem; line-height: 1.5; border-radius: 0.25rem; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; color: #fff; margin-left: auto; background-color: #28a745; border-color: #28a745;\">Remove</button>" + "\n";
            document.getElementsByClassName("plc")[temp].innerText = this.props.buckyList[temp];
            document.getElementById("removeButton" + temp).onclick=this.removeItem(i);
            // console.log("removeButton" + temp);
        }
    };

    removeItem = (n) => {
        return () => {
            console.log(n);
            console.log(this.props.buckyList[n]); 
            this.props.removeFromBucky(this.props.buckyList[n]); 
            this.unpopulateDiv();  
            this.changeClicked();
        }        
    }

    unpopulateDiv () {
        document.getElementById("places").innerText = "";
    }

    // componentDidMount() {
    //     this.populateDiv();
    // };

    changeActive = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    changeClicked = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }

    clickFunction = () => {
        this.changeClicked();
        if (this.state.isClicked){
            this.unpopulateDiv();
        }
        else {
            this.populateDiv();
        }
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
                            <a onClick={this.clickFunction} className={styles.l}>Saved Places</a>
                            <div id="places"></div>
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