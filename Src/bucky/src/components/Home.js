import React, { Component } from 'react';
import styles from "./Home.module.css";
import {
    withRouter,
    Link
} from "react-router-dom";
import myFirebase from "../firebase/firebase";
import firebase from "firebase/app";
import cx from "classnames";

class Home extends Component {

    state = {
        email: "",
        password: "",
        checked: true,
        alert: false,
        alertMessage: "This is an alert message",
    }

    componentDidMount() {
        document.body.style.background = "#007bff";
        document.body.style.background = "linear-gradient(to right, #0062E6, #33AEFF)";
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event) => {
        event.preventDefault();
        myFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.props.history.push("/main");
        }).catch((error) => {
            // Handle Errors here.
            this.setState({
                alert: true,
                alertMessage: error.message
            })
        });
    }

    googleSignin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        myFirebase.auth().signInWithPopup(provider).then((result) => {
            this.props.history.push("/main");
        }).catch(function (error) {
            // Handle Errors here.
            this.setState({
                alert: true,
                alertMessage: error.message
            })
        });
    }

    guestSignin = () => {
        firebase.auth().signOut();
        this.props.history.push("/main");
    }

    rememberPw = () => {
        return this.state.checked ? "current-password" : "new-password";
    }

    checkHandler = () => {
        this.setState({ checked: !this.state.checked });
    }

    alertOffHandler = () => {
        this.setState({ alert: false });
    }

    render() {
        return (
            <div className={styles["container"]}>
                <div className={styles["row"]}>
                    <div
                        className={cx(
                            styles["col-sm-9"],
                            styles["col-md-7"],
                            styles["col-lg-5"],
                            styles["mx-auto"])}
                    >
                        <div
                            className={cx(
                                styles["card"],
                                styles["card-signin"],
                                styles["my-5"])}
                        >
                            <div className={styles["card-body"]}>
                                <h5 className={cx(styles["card-title"], styles["text-center"])}>Sign In to Bucky!</h5>
                                <div className={styles["alert"]} style={{display: this.state.alert? "block": "none"}}>
                                        <span className={styles["closebtn"]} onClick={this.alertOffHandler}>&times;</span>
                                        {this.state.alertMessage}
                                </div>
                                <form className={styles["form-signin"]} onSubmit={this.submitHandler} autoComplete="on">
                                    <div className={styles["form-label-group"]}>
                                        <input type="email" id="inputEmail" className={styles["form-control"]} placeholder="Email address" name="email" onChange={this.onChange} required autoFocus autoComplete="username" />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className={styles["form-label-group"]}>
                                        <input type="password" id="inputPassword" className={styles["form-control"]} placeholder="Password" name="password" onChange={this.onChange} required autoComplete={this.rememberPw()} />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                    <div
                                        className={cx(
                                            styles["custom-control"],
                                            styles["custom-checkbox"],
                                            styles["mb-3"])}
                                    >
                                        <input type="checkbox" className={styles["custom-control-input"]} id="customCheck1" onClick={this.checkHandler} defaultChecked />
                                        <label className={styles["custom-control-label"]} htmlFor="customCheck1">Remember password</label>
                                    </div>
                                    <button
                                        className={cx(
                                            styles["btn"],
                                            styles["btn-lg"],
                                            styles["btn-primary"],
                                            styles["btn-block"],
                                            styles["text-uppercase"])}
                                        type="submit"
                                    >
                                        Sign in
                                    </button>
                                    <div className={styles.underlineHover}>
                                        <Link to="/signup"> No account? Sign Up Here!</Link>
                                    </div>
                                    <hr className={styles["my-4"]} />
                                    <button
                                        className={cx(
                                            styles["btn-google"],
                                            styles["btn"],
                                            styles["btn-lg"],
                                            styles["btn-block"],
                                            styles["text-uppercase"])}
                                        type="button"
                                        onClick={this.googleSignin}
                                    >
                                        <i
                                            className={cx(
                                                styles["fab"],
                                                styles["fa-google"],
                                                styles["mr-2"])}
                                        >
                                        </i>
                                        Sign in with Google
                                    </button>
                                    <button
                                        className={cx(
                                            styles["btn"],
                                            styles["btn-lg"],
                                            styles["btn-facebook"],
                                            styles["btn-block"],
                                            styles["text-uppercase"])}
                                        type="button"
                                        onClick={this.guestSignin}
                                    >
                                        <i className={cx(
                                            styles["fab"],
                                            styles["mr-2"])}
                                        >
                                        </i>
                                        Sign in as Guest
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);