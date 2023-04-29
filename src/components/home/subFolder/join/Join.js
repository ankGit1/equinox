import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './join.css'

function Join() {
    const [msg, setMsg] = useState(null)

    const form_submit = (e) => {
        e.preventDefault();
        setMsg('Thank you for showing interest. Our team will reach out to you soon.')
    }

    const reveal = () => {
        let showLeft = document.querySelectorAll('.stay_atLeft');
        let showRight = document.querySelectorAll('.stay_atRight');
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
        <div className='join_mainDiv'>
            <Row>
                <Col className='my-2 stay_atLeft' md='6'>
                    <h3>JOIN NOW TO GET IN SHAPE</h3>
                    <p>
                        Consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi
                    </p>
                    <form onSubmit={(e)=>form_submit(e)}>
                        <input className='join_input' type='text' placeholder='NAME' autoComplete='false' required />
                        <br />
                        <input className='join_input' type='email' placeholder='EMAIL' autoComplete='false' required />
                        <br />
                        <textarea className='join_input' rows='6' placeholder='MESSAGE' autoComplete='false' required />
                        {msg && <p>{msg}</p>}
                        <Button type='submit' className='px-3' variant='warning'>SUBMIT</Button>
                    </form>
                </Col>
                <Col className='my-2 stay_atRight' md='6'>
                    <img className='join_img' src='images/join.webp' alt='img' />
                    <div className='join_title'>Equinox</div>
                </Col>
            </Row>
        </div>
    )
}

export default Join