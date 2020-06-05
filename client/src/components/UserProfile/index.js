import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { 
	Container, 
	Button, 
	ListGroup, 
	ListGroupItem, 
	ListGroupItemHeading, 
	Table
	} from 'reactstrap';

import API from '../../utils/API';
import TicketModal from '../TicketModal';

// import './Stylesheet.css';

class UserProfile extends React.Component {

	state = {
		currentId: "",
		title: "",
		content: "",
		// notes: [],
		days: [],
		modalOpen: false,
		activeItem: {}
	}


	
// COMPONENT UTITLITIES
// ==================================
	handleInputChange = (event) => {
		let name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}
	toggle = (item) => {
		this.setState(prevState => ({
			modalOpen: !prevState.modalOpen,
			activeItem: item
		}))
	}
	// Grabs the current user id on load, and uses that to pull any notes associated with that
	// user from the database
	componentDidMount() {
		API.getCurrentUser().then((result)=> {
			this.setState({currentId: result.data})
		}).then(
			// API.getNotes().then((result)=>{this.setState({notes: result.data})}),
			API.getDays().then((result)=>{this.setState({days: result.data})})
		)
	}
	
// ===================================
// COMPONENT METHODS
// +++++++++++++++++++++++++++++++++++
	saveNewDay = () => {
		API.saveNewDay({
			author: this.state.currentId
		}).then(() => {
			API.getDays().then((result) => { this.setState({ days: result.data }) })
		})
	}

	deleteDay = (buttonId) => {
		API.deleteDay({
			currentId: this.state.currentId,
			dayId: buttonId
		}).then(()=> {
			API.getDays().then((result)=> {this.setState({days: result.data})})
		})
	}

	updateDay = (name, id) => {
		API.updateDay({
			name: name,
			id: id
		}).then(()=>{
			API.getDays().then((result)=> {this.setState({days: result.data})})
		});		
	}
// +++++++++++++++++++++++++++++++++++
	render() {

		return( 
			<Container>		
				<div className='row'>
					<div className='col-xs-12 new-ticket-row'>
						<Button onClick={this.saveNewDay} color='warning' id='new-ticket-btn'> Create New Day {':^) '}</Button>
					</div>
				</div>
					
				<div className='row table-row'>
					<div className='col-xs-12'>
						<ListGroup>
							{this.state.days.map((item) => (
								<ListGroupItem key={item._id}>
									<ListGroupItemHeading>
										{item.start_time}
									</ListGroupItemHeading>
									<Table>
										<thead>
											<tr>
												<th>Too Many Callers in Queue</th>
												<th>High Call Volume</th>
												<th>Dead Air</th>
												<th>Feedback Loop</th>
												<th>Busy Signal</th>
												<th>Talked to a Representetive {' :^)'}</th>
												<th>Total # of Calls</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{item.queue_too_long}</td>
												<td>{item.high_call_volume}</td>
												<td>{item.dead_air}</td>
												<td>{item.feedback_loop}</td>
												<td>{item.busy_signal}</td>
												<td>{item.sucessful_calls}</td>
												<td>{item.total_calls}</td>
											</tr>
										</tbody>
									</Table>
									<TicketModal
										total_calls={item.total_calls}
										sucessful_calls={item.sucessful_calls}
										high_call_volume={item.high_call_volume}
										queue_too_long={item.queue_too_long}
										dead_air={item.dead_air}
										feedback_loop={item.feedback_loop}
										busy_signal={item.busy_signal}
										start_time={item.start_time}
										update={this.updateDay}
										day_id={item._id}
									/>
									<br />
									<Button onClick={() => this.deleteDay(item._id)} color="danger" id="delete-btn">Delete Ticket</Button>{' '}
								</ListGroupItem>							
							))}
						</ListGroup>					
					</div>
				</div>
			</Container>
		)
	}
}

export default UserProfile;