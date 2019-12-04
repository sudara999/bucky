import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div class="container">
		<div class="row">
			<div class="col-lg-3"></div>
			<div class="col-lg-6">
				<div id="ui">
					<form class="form-group">
						
						<div class="row">
							<div class="col-lg-12">
								<h1 id="heading">Sign Up!</h1>
							</div>
						</div>						

						
						<div class="row">
							<div class="col-lg-6">
								<div class="form-group">
									<label for="firstName">First Name: </label>
									<input id="firstName" type="text" name="fname" class="form-control" placeholder="Enter your First name..."/>
								</div>								
							</div>
							<div class="col-lg-6">
								<label for="lastName">Last Name: </label>
								<input id="lastName" type="text" name="lname" class="form-control" placeholder="Enter your Last name..."/>
							</div>
						</div>

						
						<div class="row">
							<div class="col-lg-12">
								<div class="form-group">
									<label for="firstName">Username: </label>
									<input id="userName" type="text" name="uname" class="form-control" placeholder="Select a Username..."/>
								</div>
							</div>
						</div>
						
						
						<div class="form-group">
							<label>Birthday: </label>
							<input id="dob" class="form-control" type="date" name="dob" placeholder="Date of Birth"/>

						</div>

						<div class="form-group">
							<label for="inputAddress">Address</label>
							<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
						</div>
						<div class="form-group">
							<label for="inputAddress2">Address 2</label>
							<input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
						</div>
						<div class="form-row">
							<div class="form-group col-lg-6">
								<label for="inputCountry">Country</label>
								<select id="inputCountry" class="form-control">
									<option selected>Choose...</option>
									<option>...</option>
								</select>
							</div>
							<div class="form-group col-lg-6">
								<label for="inputState">State</label>
								<input type="text" name="state" class="form-control"/>
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-lg-6">
								<label for="inputCity">City</label>
								<input type="text" class="form-control" id="inputCity"/>
							</div>
							<div class="form-group col-lg-6">
								<label for="inputZip">Zip</label>
								<input type="text" class="form-control" id="inputZip"/>
							</div>
						</div>

						
						<div class="row">
							<div class="form-group col-lg-12">
								<label for="email">Email: </label>
								<input id="email" type="email" name="email" class="form-control" placeholder="example@domain.com"/>
							</div>
						</div>

						
						<button type="submit" class="btn btn-success wide-button">Register</button>
					</form>
				</div>
			</div>
			<div class="col-lg-3"></div>
		</div>		
	</div>
        )
    }
}

export default SignUp;