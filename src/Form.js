import React from "react";
import {  Form, FormGroup, Label, Input, Col, Button, FormFeedback} from "reactstrap";

class CustomeForm extends React.Component {
     
    constructor(props){
        super(props)
        this.state = {
            fName: "",
            lName: "",
            phone: "",
            agree: false,
            email: "",
            message: "",
            contactType:"",
            touched:{
                fName: false,
                lName: false,
                phone: false,
                email: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({ [name]: checked }) 
            :
            this.setState({ [name]: value }) 
    }
    handleBlur = (field) => (e)=>{
        this.setState({
            touched: { ...this.state.touched, [field]:true}
        })
    } 
    validate(fName,lName, phone,email){
        const errors = {
            fName: "",
            lName: "",
            phone: "",
            email: ""
        }
        if(this.state.touched.fName && (fName.length < 3 || fName.length >10))
            errors.fName = "First Name Should be between 3-10";
        if(this.state.touched.lName && (lName.length < 3 || lName.length >10))
            errors.lName = "Last Name Should be between 3-10";

        const reg = /^\d+$/;
        if(this.state.phone && !reg.test(phone))
            errors.phone = "Phone number should contain only number";
        
        const emailFormate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(this.state.email && !emailFormate.test(email))
            errors.email = "Invalid email"

            return errors;
    }
    handleSubmit(e){
        alert(JSON.stringify("Done"))
        alert(JSON.stringify(this.state))
        e.preventDefault();
    }
    render(){
        const errors = this.validate(this.state.fName, this.state.lName, this.state.phone, this.state.email)
    return (
        <>
          <main className="container  offset-md-3 col-md-6">
            {/* Feedback Form */}
            <h3 className="mt-5 text-center">Send us Your Feedback</h3>
            <Form className="mt-3" onSubmit={this.handleSubmit}>
                <FormGroup row className="mx-3">
                    <Label htmlFor="fName" md={3} sm={3}>First Name</Label>
                    <Col className="col-11 col-md-8">
                        <Input type="text" name="fName" placeholder="First Name" id="fName"
                            value={this.state.fName}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("fName")}
                            valid={this.state.touched.fName && this.state.fName !=="" && errors.fName === ''}
                            invalid={this.state.lName !== "" && errors.fName !== ''}
                        />
                        <FormFeedback>{errors.fName}</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row className="mx-3">
                    <Label htmlFor="lName" md={3} sm={3}>Last Name</Label>
                    <Col className="col-11 col-md-8">
                        <Input  type="text" name="lName" placeholder="Last Name" id="lName"
                            value={this.state.lName}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("lName")}
                            valid={this.state.touched.lName && this.state.lName !== "" && errors.lName === ''}
                            invalid={this.state.lName !== "" && errors.lName !== ''}
                        />
                        <FormFeedback>{errors.lName}</FormFeedback>

                    </Col>
                </FormGroup>
                <FormGroup row className="mx-3">
                    <Label htmlFor="phone" md={3} sm={3}>Phone</Label>
                    <Col className="col-11 col-md-8">
                        <Input  type="text" name="phone" placeholder="Phome" id="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("phone")}
                            valid={this.state.touched.phone && this.state.phone !=="" && errors.phone === ''}
                            invalid={errors.phone !== ''}
                        />
                        <FormFeedback>{errors.phone}</FormFeedback>

                    </Col>
                </FormGroup>
                <FormGroup row className="mx-3">
                    <Label htmlFor="email" md={3} sm={3}>Email</Label>
                    <Col className="col-11 col-md-8">
                        <Input  type="email" name="email" placeholder="Email" id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur("email")}
                            valid={this.state.touched.email && this.state.email !=="" && errors.email === ''}
                            invalid={errors.email !== ''}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>

                    </Col>
                </FormGroup>
                <FormGroup row className="mx-3">
                    <Col className="col-6 col-md-5 offset-md-3">
                        <FormGroup check>
                            <Label check>
                                <Input  type="checkbox" name="agree" 
                                    checked={this.state.agree}
                                    onChange={this.handleChange}

                                />
                                <strong>May we contact you?</strong>
                            </Label>
                        </FormGroup>    
                    </Col>
                    <Col className="col-5 col-md-3">
                    <Label check>
                                <Input  type="select" name="contactType" 
                                    onChange={this.handleChange}
                                >
                                    <option value={null}>-Contact Type-</option>
                                    <option value={"phone"}>Phone</option>
                                    <option value={"email"}>Email</option>
                                </Input>
                            </Label>
                    </Col>
                </FormGroup>
                <FormGroup row className="mx-3">
                    <Label htmlFor="message" md={3} sm={3}>Feedback</Label>
                    <Col className="col-11 col-md-8">
                        <Input  type="textarea" name="message" placeholder="Your Feedback..." id="message"
                            rows="5"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Col className="col-11 col-md-3 offset-md-5 mb-3">
                        <Button type="submit" color="primary" >
                            Submit
                        </Button>
                    </Col>
                </FormGroup>

            </Form>
          </main>
        </>
    );
    }
}

export default CustomeForm;
