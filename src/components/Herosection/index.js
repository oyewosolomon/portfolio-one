import React from 'react'
import styled from 'styled-components'
import {Bio} from "../../data/constant"
import president from "../../images/president-1.png"
import HeroBgAnimation from '../HeroBgAnimation'
import Textra from 'react-textra'
import {FaTwitter, FaLinkedin,FaFacebook,FaInstagram, FaYoutube} from 'react-icons/fa'

const HeroContainer = styled.div`
  background-color: ${({theme})=>theme.card_light};
  justify-content: center;
  position: relative;
  padding: 20px 15px;
  /* margin-right: 70px; */
  @media screen and (max-width: 640px) {
    padding: 32px 16px;

  }
  z-index: 1;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%,0 100%); */
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0 0px;
    justify-content: center;
  }
`;

const HeroInnerConatiner = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding-left: 30px;
  padding-top: 40px;
  padding-right: 30px;
  border-radius: 25px;
  /* max-width: 1100px; */
  background-color: #ffffff;
  @media screen and (max-width: 960px){
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width:100% ;
  align-items: center;
  text-align: center;
  text-align: center;
  display: block;
  @media screen and (max-width: 960) {

    margin-bottom: 32px;
    align-items: center;

  }
  @media screen and (max-width: 640) {

    margin-bottom: 32px;
   
    align-items: center;


  }
`;

const HeroRightContainer = styled.div`
  width:100% ;
padding-bottom: 50px;
  display: block;
  gap: 12px;
  @media screen and (max-width: 960) {

    margin-bottom: 80px;
  }
  @media screen and (max-width: 640) {

    margin-bottom: 30px;

  }
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
    border: 1.8px solid ${({theme})=>theme.primary};
    border-radius:100px;
   
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 23px 45px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    height: 85%;
    &:hover{
        background-color: ${({theme})=>theme.primary};
        color: ${({theme})=>theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 6px;
    margin-top: 15px;
    @media screen and (max-width: 640px){
      margin-left: 20px;
    }
`;
const SocialLink = styled.a`
    text-decoration: none;
    background-color:${({theme})=>theme.white};
    color: ${({theme})=>theme.black};
    width: 16.7%;
    border-radius:20px;   
    justify-content: center;
    align-items: center;
    display: flex;
    justify-self: flex-start;
    text-align: center;
    margin: 10px;
    padding: 23px 45px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background-color: ${({theme})=>theme.primary};
        color: ${({theme})=>theme.white};
        cursor: pointer;
    }
    @media screen and (max-width: 640px) {
      padding: 23px 20px;
      font-size: 0.9rem;
      width: 41%;
      height: 50px;
      margin: 10px;
    }
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: 500;
  color:${({theme})=>theme.text_primary};
  line-height: 60px;
  @media screen  and (max-width: 960px){
    text-align: center;
  }
  @media screen and (max-width: 640px ) {
    font-size: 20px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-size: 85px;
  font-weight: 700; 
  display: inline-block;
  text-align: center;
  align-items: center;
  justify-content: end;
  justify-self: center;
  margin-bottom: 20px;
  width: 85%;
  gap: 12px;
  line-height: 100px;
  color: ${({theme})=>theme.black};
  @media screen  and (max-width: 960px){
    text-align: center;
  }
  @media screen and (max-width: 640px ) {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 16px;
  }

`;

const Span = styled.div`
display: inline-block;
  color: ${({theme})=>theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({theme})=>theme.black+95};
  line-height: 32px;
  margin-bottom: 42px;

  @media screen  and (max-width: 960px){
    text-align: center;
  }
  @media screen and (max-width: 640px ) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 15px;
  max-height: 380px;
  max-height: 600px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 960px) {
    max-height: 400px;
    max-width: 400px;
  }

  @media screen and (max-width: 640px) {
    max-height: 300px;
  }
`;

const Hero = () => {
  return (
    <div id='hero'>
    
        <HeroBg>
          <HeroBgAnimation/>
        </HeroBg>

        <HeroInnerConatiner>
          <HeroLeftContainer>
            <Title>
              Hi, I am &nbsp;
              {Bio.name}
            </Title>
            <TextLoop>
              I’m bringing the world of &nbsp;
              <Span>
                <Textra
                  data={Bio.roles}
                  effect='topDown'
                  duration={1000}
                  stopDuration={2000}
                  />              
              </Span>
             &nbsp; to you
            </TextLoop>
            
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={president} alt='Hero'></Image>
            <ButtonContainer>
          <WorkWithUs>WORK WITH ME</WorkWithUs>
          </ButtonContainer>
          </HeroRightContainer>
        </HeroInnerConatiner>
        
        <SocialContainer>
          <SocialLink href='https://linkedin.com/in/jayneonwumere' target='_blank'><FaLinkedin> </FaLinkedin>&nbsp; LinkedIn</SocialLink>
          <SocialLink href='https://facebook.com/jayneonwumere' target='_blank'><FaFacebook> </FaFacebook>&nbsp; Facebook</SocialLink>
          <SocialLink href='https://twitter.com/jayneonwumere' target='_blank'><FaTwitter> </FaTwitter>&nbsp; Twitter</SocialLink>
          <SocialLink href='https://instagram.com/jayneonwumere' target='_blank'><FaInstagram> </FaInstagram>&nbsp; Instagram</SocialLink>
          <SocialLink href='https://youtube.com/@jayneonwumere' target='_blank'><FaYoutube> </FaYoutube>&nbsp; Youtube</SocialLink>
        </SocialContainer>
   
    </div>
  )
}

export default Hero