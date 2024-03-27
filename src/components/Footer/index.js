import React from 'react'
import styled from 'styled-components'
import { Container, Nav } from 'react-bootstrap';

const Wrapper = styled.div`
 

`;
const FooterContainer = styled.div`
    /* height: 400px; */
    align-items: center;
    background-color: ${({theme})=>theme.purple};
    border-radius: 50px;   
    margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 6px;
    
    @media screen and (max-width: 640px){
        display: none;
    }
`;

const FootersLink = styled.a`
    font-weight: 700;
    text-decoration: none;
    color: ${({theme})=>theme.white};
    &:link{
        color: ${({theme})=>theme.white};
    }
    &:hover{
        color: ${({theme})=>theme.white};
        font-weight: 900;
    }
    &:active{
        color: ${({theme})=>theme.white};
    }
`;

const WorkWithUs = styled.div`
    background-color:${({theme})=>theme.primary};
    color: ${({theme})=>theme.white};
    border: 1px solid ${({theme})=>theme.primary};
    border-radius:100px;   
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 15px 45px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
   
    &:hover{
        background-color: ${({theme})=>theme.purple};
        color: ${({theme})=>theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;

const Footer = () => {
  return (
    <div className='mx-auto'>        
        <FooterContainer className='mx-auto'>
            <div className='text-center text-white pt-5' style={{fontWeight:'600',fontSize:'62px'}}>Let’s Build something amazing</div>
            <ButtonContainer>
                <WorkWithUs>MORE INSIGHT</WorkWithUs>  
            </ButtonContainer>

            <div className='col-md-5 justify-space-between mt-5 text-center mx-auto'>
                <div className='text-white pb-5 text-center' style={{display:'flex',justifyContent:'space-between'}}>
                    <FootersLink href='#works'>Works</FootersLink>
                    <FootersLink href='#about' className='link'>About us</FootersLink>
                    <FootersLink href='#insight'>Insight</FootersLink>
                    <FootersLink href='#contact'>Contact</FootersLink>
                </div>
            </div>

            <div className='col-md-8 justify-space-between mx-auto mt-5 px-5'>
                <div className='text-white pb-5' style={{display:'flex',justifyContent:'space-between'}}>
                    <span>©2024 - All rights reserved</span>
                    <a>Back to Top</a>
                </div>
            </div>
           
        </FooterContainer>

    </div>
  )
}

export default Footer