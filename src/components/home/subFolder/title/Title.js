import React from 'react'
import './title.css'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Title() {
  return (
    <>
      <div>
        <Row className='title_mainDiv'>
          <Col className='colcol' md='7'>
            <div className='h_bigHead'>Evolve</div>
            <div className='h_brand'>Equinox</div>
            <div className='h_tag'>Evolutionary Fitness</div>
            <p className='h_info'>
              There are workouts to learn, diets to follow, <br />
              willpower to conjure, and self-consciousness to overcome.
            </p>
            <Link to='/login'><Button className='my-3 px-4' variant='warning'>Join Now</Button></Link>
          </Col>
          <Col className='titleImg colcol' md='5'>
            <img src='images/titleImg.png' alt='img' />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Title