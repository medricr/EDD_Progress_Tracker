import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import { Redirect } from 'react-router-dom';

const UserSignup = (props)=> {

	const {
		userStatus,
		handleInputChange,
		registerUser
	} = props

		return(
			<Container>
				{userStatus ? 
					<Redirect to='/' />
					
					:

					<Form>
						<FormGroup>
							<Label>Username</Label>
							<Input type="text" name="username" onChange={handleInputChange} />
						</FormGroup>
						<FormGroup>
							<Label>Password</Label>
							<Input type="password" name="password" onChange={handleInputChange} />
						</FormGroup>
						<Button onClick={registerUser}>Register & Login</Button>
					</Form>
				}				
			</Container>
		)
}

export default UserSignup;