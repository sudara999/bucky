import React, { Component } from 'react';
import icon from "../images/icon.png";
import GoogleLogin from "react-google-login";
import MainPage from './MainPage'
import SignUp from './SignUp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



let logged = (response) => {
    alert("AUTHENTICATED!");
    console.log(response.googleId)
}

let notLogged = (response) => {
    console.log(response);
}

class Home extends Component {
    render() {
        return (
            <div>
                <h1 id="title">Welcome to Bucky</h1>
                <div className="wrapper">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <img src={icon} id="icon" />
                        </div>

                        <form>
                            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"></input>
                            <input type="text" id="password" class="fadeIn third" name="password" placeholder="password"></input>
                            <input type="submit" class="fadeIn fourth" value="Log In"></input>
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="">No account? Sign Up Here!</a>
                            <br></br>
                            <a className="underlineHover" href="">Or continue as guest</a>
                            <div id="googleSignin">
                                <span> Sign in with Google </span>
                                <GoogleLogin
                                    clientId="1017650296184-h09julkd67o5m4rbji0dn964g9ppseeq.apps.googleusercontent.com"
                                    buttonText="Sign in"
                                    onSuccess={logged}
                                    onFailure={notLogged}
                                    cookiePolicy={'single_host_origin'}
                                />
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