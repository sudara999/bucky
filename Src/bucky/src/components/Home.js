import React, { Component } from 'react';
import icon from "../images/icon.jpg";

class Home extends Component {
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
                        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"></input>
                        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"></input>
                        <input type="submit" class="fadeIn fourth" value="Log In"></input>
                    </form>

                    <div id="formFooter">
                        <a className="underlineHover" href="#">No account? Sign Up Here!</a>
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