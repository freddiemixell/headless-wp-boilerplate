import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';

const PartnerWrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    ul {
        width: 100%;
        justify-content: space-around;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column wrap;
        li {
        list-style-type: none;
        }
    }

    @media ${device.mobileM} {
        ul {
            flex-flow: row wrap;
        }
    }

    @media ${device.laptop} {
        ul {
            flex-flow: row wrap;
        }
    }
`;

class Partners extends Component {
    render () {
        return (
            <PartnerWrapper>
                <ul>
                {this.props.images}
                </ul>
            </PartnerWrapper>
        )
    }
}

export default Partners;