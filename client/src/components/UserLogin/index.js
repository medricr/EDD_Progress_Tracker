import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import {Redirect} from 'react-router-dom';

const UserLogin = (props)=>  {

	const {
		userStatus,
		handleInputChange,
		loginUser
	} = props

		return (
			<Container>
				{userStatus ? <Redirect to='/' />
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
						<Button onClick={loginUser} color="success">LOGIN</Button>
					</Form>
				}
			</Container>
		)
}

export default UserLogin;