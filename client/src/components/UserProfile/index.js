import React from 'react';
import { 
	Container, 
	Button, 
	ListGroup, 
	ListGroupItem, 
	ListGroupItemHeading, 
	Table,
	Jumbotron
	} from 'reactstrap';
import API from '../../utils/API';

class UserProfile extends React.Component {

	state = {
		currentId: "",
		title: "",
		content: "",
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
			<div>
				{/* <div className='col-md-12'> */}
					<Jumbotron>
						<br />
						<Button onClick={this.saveNewDay} color='warning' id='new-ticket-btn'> Create New Day </Button>
						<br />
						<ListGroup>
							{this.state.days.map((item) => (
								<ListGroupItem key={item._id}>
									<ListGroupItemHeading>
										{item.start_time}
									</ListGroupItemHeading>
									<Table responsive>
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
											<tr>
												<td><Button onClick={() => this.updateDay('queue_too_long', item._id)}>+</Button></td>
												<td><Button onClick={() => this.updateDay('high_call_volume', item._id)}>+</Button></td>
												<td><Button onClick={() => this.updateDay('dead_air', item._id)}>+</Button></td>
												<td><Button onClick={() => this.updateDay('feedback_loop', item._id)}>+</Button></td>
												<td><Button onClick={() => this.updateDay('busy_signal', item._id)}>+</Button></td>
												<td><Button onClick={() => this.updateDay('sucessful_calls', item._id)}>+</Button></td>
											</tr>
										</tbody>
									</Table>
									<br />
									<Button onClick={() => this.deleteDay(item._id)} id="delete-btn" color='info'>{item.header_quote}</Button>{' '}
								</ListGroupItem>
							))}
						</ListGroup>
					</Jumbotron>
		 	</div>	
		)
	}
}

export default UserProfile;