import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron, Card, CardBody, CardText, CardHeader} from 'reactstrap';

const Splashpage = () =>{

	
		return(
			<Jumbotron>
				<Card>
					<CardBody>
						<CardHeader className='text-center'>
							{':^) '}Welcome to the EDD "Progress" Tracker{' (^:'}
						</CardHeader>
						<CardText className="text-center">
							This project was born out of spite after I called the EDD roughly 400 times in 4 hours without once being able to speak to a human on the phone. 
							<br />
							<br />
							Now, you too can tangibly track your frustration! Why settle for simply ~feeling~ your soul be crushed under the weight of a system which is inadequately equipped to handle the current set of circumstances, when you could keep a record of your fruitless efforts {':^)'}
							<br />
							<br />
							Simply create an account, or log in if you already have one, and begin tracking how many times you didn't talk to a EDD representitive! Divide your futile efforts into different categories such as "Disconnected from line due to high queue volume", "Dead air", or "Busy Signal"!
						</CardText>
					</CardBody>
				</Card>
			</Jumbotron>
		)
	
}

export default Splashpage;