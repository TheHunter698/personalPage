import React, {Component} from 'react'
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import '../Description.css'

class description extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">David's Programming Cave</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/david-bros-3a0932178/">Linkedin Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/TheHunter698?tab=repositories">GitHub Profile</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br/><br/>
          <div className="description">
            <p>
              Hi! This is David and you are in my <strong>personal webpage</strong>, you can find my contact information below and on the top you can find both my <strong>Linkedin</strong> and <strong>Github</strong> profiles.<br/>
              I am a passionate <strong>20 year old</strong> programmer looking for opportunities, I have been programming <strong>less than one year</strong> and I already have made some cool projects that you can check out!<br/>
              If you wish yo contact me you can see my information below or you can submit your information in the contact section and I will recieve an email :)
              <br/>
              I am <strong>avaliable 24h hours a day</strong> so please don't be shy to contact me anytime of the day.
            </p>
          </div>
      </div>
    )
  }
}

export default description
