import React, { Component } from 'react';
import icon from "../images/icon.jpg";
import myFirebase from "../firebase/firebase";
import firebase from "firebase/app"

class Home extends Component {

    state = {
        email: "",
        password: ""
    }

    emailHandler = ({target}) => {
        this.setState({ email: target.value });
    }

    pwhandler = ({target}) => {
        this.setState({ password: target.value });
    }

    submitHandler = () => {
        myFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((err) => {
            alert("ERR!");
        });
    }

    googleSignin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        myFirebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            });
    }

    render() {  
        return (
            <div>
                <h1>Welcome to Bucky</h1>
                <div className="wrapper">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src={icon} id="icon"/>
                    </div>

                    <form>
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" onChange={this.emailHandler}></input>
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" onChange={this.pwhandler}></input>
                        <input type="button" class="fadeIn fourth" value="Log In" onClick={this.submitHandler}></input>
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">No account? Sign Up Here!</a>
                        <div id="googleSignin">
                            <span> Sign in with Google </span>
                            <button onClick={this.googleSignin}>
                                Sign in
                            </button>
                        </div>    
                    </div>

                </div>

                {/* <form action="">
                    <label htmlFor="username">Username: </label>
                    <input type="email" name="username" placeholder="Username or Email"/><br></br>
                    <label htmlFor="password">Password: </label>
                    <input type="email" name="username" placeholder="Password"/><br></br>

                    <a href="https://www.google.com" style={{color: "magenta", fontSize: "20px", textDecoration: "underline"}}>No account? Signup Here!</a>
                </form> */}
            </div>
            </div>
        )
    }
}

export default Home;