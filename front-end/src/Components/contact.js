import React, {Component} from 'react'
import { Col, Row, Button, Form, Label, Input} from 'reactstrap'
import '../Contact.css'
import axios from 'axios'

export default class  contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            submittedForm: false,
            error: "",
        }
    }
    handleSubmit = (event) => {
       axios('http://localhost:5000/contactSubmit', {
           method: 'post',
           withCredentials: true,
           data: {
                name: event.target.name,
                surname: event.target.surname,
                email: event.target.email,
                phone: event.target.phone,
                position: event.target.jobOffer,
                time: event.target.time,
                location: event.target.location,
           }
       })
       .then((res) => {
           console.log(res)
       })
       .catch((err) => console.log(err))
    }

    render(){
        if(this.state.submittedForm && this.state.error == ""){
            return(
                <div classNmae="contactForm">
                    <h3>Your request was processed, you will get a confirmation email :)</h3>
                </div>
            )
        }
        else if(this.state.submittedForm == true && this.state.error !== ""){
            return(
                <div>
                    <h3>{this.state.error}</h3>
                </div>
            )
        }
        else{
            return (
                <div className='contactForm'>
                   <Form onSubmit={this.handleSubmit}>
                        <Row>
                         <Col md={12}>
                            <h4>Contact Me!</h4>
                         </Col>   
                        </Row>
                        <Row form className='form-group'>
                            <Col md={6}>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="nameInput" placeholder="Your name" required></Input>
                            </Col>
                            <Col md={6}>
                                <Label for="surname">Surname</Label>
                                <Input type="text" name="surname" id="surnameInput" placeholder="Your surname"></Input>
                            </Col>
                        </Row>
                        <Row form className='form-group'>
                            <Col md={6}>
                                <Label for='email'>Email</Label>
                                <Input type="email" name="email" id="emailInput" placeholder="Your email here" required></Input>
                            </Col>
                            <Col md={6}>
                                <Label for='phone'>Phone Number</Label>
                                <Input type='tel' placeholder="Eg: +34 60 00 00 00" name="phone" id="phoneInput" required></Input>
                            </Col>
                        </Row>
                        <Row form className='form-group'>
                            <Col md={6}>
                                <Label for="position">Position</Label>
                                <Input type="select" name="jobOffer" id="jobPostion" required>
                                    <option>Junior FullStack Developer</option>
                                    <option>Junior Front End Developer</option>
                                    <option>Junior Back End Developer</option>
                                    <option>Junior Software Developer</option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Label for="time">Full time, Part time.</Label>
                                <Input type="select" name="time" id="timeJob" required>
                                    <option>Part Time</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Traineeship</option> 
                                </Input>
                            </Col>
                        </Row>
                        <Row form className='form-group'>
                            <Col md={6}>
                                <Label for="location">Location</Label>
                                <Input type="text" name="location" id="locationInput" placeholder="Office Location"></Input>
                            </Col>
                        </Row>
                        <Button>Submit</Button><br/>
                        <small>The information submitted will not be used for commercial purposes or sold to 3rd parties.</small>
                    </Form>
                </div>
              )
        }
    }
  
}
