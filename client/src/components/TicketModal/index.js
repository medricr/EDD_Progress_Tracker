import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';

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
		end_time
	} = props

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal)

	return(
		<div id='ticket-modal'>
			<Button onClick={toggle} id='expand-ticket-btn'> I Have no Mouth, and I Must Scream</Button>
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
								<td><Button >I Have no Mouth, and I Must Scream</Button></td>
								<td><Button >I Have no Mouth, and I Must Scream</Button></td>
								<td><Button >I Have no Mouth, and I Must Scream</Button></td>
								<td><Button >I Have no Mouth, and I Must Scream</Button></td>
								<td><Button >I Have no Mouth, and I Must Scream</Button></td>
								<td><Button >I Have no Mouth, and I Must Scream</Button></td>
								<td><Button >I Have no Mouth, and I Must Scream</Button></td>
							</tr>
						</tbody>
					</Table>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default TicketModal;

