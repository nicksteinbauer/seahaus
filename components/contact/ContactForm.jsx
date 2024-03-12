import { Component } from 'react';

import * as emailjs from "emailjs-com";
import { Button, Form, Label, Input, FormGroup, FormFeedback } from "reactstrap";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { isEmail } from "validator";

import Recaptcha from 'react-recaptcha';
import Swal from "sweetalert2";


export default class ContactForm extends Component {

    //@ts-ignore
    constructor(props) {
        super(props);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
      isVerified: false,
      data: {
          name: "",
          email: "",
          phone: "",
          checkin: "",
          checkout: "",
          message: "",
        },
      errors: {}
    })

    recaptchaLoaded() {
      console.log('Captcha successfully Loaded')
    }

    //@ts-ignore
    verifyCallback(response) {
      if (response) {
        
        this.setState({
          isVerified: true
          
        })
        console.log(this.getInitialState);
      }
    }

    //@ts-ignore
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        })
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        //@ts-ignore
        if (data.name === '') errors.name = '* Name required'; if (!isEmail(data.email)) errors.email = '* Email must be valid'; if (data.email === '') errors.email = '* Email required'; 
        // if (data.subject === '') errors.subject = '* Subject required'; 
        // if (data.message === '') errors.message = '* Message required';
        return errors;
    }
  
    //@ts-ignore
    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0 && this.state.isVerified) {
            console.log(data);
            //Call an api here
            emailjs.sendForm('seahausrouter', 'seahaus_booking', e.target, 'user_vOc0ylPHeC2nCdyLQJAiW')

            //Resetting the form
            this.setState(this.getInitialState());
            this.setState({
              isVerified: true
            })

            Swal.fire({
              title: "Email Successfully Sent to SeaHaus",
              icon: "success",
            });
        } else {
            this.setState({ errors });
            //alert('Please verify that you are a human');
        }
    }


  render() {

    const { data, errors } = this.state;
    return (
        <div id="contact-form" className="forty-nine">
          <h3>SeaHaus Booking Request</h3>
          <p className="smol"><a href="https://www.vrbo.com/3431116?dateless=true" target="_blank">Click here to book via VRBO</a>, if you would like to forgo fees, fill out a request to book below</p>
          <Form onSubmit={this.handleSubmit} className='actualForm'>
            
                <FormGroup className="padding flex-sm">
                    <Label className="text-muted" for="name">Name</Label>
                    <Input 
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="name"
                        value={data.name}
                        invalid={errors.name ? true : false}
                        onChange={this.handleChange}
                     />
                    <FormFeedback>{errors.name}</FormFeedback>
                </FormGroup>
                <FormGroup className="padding flex-sm">
                    <Label className="text-muted" for="email">Email</Label>
                    <Input 
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        invalid={errors.email ? true : false}
                        onChange={this.handleChange}
                     />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
            
            
            <FormGroup className="padding flex-sm">
                <Label className="text-muted" for="phone">Phone #</Label>
                <Input 
                    type="text"
                    id="phone"
                    placeholder="Phone #"
                    name="phone"
                    value={data.phone}
                    invalid={errors.phone ? true : false}
                    onChange={this.handleChange}
                />
                <FormFeedback>{errors.phone}</FormFeedback>
            </FormGroup>
            <FormGroup className="padding flex-sm">
                <Label className="text-muted" for="checkin">Check In</Label>
                <Input 
                    type="text"
                    id="checkin"
                    placeholder="MM/DD/YYYY"
                    name="checkin"
                    value={data.checkin}
                    invalid={errors.checkin ? true : false}
                    onChange={this.handleChange}
                />
                <FormFeedback>{errors.checkin}</FormFeedback>
            </FormGroup>
            <FormGroup className="padding flex-sm">
                <Label className="text-muted" for="checkout">Check Out</Label>
                <Input 
                    type="text"
                    id="checkout"
                    placeholder="MM/DD/YYYY"
                    name="checkout"
                    value={data.checkout}
                    invalid={errors.checkout ? true : false}
                    onChange={this.handleChange}
                />
                <FormFeedback>{errors.checkout}</FormFeedback>
            </FormGroup>
            <FormGroup className="padding flex-sm">
                <Label className="text-muted" for="message">Notes</Label>
                <Input 
                    type="textarea"
                    id="message"
                    placeholder="Notes"
                    name="message"
                    value={data.message}
                    invalid={errors.message ? true : false}
                    onChange={this.handleChange}
                />
                <FormFeedback>{errors.message}</FormFeedback>
            </FormGroup>
            <FormGroup className="padding">
              <Recaptcha
                sitekey="6LcTMtAmAAAAABLQxeZFSw_iLXwolHCO3gEU3vzb"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.verifyCallback}
              />
              <FormFeedback className={this.state.isVerified === false ? "feedback-active" : "feedback-inactive" }>Comfirm that you are human.</FormFeedback>
            </FormGroup>
            <FormGroup className="padding">
                <Button variant="primary" type="submit" className="hamburger">
                  Submit
                </Button>
            </FormGroup>
        </Form>
    </div>  
    )
  }
}
