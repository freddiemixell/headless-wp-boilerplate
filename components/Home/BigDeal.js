import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';

import Button from 'material-ui/Button';

import { lazyload } from 'react-lazyload';

@lazyload({
  height: '100%',
  once: true,
  offset: 100
})

const Wrapper = styled.div`
    padding: 50px;
    background: #6b2771;
    display: flex;
    padding: 50px;
    flex-direction: column;
`;

const Headline = styled.div`
    font-size: 40px;
    color: #fff;


    h3 {
        font-weight: 300;
        margin: 0;
        line-height: 50px;
    }

    h3::after {
        content: '';
        display: block;
        height: 2px;
        width: 126px;
        margin: 20px 0 20px 0;
        background: #fff;
        box-shadow: 0.5px 0.5px 10px rgba(0,0,0,0.3);
    }
`;

const SubHead = styled.h4`
    color: white;
    font-size: 24px;
    font-weight: 300;
    margin:0;
    margin-bottom: 10%;
`;

const MiniWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const TinyWrap = styled.div`
    display: flex;
    flex-direction: column;
    order: 1;

    @media ${device.laptop} {
        order: 0;
    }
`;

const LogoWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
    flex-flow: row wrap;

    ul {
        padding: 0;
    }

    img {
        text-align: center;
        width: 120px;
    }

    @media ${device.laptop} {
        flex-direction: row;
        img {justify-content: space-around;}
    }
`;

const styles = {
    button: {
        width: '100%',
        height: '60px',
        backgroundColor: '#e8b007', 
        color: '#fff',
        fontSize: '16px',
    },
    link: {
        textDecoration: 'none',
        paddingBottom: '30px'
    }
}

class BigDeal extends Component {
    render () {
        return (
            <Wrapper>
                <MiniWrap>
                    <TinyWrap>
                        <Headline
                            dangerouslySetInnerHTML={{
                            __html:this.props.headline
                                }} 
                                />
                        <SubHead>
                            {this.props.sub}
                        </SubHead>
                    </TinyWrap>
                    <a style={styles.link} href={this.props.link}>
                        <Button variant="raised" style={styles.button}>
                            {this.props.btn}
                        </Button>
                    </a>
                </MiniWrap>
                <LogoWrap>
                    {this.props.logos}
                </LogoWrap>
            </Wrapper>
        )
    }
}

export default BigDeal;