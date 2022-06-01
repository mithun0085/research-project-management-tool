import React from 'react'
// import './home.css'
import styled from 'styled-components';
import BgImg from '../../assets/image.jpg';

const Section = styled.section`
    background: url(${BgImg});
    width: 3000;
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 120px;
`;

const Content = styled.div`
    width: 100%;
    height: 100px;
`;

const Left = styled.div`
    padding-left: 220px;
    padding-top: 143px;
`;

const Title = styled.p`
    font-size: 55px;
    color: #ffff;
    font-weight: 400;
    
`;

const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea0ac;
    line-height: 30px;
    margin-top: 10px;
`;

const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 10px;
    width: 260px;
    height: 55px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #0546d6, #3f89fc);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`; 

function Home() {
    return (
        <div className="home_page">
               <Section>
        <Content>
          <Left>
            <Title>
            Build a stronger<br/> client community<br/>
            </Title>
            <Desc>An all-in-one fitness software that provides 
                first-rate service for your clients
                 and the most effective business management 
                 for your studio.</Desc>
            <Button href ='http://localhost:3000/register'
            target ='_blank' >
                <span>Register Now</span>
            </Button>
          </Left>
        </Content>
      </Section>
            {/* <h2>Hello everyone!</h2>
            <p>
            An all-in-one fitness software that provides 
                first-rate service for your clients
                 and the most effective business management 
                 for your studio
            </p> */}
            {/* <a href="https://www.youtube.com/c/DevATHTML" target="_blank" 
            rel="noopener noreferrer">My Youtube</a>

            <h3>Build a simple e-commerce site.</h3>

            <a href="https://youtu.be/uXl77UFkrkQ" target="_blank" 
            rel="noopener noreferrer">Build a Ecommerce</a> */}
        </div>
    )
}

export default Home
