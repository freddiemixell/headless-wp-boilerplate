import React, { Component } from "react";
import styled from 'styled-components';
import {device} from '../device';

const Wrapper = styled.div`
  width: 100%;
`;

const HeroSection = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100vw;
    height: 40vh;
    left: 0;
    right: 0;
    top: 0;
    background: -webkit-linear-gradient(top, #fff 0%, rgba(125,185,232,0) 100%);
    transition: all 0.4s ease;

    @media ${device.laptop} {
        height: 50vh;
    }
`;

const Special = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    height: 40vh;
    
    ${({ img }) => img && `
    background: url(${img}) no-repeat center;
    background-size: cover;
  `}

  @media ${device.laptop} {
      height: 50vh;
  }
`;


const HeroText = styled.h1`
    text-align: center;
    z-index: 1000;
    color: #fff;
    text-shadow: 0.5px 0.5px 10px rgba(0,0,0,0.8);
    font-size: 30px;
    margin: 0;
    position: relative;
    top: 40%;

    @media ${device.laptop} {
      top: 50%;
      margin: 0;
      font-size: 40px;
    }
`;

class PageHero extends Component {
        render () {
           return ( 
           <Wrapper>
             <Special img={this.props.img}/>
              <HeroSection>
                  <div><HeroText>{this.props.headline}</HeroText></div>
              </HeroSection>
           </Wrapper>
            )
        }
    }

export default PageHero;