import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import './topbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../home/subFolder/title/Title'
import Sponsor from '../home/subFolder/sponsor/Sponsor'
import Benefits from '../home/subFolder/benefits/Benefits'
import FitInfo from '../home/subFolder/fitInfo/FitInfo'
import Slide from '../home/subFolder/slide/Slide'
import Join from '../home/subFolder/join/Join'
import Contact from '../home/subFolder/contact/Contact'
import { useRef } from 'react';

function Topbar() {
    const home = useRef()
    const benefits = useRef()
    const classes = useRef()
    const join = useRef()
    const contact = useRef()

    const clickButton = (e) => {
        let offset = 60;
        if (e.target.name==='home') window.scroll({ top: (home.current.offsetTop - offset), behavior: 'smooth' });
        if (e.target.name==='benefits') window.scroll({ top: (benefits.current.offsetTop - offset), behavior: 'smooth' });
        if (e.target.name==='classes') window.scroll({ top: (classes.current.offsetTop - offset), behavior: 'smooth' });
        if (e.target.name==='join') window.scroll({ top: (join.current.offsetTop - offset), behavior: 'smooth' });
        if (e.target.name==='contact') window.scroll({ top: (contact.current.offsetTop - offset), behavior: 'smooth' });
    }

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="md">
                <Container>
                    <img className='logoImg' src='images/logo.png' alt='img' />
                    <Navbar.Brand style={{ color: '#f30443' }} href="#home">Equinox</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto linkDiv">
                            <Nav.Link className='mx-2' onClick={(e) => clickButton(e)} name='home'>Home</Nav.Link>
                            <Nav.Link className='mx-2' onClick={(e) => clickButton(e)} name='benefits'>Benefits</Nav.Link>
                            <Nav.Link className='mx-2' onClick={(e) => clickButton(e)} name='classes'>Classes</Nav.Link>
                            <Nav.Link className='mx-2' onClick={(e) => clickButton(e)} name='contact'>Contacts</Nav.Link>
                            <Nav.Link className='mx-2' onClick={(e) => clickButton(e)} name='join'>Join Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button className='px-4' variant='warning'  onClick={(e) => clickButton(e)} name='join'>
                                Become a Member
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div ref={home}><Title /></div>
            <div><Sponsor /></div>
            <div ref={benefits}><Benefits/></div>
            <div><FitInfo /></div>
            <div ref={classes}><Slide /></div>
            <div ref={join}><Join /></div>
            <div ref={contact}><Contact /></div>
        </>
    );
}

export default Topbar;