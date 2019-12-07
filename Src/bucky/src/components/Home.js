import React, { Component } from 'react';
// import "./Home.css"
import {
    withRouter,
    Link
} from "react-router-dom";
import myFirebase from "../firebase/firebase";
import firebase from "firebase/app"

class Home extends Component {

    state = {
        email: "",
        password: ""
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = () => {
        myFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
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
            <div>
                <h1 id="title">Welcome to Bucky</h1>
                <div className="wrapper">
                    <div id="formContent">
                        <div className="fadeIn first">
                        </div>
                        <form>
                            <input type="text" id="login" class="fadeIn second" name="email" placeholder="login" onChange={this.onChange}></input>
                            <input type="text" id="password" class="fadeIn third" name="password" placeholder="password" onChange={this.onChange}></input>
                            <input type="button" class="fadeIn fourth" value="Log In" onClick={this.submitHandler}></input>
                        </form>
                        <div id="formFooter">
                            <Link className="underlineHover" to="/signup">No account? Sign Up Here!</Link>
                            <div id="googleSignin">
                                <span> Sign in with Google </span>
                                <button onClick={this.googleSignin}>
                                    Sign in
                                </button>
                            </div>
                            <div id="guestSignin">
                                <span> Sign in as guest </span>
                                <button onClick={this.guestSignin}>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);