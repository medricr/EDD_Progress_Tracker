import React from 'react';
import { Navbar, Nav, NavbarBrand, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
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
					{/* <NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar> */}
						<Nav className="ml-auto" navbar>
							{/* <UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									More
							</DropdownToggle> */}
								{/* <DropdownMenu right> */}
									{!this.props.userStatus ?
										<NavLink>
											<Link className="nav-link" to='/login'>Login</Link>
										</NavLink>

										:

										<NavLink>
											<Link className='nav-link' to='/' onClick={this.props.logoutUser}>Logout</Link>
										</NavLink>
									}
									{!this.props.userStatus ?
										<NavLink>
											<Link className="nav-link" to='/register'>Signup</Link>
										</NavLink>

										:

										<NavLink>
											<Link className='nav-link' to='/profile'>Profile</Link>
										</NavLink>
									}
									
								{/* </DropdownMenu>
							</UncontrolledDropdown> */}
						</Nav>
					{/* </Collapse> */}
				</Navbar>
			</div>
		)
	}
}

export default NavBar;