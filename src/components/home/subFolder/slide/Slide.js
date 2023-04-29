import React, { useEffect, useRef, useState } from 'react'
import './slide.css'
import { Carousel } from 'react-bootstrap'

function Slide() {

  const slideDiv = useRef()
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShow(true)
        observer.unobserve(entries[0].target);
      }
    },
    {
      threshold: 1
    });
    
    if(slideDiv.current){
      observer.observe(slideDiv.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div  ref={slideDiv} className='slideContainer'>
      {
        show &&
        <div className='slide_mainDiv'>
          <div className='slide_div1'>
            <Carousel fade indicators={false} controls={false}>

              <Carousel.Item>
                <img
                  className="slide_img"
                  src="images/slide1.webp"
                  alt="First slide"
                  loading='lazy'
                />
                <Carousel.Caption>
                  <h3>Variety of Training</h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="slide_img"
                  src="images/slide2.webp"
                  alt="Second slide"
                  loading='lazy'
                />
                <Carousel.Caption>
                  <h3>Personal Training Services</h3>
                  <p>
                    involuptate velit esse cillum dolore eu fugiat nulla pariatur. eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="slide_img"
                  src="images/slide3.webp"
                  alt="Third slide"
                  loading='lazy'
                />
                <Carousel.Caption>
                  <h3>Quality Equipment</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit adipiscing elit, in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="slide_img"
                  src="images/slide4.webp"
                  alt="First slide"
                  loading='lazy'
                />
                <Carousel.Caption>
                  <h3>Thriving Community</h3>
                  <p>
                    Laboris nisi ut aliquip ex ea
                    commodo consequat, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="slide_img"
                  src="images/slide5.webp"
                  alt="First slide"
                  loading='lazy'
                />
                <Carousel.Caption>
                  <h3>Overall Value</h3>
                  <p>
                    sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqu Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </div>
        </div>
      }
    </div>
  )
}

export default Slide