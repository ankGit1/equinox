import React, { useRef } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './benefits.css'

function Benefits() {

    const benefits = useRef();

    const reveal = () => {
        let showLeft = document.querySelectorAll('.stay_left');
        let showUp = document.querySelectorAll('.dirUp');
        let windowHt = window.innerHeight;
        let showAfter = 60
        for (let i = 0; i < showLeft.length; i++) {
            let moveLeft = showLeft[i].getBoundingClientRect().top;
            if(moveLeft < windowHt - showAfter){
                showLeft[i].classList.add('activeText')
            }
        }
        for (let i = 0; i < showUp.length; i++) {
            let moveTop = showUp[i].getBoundingClientRect().top;
            if(moveTop < windowHt - showAfter){
                showUp[i].classList.add('activeCol')
            }
        }
    }

    window.addEventListener('scroll',reveal)

    return (
        <div ref={benefits} className='benefits_mainDiv'>
            <h3 className='stay_left'>MORE THAN JUST GYM.</h3>
            <p style={{color: '#ffb8cb'}} className='stay_left'>
                we provide world class fitness equipment,trainers and classes
                to get you to your ultimate fitness goals with ease. we provide
                ture care into each and every member.
            </p>
            <div>
                <Row>
                    <Col className='my-2 colcol dirUp' lg='4' sm='6'>
                        <Card>
                            <Card.Img src="images/series1.webp" alt="img" loading='lazy' />
                            <Card.ImgOverlay>
                                <Card.Title>expert and pro trainers</Card.Title>
                                <Card.Text>
                                    in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.Ut enim ad minim veniam,
                                    quis nostrud exercitation.
                                </Card.Text>
                                <div className='light'></div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col className='my-2 colcol dirUp' lg='4' sm='6'>
                        <Card>
                            <Card.Img src="images/series2.webp" alt="img" loading='lazy' />
                            <Card.ImgOverlay>
                                <Card.Title>100's of diverse classes</Card.Title>
                                <Card.Text>
                                    adipiscing elit incididunt ut labore
                                    et dolore magna aliqua
                                    sed do eiusmod tempor incididunt
                                    sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.minim veniam.
                                </Card.Text>
                                <div className='light'></div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col className='my-2 colcol dirUp' lg='4' sm='6'>
                        <Card>
                            <Card.Img src="images/series3.webp" alt="img" loading='lazy' />
                            <Card.ImgOverlay className='img_overlay'>
                                <Card.Title className='img_title'>state of the art facilities</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua.
                                </Card.Text>
                                <div className='light'></div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Benefits