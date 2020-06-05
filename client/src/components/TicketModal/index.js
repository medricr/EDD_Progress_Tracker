import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import buttonNames from './buttonNames.json';

const TicketModal = (props) => {
	const {
		total_calls,
		sucessful_calls,
		high_call_volume,
		queue_too_long,
		dead_air,
		feedback_loop,
		busy_signal,
		start_time,
		day_id,
		update,
		end_time
	} = props

	const num = Math.floor(Math.random() * buttonNames.length)
	// const buttonName = buttonNames[Math.floor(Math.random() * buttonNames.length)]
	const buttonName = buttonNames[num];
	
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal)

	return(
		<div id='ticket-modal'>
			{console.log(buttonNames)}
			<Button onClick={toggle} id='expand-ticket-btn'> {buttonName} </Button>
			<Modal className = 'modal-xl'isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>{start_time}</ModalHeader>
				<ModalBody>
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
								<td>{queue_too_long}</td>
								<td>{high_call_volume}</td>
								<td>{dead_air}</td>
								<td>{feedback_loop}</td>
								<td>{busy_signal}</td>
								<td>{sucessful_calls}</td>
								<td>{total_calls}</td>
							</tr>
							<tr>
								<td><Button onClick={() => update("queue_too_long", day_id)}>{':^)'}</Button></td>
								<td><Button onClick={() => update("high_call_volume", day_id)}>{':^)'}</Button></td>
								<td><Button onClick={() => update("dead_air", day_id)}>{':^)'}</Button></td>
								<td><Button onClick={() => update("feedback_loop", day_id)}>{':^)'}</Button></td>
								<td><Button onClick={() => update("busy_signal", day_id)}>{':^)'}</Button></td>
								<td><Button onClick={() => update("sucessful_calls", day_id)}>{':^)'}</Button></td>
							</tr>
						</tbody>
					</Table>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default TicketModal;

