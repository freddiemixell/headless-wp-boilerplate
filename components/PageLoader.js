import React, { Component } from "react";
import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Loader = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: auto;
    padding: 25px;
    top: 30%;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
`;

class PageLoader extends Component {


    render () {

        return (
                <Wrapper>
                    <Loader>
                        <img src="/static/images/logo.png" width="150"/>
                        <br/>
                        <br/>
                        <BarLoader
                        height={10}
                        width={200}
                        color="#243B72"
                        loading={this.props.loading}
                        />
                    </Loader>
                </Wrapper>
        )
    }
}
            
export default PageLoader;