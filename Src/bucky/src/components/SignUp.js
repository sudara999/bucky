import React, { Component } from 'react';
import styles from "./SignUp.css"
import globalStyles from "./SignUp.module.css"
import cx from 'classnames';

class SignUp extends Component {

	componentDidMount(){
		document.body.style.background = "#DCDCDC";
	}
	
    render() {
        return (
            <div className={globalStyles.container}>
		<div className={globalStyles.row}>
			<div className={globalStyles["col-lg-3"]}></div>
			<div className={globalStyles["col-lg-6"]}>
				<div id="ui">
					<form className={globalStyles["form-group"]}>
						
						<div className={globalStyles.row}>
							<div className={globalStyles["col-lg-12"]}>
								<h1 id={globalStyles["heading"]}>Sign Up!</h1>
							</div>
						</div>						

						
						<div className={globalStyles.row}>
							<div className={globalStyles["col-lg-6"]}>
								<div className={globalStyles["form-group"]}>
									<label htmlFor="firstName">First Name: </label>
									<input id="firstName" type="text" name="fname" className={globalStyles["form-control"]} placeholder="Enter your First name..."/>
								</div>								
							</div>
							<div className={globalStyles["col-lg-6"]}>
								<label htmlFor="lastName">Last Name: </label>
								<input id="lastName" type="text" name="lname" className={globalStyles["form-control"]} placeholder="Enter your Last name..."/>
							</div>
						</div>

						
						<div className={globalStyles.row}>
							<div className={globalStyles["col-lg-12"]}>
								<div className={globalStyles["form-group"]}>
									<label htmlFor="firstName">Username: </label>
									<input id="userName" type="text" name="uname" className={globalStyles["form-control"]} placeholder="Select a Username..."/>
								</div>
							</div>
						</div>
						
						
						<div className={globalStyles["form-group"]}>
							<label>Birthday: </label>
							<input id="dob" className={globalStyles["form-control"]} type="date" name="dob" placeholder="Date of Birth"/>

						</div>

						<div className={globalStyles["form-group"]}>
							<label htmlFor="inputAddress">Address</label>
							<input type="text" className={globalStyles["form-control"]} id="inputAddress" placeholder="1234 Main St"/>
						</div>
						<div className={globalStyles["form-group"]}>
							<label htmlFor="inputAddress2">Address 2</label>
							<input type="text" className={globalStyles["form-control"]} id="inputAddress2" placeholder="Apartment, studio, or floor"/>
						</div>
						<div className={globalStyles["form-row"]}>
							<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
								<label htmlFor="inputCountry">Country</label>
								<select id="inputCountry" className={globalStyles["form-control"]}>
									<option>Choose...</option>
									<option>...</option>
								</select>
							</div>
							<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
								<label htmlFor="inputState">State</label>
								<input type="text" name="state" className={globalStyles["form-control"]}/>
							</div>
						</div>
						<div className={globalStyles["form-row"]}>
							<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
								<label htmlFor="inputCity">City</label>
								<input type="text" className={globalStyles["form-control"]} id="inputCity"/>
							</div>
							<div className={cx(globalStyles["form-group"], globalStyles["col-lg-6"])}>
								<label htmlFor="inputZip">Zip</label>
								<input type="text" className={globalStyles["form-control"]} id="inputZip"/>
							</div>
						</div>

						
						<div className={globalStyles.row}>
							<div className={cx(globalStyles["form-group"], globalStyles["col-lg-12"])}>
								<label htmlFor="email">Email: </label>
								<input id="email" type="email" name="email" className={globalStyles["form-control"]} placeholder="example@domain.com"/>
							</div>
						</div>

						
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

export default SignUp;