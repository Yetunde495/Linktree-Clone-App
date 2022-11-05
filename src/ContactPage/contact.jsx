import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import './contact.css';



function Contact() {
    return (
    <section className="form-container">
    <div className="mb-6">
    <p className="c-header">Contact Me</p>
    <p className="c-text">Hi there, contact me to ask me about anything you have in mind.</p>
    </div>
    <div className="mt-5">
    <Form>
      <Row className="mb-6">
        <Form.Group as={Col} id="first_name">
          <Form.Label className="f-label">First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" id="first_name"/>
        </Form.Group>

        <Form.Group as={Col} id="last_name">
          <Form.Label  className="f-label">Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name" id="last_name"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-6" id="email">
        <Form.Label  className="f-label">Email</Form.Label>
        <Form.Control  type="email" placeholder="yourname@email.com" id="email"/>
      </Form.Group>

      <Form.Group className="mb-6" id="message">
        <Form.Label  className="f-label">Message</Form.Label>
        <Form.Control as="textarea" rows={3} id="message" placeholder="Send me a message and I'll reply you as soon as possible..."/>
      </Form.Group>

      <Form.Group className="mb-6">
        <Form.Check type="checkbox" label="You agree to providing your data to {name} who may contact you." />
      </Form.Group>

      <Button variant="primary" type="submit" size="lg" className="w-100" id="btn__submit">
        Send Message
      </Button>
    </Form>   
    </div>

    <Row className="center footer">
                <Col md={4}>
                <img src={require('../assets/images/Vector.png')} alt="slack-logo" className="ml-md-2 p-md-0 mb-3"/>
                </Col>

                <Col md={4}>
                <p className="ml-md-2 mb-3 f-text">HNG Internship 9 Frontend Task</p>
                </Col>

                <Col md={4}>
                <img src={require('../assets/images/I4G.png')} alt="slack-logo" className="ml-2 mb-3"/>
                </Col>
            </Row>
    </section>
    )
}

export default Contact;