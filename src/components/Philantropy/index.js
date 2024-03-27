import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap';
import phil from "../../images/philanthropy-1.webp"
import community from "../../images/philanthropy-2.webp"
const Wrapper = styled.div`
 

`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color:${({theme})=>theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const PhilanthropyContainer = styled.div`
    align-items: center;
    color:  ${({theme})=>theme.black};
    background-color: ${({theme})=>theme.white};
    border-radius: 50px;   
    margin-bottom: 50px;
    margin-left: 30px;
    margin-right: 30px;
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


const Philanthropy = () => {
  return (
    <div id='csr'>
         <Title className='pt-5 pb-5'>Corporate social responsibility(CSR)</Title>
        <PhilanthropyContainer className='mx-auto'>
            <Container>
                <div className='row'>
                    <div className='col-md-6 my-auto text-center'>
                        <img src={phil} alt='P' className='w-100 h-100 mt-5' style={{borderRadius:'15px'}}></img>
                        </div>
                    <div className='col-md-6 pl-2'>
                        <h2 className='mt-4 mb-3' style={{fontWeight:'800'}}>The School Project</h2>
                        <div className='py-4 px-3' style={{backgroundColor:'#f2f2f266',borderRadius:'20px'}}>
                        Through My civic social responsibility, There was a transformation of  the learning environment for these children, providing them with a safe and conducive space to pursue their education. 
                        </div >

                        <div className='py-4 px-3 mt-3' style={{backgroundColor:'#f2f2f266',borderRadius:'15px'}}>
                        My dedication to improving the lives of others serves as an inspiration to us all, reminding us of the profound impact that kindness and generosity can have on our communities. 
                        </div >
                    </div>
                </div>
            </Container>
         
        </PhilanthropyContainer>

        <PhilanthropyContainer className='mx-auto'>
            <Container>
                <div className='row'>
                    <div className='col-md-5 px-3'>
                        <h2 className='mt-4 mb-3' style={{fontWeight:'700'}}>Community Empowerment </h2>
                        <div className='py-4 px-3' style={{backgroundColor:'#f2f2f266',borderRadius:'20px'}}>
                        Through My civic social responsibility, There was a transformation of  the learning environment for these children, providing them with a safe and conducive space to pursue their education. 
                        </div>                      
                    </div>
                    <div className='col-md-7 my-auto text-center'>
                        <img src={community} alt='P' className='w-100 mt-5' style={{borderRadius:'170px',height:'320px'}}></img>
                    </div>
                </div>
            </Container>
         
        </PhilanthropyContainer>
    </div>
  )
}

export default Philanthropy