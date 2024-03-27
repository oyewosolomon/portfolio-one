import React from 'react'
import styled
 from 'styled-components';
import { experiences } from '../../data/constant';
import ExperienceCard from '../Cards/ExperienceCard';
import gorealpresident from "../../images/goreal-pro-pres.webp"
import president from "../../images/president-3.png"
import successsummit from "../../images/success-summit-1.webp"
import flourishestate from "../../images/flourish-estate.webp"
import visionaryspeak from "../../images/visionary-speak.webp"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { Box } from '@mui/material';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;


const EventContainer = styled.div`
    width: 100%;
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


const ConferenceImage = styled.img`
  border-radius: 25px;
  width: 90%;
  height: 600px;
  margin-bottom: 170px;
  margin-top: 50px;
  background-attachment: fixed;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 450px;
  }
`;

const Events = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.set(".photo:not(:first-child)",
        {opacity:0,scale:0.5}
      )
      const animation = gsap.to(".photo:not(:first-child)",
      {opacity:1,scale:1, duration:1,stagger:1})
  
      ScrollTrigger.create({
        trigger:".gallery",
        start:"top  50%",
        end:"bottom 50%",
        pin:".rightblock",
        animation:animation,
        scrub:true
      })
      
    })
    return ()=>ctx.revert()
  },[]);

  return (
    <Container id="experience">

            <Title className='pt-5 pb-5'>Events</Title>
            <Box className="gallery product-smooth-scroll" sx={{display:"flex"}}> 
              <EventContainer >
              <div className='row mb-5' >
                <Box className='col-md-6 rightblock'> 
                  <Box sx={{
                    "& .photo":{
                      position:"absolute",
                    } 
                      }}>   
                      
                        <ConferenceImage className='photo' src={gorealpresident}></ConferenceImage>  
                        <ConferenceImage className='photo' src={president}></ConferenceImage>  
                        <ConferenceImage className='photo' src={successsummit}></ConferenceImage>  
                        <ConferenceImage className='photo' src={flourishestate}></ConferenceImage> 
                        <ConferenceImage className='photo' src={visionaryspeak}></ConferenceImage> 
                            
                  </Box>                    
                </Box>

                <Box className='col-md-6'>
                    <Box className="details"> 
                      {experiences.map((experience,index)=>(
                      
                                                    
                        <ExperienceCard experience={experience} />
                      
                    
                      ))}
                    </Box>
                  </Box>
                
              </div>
            </EventContainer>
            </Box>

      
    </Container>
  )
}

export default Events