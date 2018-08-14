import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';
import Link from "next/link";

const Wrapper = styled.div`
    padding: 0px;
    -webkit-transform: skew(0deg, -6deg);
    -moz-transform: skew(0deg, -6deg);
    -ms-transform: skew(0deg, -6deg);
    -o-transform: skew(0deg, -6deg);
    transform: skew(0deg, -6deg);
    background: #e8b007;
    position: relative;
    margin: 84px 0;
    color: #575daa;

    ::before {
        content: '';
        display: block;
        background: #e8b007;
        height: 198px;
        width: 100%;
        position: absolute;
        bottom: -85px;
        -webkit-transform: skew(0deg, 6deg);
        -moz-transform: skew(0deg, 6deg);
        -ms-transform: skew(0deg, 6deg);
        -o-transform: skew(0deg, 6deg);
        transform: skew(0deg, 6deg);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-transform: skew(0deg, 6deg);
    -moz-transform: skew(0deg, 6deg);
    -ms-transform: skew(0deg, 6deg);
    -o-transform: skew(0deg, 6deg);
    transform: skew(0deg, 6deg);
    margin: 0 auto;
    max-width: 1440px;
    width: 95%;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const VideoBox = styled.div`
    position: relative;
    vertical-align: middle;
    flex: 2;

    text-align: center;

    img {
        width: 80%;
        height:
        justify-content: center;
        margin: 0 auto 0 auto;
        right: 0;
        left: 0;

    }
`;

const ContentBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    vertical-align: middle;
    position: relative;
    padding: 20px;
`;

const Headline = styled.h3`
    color: #575daa;
    font-size: 40px;
    font-weight: 300;
    margin: 0;

    ::after {
        content: '';
        display: block;
        height: 2px;
        width: 126px;
        margin-top: 20px;
        background: #575daa;
        box-shadow: 0.5px 0.5px 10px rgba(0,0,0,0.3);
    }
`;

const Paragraph = styled.p`
    font-size: 18px;
`;

class GooglePartners extends Component {
    render () {
        return (
            <Wrapper>
                <Container>
                        <VideoBox>
                            <img src={this.props.img} alt="" />
                        </VideoBox>
                        <ContentBox>
                            <Headline>{this.props.headline}</Headline>
                            <Paragraph>{this.props.paragraph}</Paragraph>
                        </ContentBox>
                </Container>
            </Wrapper>
        )
    }
}

export default GooglePartners;