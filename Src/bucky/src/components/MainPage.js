import React, { Component } from 'react';
import $ from 'jquery';
// import "./MainPage.css"
class MainPage extends Component {
    render() {
        return(
            <div>
                <div className="wrapper">
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Bucky</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Dummy Heading</p>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Dummy Div 1</a>
                        </li>
                        <li>
                            <a href="#">Dummy Div 2</a>
                        </li>
                        <li>
                            <a href="#">Dummy Div 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Description</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Possibly more stuff</a>
                        </li>
                        <li>
                            <a href="#">Possibly even more stuff</a>
                        </li>
                        <li>
                            <a href="#">Yeap, you got it. More stuff</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Saved Places</a>
                </li>
                <li>
                    <a href="#">Your profile</a>
                </li>
            </ul>
        </nav>

        <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>
            </nav>
        </div>

    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossOrigin="anonymous"></script>

    <script type="text/javascript">
        $(document).ready(function () {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                
            })

        });
    </script>
            </div>
        )
    }
}

export default MainPage;