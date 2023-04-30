import React from 'react'
import './contact.css'
import { Col, Row } from 'react-bootstrap'

function Contact() {
    return (
        <div className='contact_mainDiv'>
            <Row>
                <Col className='my-2' md='4'>
                    <h5>Equinox</h5>
                    <p>
                        There are workouts to learn, diets to follow, <br />
                        willpower to conjure, and self-consciousness to overcome.
                    </p>
                    <div style={{color:'#c8b4b4'}}>©Equinox. all rights reserved</div>
                </Col>
                <Col className='my-2' md='4'>
                    <h5>Contact Us</h5>
                    <p>892-25*-****</p>
                    <p>998-**8-**20</p>
                </Col>
                <Col className='my-2' md='4'>
                    <h5>Address</h5>
                    <p>Equinox Plaza, abc road, building no.28, NewYork</p>
                </Col>
            </Row>
        </div>
    )
}

export default Contact