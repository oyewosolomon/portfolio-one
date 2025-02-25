import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    min-height: 360px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 30px 35px;
    margin-bottom: 40px;
  
    /* justify-content: space-between; */

    /* gap: 12px; */
    transition: all 0.3s ease-in-out;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }


    @media screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;

    }

    border:0.1px solid #306ee8;
    box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
`;

const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`;

const Logo = styled.img`
    height: 40px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;

    @media screen and (max-width: 768px){
        height: 40px;
    }
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const Role = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: ${({theme})=>theme.text_primary+99};
    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: ${({theme})=>theme.text_secondary};
    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=>theme.text_secondary+80};
    @media screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Description = styled.div`
    margin-top: 30px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: ${({theme})=>theme.text_primary+99};
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
`;

// const Skills = styled.div`
//     width: 100%;
//     display: flex;
//     font-size: 16px;
//     gap: 12px;
//     margin-top: 10px;
// `;
// const ItemWrapper = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 8px;
// `;

// const Skill = styled.div`
//     font-size: 15px;
//     font-weight: 400;
//     color: ${({theme})=>theme.text_primary+99};

//     @media screen and (max-width: 768px){
//         font-size: 12px;
//     }
// `;




const ExperienceCard = ({experience}) => {
  return (
    <Card>
        <Top>
            <Body>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Duration>{experience.date}</Duration>
            </Body>
            <Logo src={experience.img}></Logo>
        </Top>
        <Description>
            {experience.desc}
            {experience?.skills}
        </Description>
       
    </Card>
  )
}

export default ExperienceCard