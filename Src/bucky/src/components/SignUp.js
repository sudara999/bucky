import React, { Component } from 'react';
import globalStyles from "./SignUp.module.css"
import cx from 'classnames';
import { withRouter } from "react-router-dom";
import myFirebase from "../firebase/firebase";

class SignUp extends Component {

	state = {
		fname: "",
		lname: "",
		dob: "",
		add1: "",
		add2: "",
		country: "",
		state: "",
		city: "",
		zip: "",
		buckyList: [],
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
		myFirebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
			var user = myFirebase.auth().currentUser;
			user.updateProfile({
				displayName: this.state.fname
			});
			{
				let db = myFirebase.firestore();
				db.collection("Users").doc(user.email).set({
					fname: this.state.fname,
					lname: this.state.lname,
					dob: this.state.dob,
					add1: this.state.add1,
					add2: this.state.add2,
					country: this.state.country,
					state: this.state.state,
					city: this.state.city,
					zip: this.state.zip,
					buckyList: this.state.buckyList
				}).then(() => this.props.history.push("/main")).catch(error => {
					// alert(error.message);
					this.setState({
						alert: true,
						alertMessage: error.message,
					});
				});
			}
		})
		.catch( (error) => {
			// Handle Errors here.
			this.setState({
				alert: true,
				alertMessage: error.message,
			});
		});
	}

	alertOffHandler = () => {
        this.setState({ alert: false });
    }

	render() {
		return (
			<div className={globalStyles.container} style={{ color: "white" }}>
				<div className={globalStyles.row}>
					<div className={globalStyles["col-lg-3"]}></div>
					<div className={globalStyles["col-lg-6"]}>
						<div id="ui">
							<form className={globalStyles["form-group"]} onSubmit={this.submitHandler}>

								<div className={globalStyles.row}>
									<div className={globalStyles["col-lg-12"]}>
										<h1 id={globalStyles["heading"]}>Sign Up!</h1>
									</div>
								</div>

								<div className={globalStyles["alert"]} style={{display: this.state.alert? "block": "none"}}>
                                        <span className={globalStyles["closebtn"]} onClick={this.alertOffHandler}>&times;</span>
                                        {this.state.alertMessage}
                                </div>

								{/* User info: Name */}
								<div className={globalStyles.row}>
									<div className={globalStyles["col-lg-6"]}>
										<div className={globalStyles["form-group"]}>
											<label htmlFor="firstName">*First Name: </label>
											<input id="firstName" type="text" name="fname" className={globalStyles["form-control"]} placeholder="Enter your First name..." onChange={this.onChange} required />
										</div>
									</div>
									<div className={globalStyles["col-lg-6"]}>
										<label htmlFor="lastName">*Last Name: </label>
										<input id="lastName" type="text" name="lname" className={globalStyles["form-control"]} placeholder="Enter your Last name..." onChange={this.onChange} required />
									</div>
								</div>

								{/* Email */}
								<div className={globalStyles.row}>
									<div className={cx(globalStyles["form-group"], globalStyles["col-lg-12"])}>
										<label htmlFor="email">*Email: </label>
										<input id="email" type="email" name="email" className={globalStyles["form-control"]} placeholder="example@domain.com" onChange={this.onChange} required />
									</div>
								</div>

								{/* Password */}
								<div className={globalStyles.row}>
									<div className={globalStyles["col-lg-12"]}>
										<div className={globalStyles["form-group"]}>
											<label htmlFor="firstName">*Password: </label>
											<input id="password" type="password" name="password" className={globalStyles["form-control"]} placeholder="Enter password..." onChange={this.onChange} required />
										</div>
									</div>
								</div>

								{/* User info: Birthday */}
								<div className={globalStyles["form-group"]}>
									<label>Birthday: </label>
									<input id="dob" className={globalStyles["form-control"]} type="date" name="dob" placeholder="Date of Birth" onChange={this.onChange} />
								</div>

								{/* User info: Address fields */}
								<div className={globalStyles["form-group"]}>
									<label htmlFor="inputAddress">Address</label>
									<input type="text" className={globalStyles["form-control"]} id="inputAddress" placeholder="1234 Main St" name="add1" onChange={this.onChange} />
								</div>

								<div className={globalStyles["form-group"]}>
									<label htmlFor="inputAddress2">Address 2</label>
									<input type="text" className={globalStyles["form-control"]} id="inputAddress2" placeholder="Apartment, studio, or floor" name="add2" onChange={this.onChange} />
								</div>

								{/* User info: Country and State */}
								<div className={globalStyles["form-row"]}>
									<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
										<label htmlFor="inputCountry">Country</label>
										<input type="text" id="inputCountry" className={globalStyles["form-control"]} name="country" onChange={this.onChange} />
									</div>
									<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
										<label htmlFor="inputState">State</label>
										<input type="text" name="state" className={globalStyles["form-control"]} onChange={this.onChange} />
									</div>
								</div>

								{/* User info: City and Zip */}
								<div className={globalStyles["form-row"]}>
									<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
										<label htmlFor="inputCity">City</label>
										<input type="text" className={globalStyles["form-control"]} id="inputCity" name="city" onChange={this.onChange} />
									</div>
									<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
										<label htmlFor="inputZip">Zip</label>
										<input type="text" className={globalStyles["form-control"]} id="inputZip" name="zip" onChange={this.onChange} />
									</div>
								</div>

								{/* Submit button */}
								<button type="submit" className={cx(globalStyles.btn, globalStyles["btn-success"], globalStyles["wide-button"])}>Register</button>
							</form>
						</div>
					</div>
					<div className={globalStyles["col-lg-3"]}></div>
				</div>
			</div>
		)
	}
}

export default withRouter(SignUp);