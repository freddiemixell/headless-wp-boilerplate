import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';
import Link from "next/link";

import Button from 'material-ui/Button';

const Wrapper = styled.div`
    display: flex;
    background: #1893b3;
    height: 100%;
    width: 100%;
    position: relative;
`;

const InnerWrap = styled.div`
    padding: 50px;
`;

const PortfolioImg = styled.img`
    position: absolute;
    right: -450px;
    top: 12%;
    height: 800px;
    z-index: 1000;

    @media ${device.tablet} {
        right: 2%;
        max-height: 600px;
    }
`;

const Paragraph = styled.div`
    width: 100%;
    z-index: 3000;
    position: relative;
    color: #fff;
    font-size: 18px;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    @media ${device.laptop} {
        width: 60%;
    }
`;

const Headline = styled.h3`
    color: #fff;
    font-size: 40px;
    font-weight: 300;
    text-shadow: 0.5px 0.5px 10px rgba(0,0,0,0.3);
    position: relative;
    z-index: 2000;
    ::after {
        content: '';
        display: block;
        height: 2px;
        width: 126px;
        margin-top: 20px;
        background: #fff;
        box-shadow: 0.5px 0.5px 10px rgba(0,0,0,0.3);
    }
`;

const FlexBox = styled.div`
    display: flex;
    margin-bottom: 20px;
    z-index: 9000;
`;

const styles = {
    button: {
        height: '50px',
        backgroundColor: '#e8b007', 
        color: '#fff'
    },
    link: {
        textDecoration: 'none'
    }
}

class Portfolio extends Component {
    render () {
        return (
            <Wrapper>
                <InnerWrap>
                    <Headline>{this.props.headline}</Headline>
                    <FlexBox>
                    <Paragraph
                        dangerouslySetInnerHTML={{
                        __html: this.props.paragraph
                        }}
                        />
                        <PortfolioImg src={this.props.img} alt=""/>
                    </FlexBox>
                    <Link href={this.props.link}>
                    <a style={styles.link}>
                        <Button variant="raised" style={styles.button}>
                            {this.props.btn}
                        </Button>
                    </a>
                    </Link>
                </InnerWrap>
            </Wrapper>
                )
            }
        }
        
        export default Portfolio;