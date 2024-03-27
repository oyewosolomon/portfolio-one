import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import phil from "../../images/webinar.webp"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import president from "../../images/president-3.png"
import Image from 'react-bootstrap/Image';

const WebinarContainer = styled.div`
    height: 400px;
    align-items: center;
    color:  ${({theme})=>theme.black};
    background-color: ${({theme})=>theme.white};
    border-radius: 50px;   
    margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 6px;
    
    @media screen and (max-width: 640px){
        display: none;
    }
`;

const WorkWithUs = styled.div`
    background-color:${({theme})=>theme.primary};
    color: ${({theme})=>theme.white};
    border: 1px solid ${({theme})=>theme.primary};
    border-radius:100px;   
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 15px 45px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
   text-transform: uppercase;
    &:hover{
        background-color: ${({theme})=>theme.purple};
        color: ${({theme})=>theme.white};
    }

    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;
const Webinar = () => {
    const [show, setShow] = useState(false);
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <WebinarContainer className='mx-auto'>
    <Container>        
        <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Image src={president} width="30px" height="30px" roundedCircle />
                     Who wants to be the next Real Estate Billionnaire?
                </Modal.Title>
            </Modal.Header>           
                <Modal.Body>
                <div className='row'>
                    <div className='col-md-6'>
                        <Form>
                            <Form.Group className="mb-3" controlId="register.name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Full name"
                                autoFocus
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="register.email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="register.phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone number"
                                autoFocus
                            />
                            </Form.Group>
                        </Form>
                        <div>A zoom link will be sent to you after registration.</div>
                    </div>
                    <div className='col-md-6'>
                        <img src={phil} width="100%" />
                    </div>
                </div>
                </Modal.Body>
               
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
        <div className='row'>
            <div className='col-md-6'>
                <h2 className='mt-4 mb-3' style={{fontWeight:'700'}}>Join My Weekly Real Estate Billionaire Webinar</h2>
                <div className='py-4 px-3' style={{backgroundColor:'#f2f2f266',borderRadius:'20px'}}>
                Don't miss out on this incredible opportunity to unlock the path to becoming a real estate billionaire. Reserve your spot today and let's embark on this journey together!
                </div >

                <ButtonContainer>
                  <WorkWithUs onClick={handleShow}>Register Today</WorkWithUs>  
                </ButtonContainer>

              
            </div>
            <div className='col-md-6 my-auto text-center'>
                <img src={phil} alt='P' className='w-100 h-100 mt-5' style={{borderRadius:'20px'}}></img>
            </div>
        </div>
    </Container>
 
</WebinarContainer>
  )
}

export default Webinar