import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';

const Video = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100vw;
    min-height: 100vh;
`;

const HeroSection = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100vw;
    height: 60vh;
    left: 0;
    right: 0;
    top: -100px;
    background: -webkit-linear-gradient(top, #fff 0%, rgba(125,185,232,0) 100%);
    transition: all 0.4s ease;

    @media ${device.laptop} {
        height: 130vh;
    }
`;

const HeroText = styled.h1`
    text-align: left;
    z-index: 9999;
    color: #fff;
    text-shadow: 0.5px 0.5px 10px rgba(0,0,0,0.8);
    line-height: 50px;
    padding-top: 80%;
    font-size: 45px;
    margin: 0 3% 0 3%;

    @media ${device.mobileL} {
        font-size: 50px; 
        padding-top: 70%;
        margin: 15px;
        line-height: 80px;
    }

    @media ${device.tablet} {
        font-size: 70px; 
        padding-top: 60%;
        line-height: 100px;
    }

    @media ${device.laptop} {
        font-size: 100px; 
        padding-top: 35%;
    }
`;

class HomeHero extends Component {
        render () {
           return ( 
           <div>
             <Video autoPlay muted loop>
                <source 
                        src="https://s3-us-east-2.amazonaws.com/one-seo-bucket/wp-content/uploads/2018/08/12143602/1SEOHeroVideo1.mp4"
                        type="video/mp4" 
                />
                <source 
                        src="https://s3-us-east-2.amazonaws.com/one-seo-bucket/wp-content/uploads/2018/08/07171149/1SEOHeroVideo.webm" 
                        type="video/webm"
                />
              </Video>
              <HeroSection>
                  <div><HeroText>WE CREATE<br />OPPORTUNITIES TO<br /><span style={{textDecoration: 'underline'}}>SUCCEED</span></HeroText></div>
              </HeroSection>
           </div>
            )
        }
    }

export default HomeHero;