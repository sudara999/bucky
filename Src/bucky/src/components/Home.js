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
        password: ""
    }

    componentDidMount(){
        document.body.style.background = "#007bff";
        document.body.style.background = "linear-gradient(to right, #0062E6, #33AEFF)";
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = () => {
        myFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.props.history.push("/main");
        }).catch((err) => {
            alert("Sorry the user information was incorrect. Please try again.");
        });
    }

    googleSignin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        myFirebase.auth().signInWithPopup(provider).then((result) => {
            var user_email = result.user.email;
            this.props.history.push("/main");
        }).catch(function (error) {
            // Handle Errors here.
            alert("Sorry the authentication failed. Please try again.");
        });
    }

    guestSignin = () => {
        this.props.history.push("/main");
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
                                <h5 className={cx(styles["card-title"], styles["text-center"])}>Sign In</h5>
                                <form className={styles["form-signin"]} action="">
                                    <div className={styles["form-label-group"]}>
                                        <input type="email" id="inputEmail" className={styles["form-control"]} placeholder="Email address" name="email" onChange={this.onChange} required autofocus />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    <div className={styles["form-label-group"]}>
                                        <input type="password" id="inputPassword" className={styles["form-control"]} placeholder="Password" name="password" onChange={this.onChange} required />
                                        <label for="inputPassword">Password</label>
                                    </div>
                                    <div 
                                        className={cx(
                                            styles["custom-control"], 
                                            styles["custom-checkbox"], 
                                            styles["mb-3"])}
                                    >
                                        <input type="checkbox" className={styles["custom-control-input"]} id="customCheck1" />
                                        <label className={styles["custom-control-label"]} for="customCheck1">Remember password</label>
                                    </div>
                                    <button 
                                        className={cx(
                                            styles["btn"],
                                            styles["btn-lg"],
                                            styles["btn-primary"], 
                                            styles["btn-block"], 
                                            styles["text-uppercase"])}
                                        onClick={this.submitHandler} 
                                        type="button"
                                    >
                                        Sign in
                                    </button>
                                    <Link className={styles.underlineHover} to="/signup">No account? Sign Up Here!</Link>
                                    <hr className={styles["my-4"]} />
                                    <button 
                                        className={cx(
                                            styles["btn-google"], 
                                            styles["btn"], 
                                            styles["btn-lg"], 
                                            styles["btn-block"], 
                                            styles["text-uppercase"])} 
                                        type="submit"
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
                                        type="submit"
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