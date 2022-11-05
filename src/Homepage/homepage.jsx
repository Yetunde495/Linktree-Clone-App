import React from "react";
import './homepage.css'
import {Button, Col, Container, OverlayTrigger, Row, Tooltip} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <section className="container">
            <div className="center">
            <img src={require('../assets/images/profile-img.jpg')} alt="profile-img" id="profile_img" className="profile-img"/>
            </div>

            <div className="center">
            <p id="twitter" className="username">theTechgirl</p>
           {/**<p id="slack">Yetunde Morenikeji</p> */} 
            </div>

            <Container>
            <Row>
            <Col>
            <div>
            
          


       
            <a href='https://twitter.com/morenikeji_48' id='btn__twitter' className="anchor-tag mb-3">
            <Button size="lg" variant="light" className="w-100 bg mb-3">Twitter Link</Button>
            </a>

            <a href='https://training.zuri.team/' id='btn__zuri' className="anchor-tag mb-3">
            <Button size="lg" variant="light" className="w-100 bg mb-3">Zuri Team</Button>
            </a>

            <a href='http://books.zuri.team' id='books' className="anchor-tag mb-3">
            <OverlayTrigger placement="bottom"
             overlay={
            <Tooltip>
              Click this link to find hng recommended books about design and coding
            </Tooltip>
          }>
            <Button size="lg" variant="light" className="w-100 bg mb-3">Zuri Books</Button> 
        </OverlayTrigger>
            </a>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=Yetunde_Morenikeji' id='book__python' className="anchor-tag mb-3">
            <OverlayTrigger placement="bottom"
             overlay={
            <Tooltip>
            Hurry to get this insightful python book that guides you from a beginner to an expert in python
            </Tooltip>
          }>
            <Button size="lg" variant="light" className="w-100 bg mb-3">Python Books</Button>
            </OverlayTrigger>
            </a>

            <a href='https://background.zuri.team' id='pitch' className="anchor-tag mb-3">
            <OverlayTrigger placement="bottom"
             overlay={
            <Tooltip>
             I can help you run background checks for free. Follow this link to access this service
            </Tooltip>
          }>
            <Button size="lg" variant="light" className="w-100 bg mb-3">Background check for coders</Button>
            </OverlayTrigger>
            </a>
            <a href='https://books.zuri.team/design-rules' id='book_design' className="anchor-tag mb-3">
            <OverlayTrigger placement="bottom"
             overlay={
            <Tooltip>
              Get this amazing design book offered by Zuri at free
            </Tooltip>
          }>
            <Button size="lg" variant="light" className="w-100 bg mb-3">Design books</Button>
            </OverlayTrigger>
            </a>
            <Link to="/contact">
            <Button size="lg" variant="light" className="w-100 bg mb-3">Contact</Button>
            </Link>
        
            </div>
            </Col>
            </Row>

            <div className="center gap-5">
                <img src={require('../assets/images/slack.png')} alt="slack-logo"/>
                <img src={require('../assets/images/Icon.png')} alt="github-icon"/>
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
            
            </Container>
        </section>
    )
}

export default Homepage;