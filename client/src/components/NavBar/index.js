import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState((prevState)=> ({isOpen: !prevState}));
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md" className="navbar-static-top">
					{!this.props.userStatus ?	
						<NavbarBrand tag={Link} to='/'>
							EDD "Progress" Tracker -  {'1(800)-300-5616'}
						</NavbarBrand>

						:

						<NavbarBrand tag={Link} to='/'>
							EDD "Progress" Tracker || Welcome: {this.props.currentUser.username}
						</NavbarBrand>
					}					
						<Nav className="ml-auto" navbar>							
							{!this.props.userStatus ?
							
									<Link className="nav-link" to='/login'>Login</Link>								

								:

									<Link className='nav-link' to='/' onClick={this.props.logoutUser}>Logout</Link>
							}
							{!this.props.userStatus ?

									<Link className="nav-link" to='/register'>Signup</Link>
								
								:

									<Link className='nav-link' to='/profile'>Profile</Link>										
							}											
						</Nav>
				</Navbar>
			</div>
		)
	}
}

export default NavBar;