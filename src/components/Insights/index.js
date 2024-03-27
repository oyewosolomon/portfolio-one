import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import insightone from "../../images/insight-1.webp"
import insightwo from "../../images/insight-2.webp"
import insightthree from "../../images/insight-3.webp"

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
    background-color:${({theme})=>theme.white};
    color: ${({theme})=>theme.black};
    border: 1px solid ${({theme})=>theme.black};
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
        background-color: ${({theme})=>theme.black};
        color: ${({theme})=>theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;
const InsightCard = styled.div`
  border-radius: 20px;
  padding: 20px;
`;

const InsightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  justify-content: left;
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color:${({theme})=>theme.black};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Insight = () => {
  return (
    <Container id='insight' className='mt-5'> 
      <div className='mx-auto text-center '>
        <Title className='pb-5 pt-5'>Latest Insight</Title>
       
          <div className='row justify-content-between'> 
            <InsightCard className='col-md-3 bg-white mb-4'>
              <div><img src={insightone} alt='P' className='w-100 h-100 mt-2' style={{borderRadius:'15px'}}></img></div>
              <InsightBody>
                <h4 className='py-4'> Build A Multi Billion Real Estate</h4>

                <div> Dr Jayne giving a Lecture on how to Build A Multi Billion Real Estate at the GoReal Pro Event November 2023.</div>
                <div className='pt-4'><a>READ MORE</a></div>
              </InsightBody>
            </InsightCard>
            <InsightCard className='col-md-3 bg-white mb-4'>
              <div><img src={insightwo} alt='P' className='w-100 h-100 mt-2' style={{borderRadius:'15px'}}></img></div>
              <InsightBody>
                <h4 className='py-4'> Real Estate Tycoon Speech</h4>

                <div>
                  How to be a Successful Real Estate Tycoon Speech at the 2023 Annual Convention.
                </div>
                <div className='pt-4'><a>READ MORE</a></div>
              </InsightBody>
            </InsightCard>
            <InsightCard className='col-md-3 bg-white mb-4'>
              <div><img src={insightthree} alt='P' className='w-100 h-100 mt-2' style={{borderRadius:'15px'}}></img></div>
              <InsightBody>
                <h4 className='py-4'> Award of excellence</h4>

                <div> 
                  Dr Jayne Onwunmere receiving an award of excellence at the Bells University  College , Otta.
                </div>
                <div className='pt-4'><a>READ MORE</a></div>
              </InsightBody>
            </InsightCard>
          </div>
       
      </div>
      <ButtonContainer>
        <WorkWithUs>MORE INSIGHT</WorkWithUs>  
      </ButtonContainer>
    </Container>
  )
}

export default Insight