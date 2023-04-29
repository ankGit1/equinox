import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './fitInfo.css'
import { Link } from 'react-router-dom';

function FitInfo() {

  const reveal = () => {
    let showLeft = document.querySelectorAll('.stay_l');
    let showRight = document.querySelectorAll('.stay_r');
    let windowHt = window.innerHeight;
    let showAfter = 60
    for (let i = 0; i < showLeft.length; i++) {
        let moveLeft = showLeft[i].getBoundingClientRect().top;
        if(moveLeft < windowHt - showAfter){
            showLeft[i].classList.add('active')
            showRight[i].classList.add('active')
        }
    }
}

window.addEventListener('scroll',reveal)
  return (
    <div>
      <Row className='fitinfo_row'>
        <Col className='my-2 colcol stay_l' sm='5'>
          <img className='fitinfo_img' src='images/fitness.png' alt='img' loading='lazy' />
        </Col>
        <Col className='my-2 colcol stay_r' sm='7'>
          <h3>MILLIONS OF HAPPY MEMBER GETTING FIT</h3>
          <p>
            Dolor sit amet
            consectetur adipiscing elit sed do. eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to='/login'><Button className='px-3' variant='warning'>Join Now</Button></Link>
        </Col>
      </Row>
    </div>
  )
}

export default FitInfo