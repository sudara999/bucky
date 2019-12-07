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
            // <div>
            //     <h1 id="title">Welcome to Bucky</h1>
            //     <div className={styles["wrapper">
            //         <div id="formContent">
            //             <div className={styles["fadeIn first">
            //             </div>
            //             <form>
            //                 <input type="text" id="login" className={styles["fadeIn second" name="email" placeholder="login" onChange={this.onChange}></input>
            //                 <input type="text" id="password" className={styles["fadeIn third" name="password" placeholder="password" onChange={this.onChange}></input>
            //                 <input type="button" className={styles["fadeIn fourth" value="Log In" onClick={this.submitHandler}></input>
            //             </form>
            //             <div id="formFooter">
            //                 <Link className={styles["underlineHover" to="/signup">No account? Sign Up Here!</Link>
            //                 <div id="googleSignin">
            //                     <span> Sign in with Google </span>
            //                     <button onClick={this.googleSignin}>
            //                         Sign in
            //                     </button>
            //                 </div>
            //                 <div id="guestSignin">
            //                     <span> Sign in as guest </span>
            //                     <button onClick={this.guestSignin}>
            //                         Sign in
            //                     </button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
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
                                <form className={styles["form-signin"]}>
                                    <div className={styles["form-label-group"]}>
                                        <input type="email" id="inputEmail" className={styles["form-control"]} placeholder="Email address" required autofocus />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    <div className={styles["form-label-group"]}>
                                        <input type="password" id="inputPassword" className={styles["form-control"]} placeholder="Password" required />
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
                                            styles["btn btn-lg"],
                                            styles["btn-primary"], 
                                            styles["btn-block"], 
                                            styles["text-uppercase"])} 
                                        type="submit"
                                    >
                                        Sign in
                                    </button>
                                    <hr className={styles["my-4"]} />
                                    <button 
                                        className={cx(
                                            styles["btn"], 
                                            styles["btn-lg"], 
                                            styles["btn-google"], 
                                            styles["btn-block"], 
                                            styles["text-uppercase"])} 
                                        type="submit"
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
                                    >
                                        <i className={cx(
                                            styles["fab"], 
                                            styles["fa-facebook-f"], 
                                            styles["mr-2"])}
                                        >
                                        </i>
                                        Sign in with Facebook
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