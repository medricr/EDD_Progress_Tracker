import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Jumbotron, Card, CardBody, CardText, CardHeader} from 'reactstrap';

const Splashpage = () =>{

	
		return(
			<Jumbotron>
				<Card>
					<CardBody>
						<CardHeader className='text-center'>
							Welcome to the EDD Progress Tracker
						</CardHeader>
						<CardText className="text-center">
							<br />
							<strong>DISCLAIMER: </strong>
							<br />
							 All joking aside, the people working the phones at the EDD are doing a fantastic job, and I harbor no ill will against them. This is not meant to be a condemnation of anyone working there as they are, like the rest of us, dealing with an unprecidented set of circumstances. 
							 <br />
							 <br />
							 This project was born out of frustration after I called the EDD roughly 400 times in 4 hours without once being able to speak to a human on the phone. While I was eventually able to contact them, I felt that this project still had merit as a proof of conecpt. 
							<hr />
							<strong>That Being Said...</strong>
							<hr />
							
							Now, you too can tangibly track your frustration! Why settle for simply ~feeling~ your soul be crushed under the weight of a system which is inadequately equipped to handle the current set of circumstances, when you could keep a record of your fruitless efforts {':^)'}
							<br /> 
							<br />
							To use this application, simply create an account, or log in if you already have one, and begin tracking how many times you didn't talk to a EDD representitive! Divide your futile efforts into different categories such as "Disconnected from line due to high queue volume", "Dead air", or "Busy Signal"!
							<br />
							<br />
							My personal experiences have been as follows: Most of the time I get disconnected after an automated message about the lines being too busy. This is what I've designated as 'High Call Volume'. Sometimes, if I'm lucky, I can get through to some pre-recorded sub menues, which eventually disconnect me {"(again, just my personal experience)"} due to too many callers waiting in the queue {"('Too Many Callers in Qeueue)"}. Sometimes I've just recieve dead air. Sometimes I get a feedback loop, where all I can hear is what I say into the phone. Sometimes I've just get a busy signal. It is also possible to speak to a representitive, but at the time of building this app, I had not been able to do so. 
							<br />
							<br />
							Once you've signed in / signed up, navigate to the profile page. The yellow button at the top will let you start a new collection, or day, of calls. The blue button at the bottom will let you delete your current day if you just can't look at it anymore. Once you're ready to update a column, simply click the plus {"(+)"} sign at the bottom of the colum to increase that value by one.   
							<br />
							<br />
							Best of luck! You <strong>will</strong> make it through, just as I did. Persistance is key.
							 
						</CardText>
					</CardBody>
				</Card>
			</Jumbotron>
		)
	
}

export default Splashpage;