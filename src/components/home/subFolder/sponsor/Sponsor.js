import React from 'react'
import './sponsor.css'

function Sponsor() {

  const reveal = () => {
    let showAvail = document.querySelectorAll('.stay_visi');
    let windowHt = window.innerHeight;
    let showAfter = 60
    for (let i = 0; i < showAvail.length; i++) {
        let moveLeft = showAvail[i].getBoundingClientRect().top;
        if(moveLeft < windowHt - showAfter){
          showAvail[i].classList.add('active')
        }
    }
}

window.addEventListener('scroll',reveal)
  return (
    <div className='sponsor_mainDiv'>
        <img className='stay_visi' src='images/nike.png' alt='img'></img>
        <img className='stay_visi' src='images/speedo.png' alt='img'></img>
        <img className='stay_visi' src='images/castore.png' alt='img'></img>
        <img className='stay_visi' src='images/decathlon.png' alt='img'></img>
        <img className='stay_visi' src='images/puma.png' alt='img'></img>
    </div>
  )
}

export default Sponsor