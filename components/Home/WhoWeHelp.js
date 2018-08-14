import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';
import { colors } from '../colors';

import { Home } from 'styled-icons/material/Home.cjs';
import { Law } from 'styled-icons/octicons/Law.cjs';
import { Heartbeat } from 'styled-icons/fa-solid/Heartbeat.cjs';
import { BusinessCenter } from 'styled-icons/material/BusinessCenter.cjs';

import { Car } from 'styled-icons/fa-solid/Car.cjs';
import { Business } from 'styled-icons/material/Business.cjs';
import { Dna } from 'styled-icons/fa-solid/Dna.cjs';
import { Pills } from 'styled-icons/fa-solid/Pills.cjs';

const iconSize = 70;

const Headline = styled.h5`
    font-size: 40px;
    text-align: center;
    color: grey;
    margin: 40px 0 20px 0;
    text-transform: uppercase;
    font-weight: 300;

    ::after {
        content: '';
        display: block;
        height: 2px;
        width: 126px;
        margin: .5em auto;
        background: grey;
    }
`;

const HelpersWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0;

        li {
            color: grey;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;

            p {
                text-transform: uppercase;
            }
        }
        @media ${device.laptop} {
            flex-direction: row;
        }
    }

    @media ${device.laptop} {
        flex-direction: column;
    }
`;

class WhoWeHelp extends Component {
    render () {
        return (
            <div>
            <Headline>Who We Help</Headline>
            <HelpersWrapper> 
                <ul>
                    <li>
                        <Home size={iconSize} />
                        <p>Home Services</p>
                    </li>
                    <li>
                        <Law size={iconSize} />
                        <p>Legal</p>
                    </li>
                    <li>
                        <Heartbeat size={iconSize} />
                        <p>Healthcare</p>
                    </li>
                    <li>
                        <BusinessCenter size={iconSize} />
                        <p>Small Business</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Business size={iconSize} />
                        <p>Franchises</p>
                    </li>
                    <li>
                        <Car size={iconSize} />
                        <p>Automotive</p>
                    </li>
                    <li>
                        <Dna size={iconSize} />
                        <p>Bio-Tech</p>
                    </li>
                    <li>
                        <Pills size={iconSize} />
                        <p>PHARMACEUTICAL</p>
                    </li>
                </ul>
            </HelpersWrapper>
            </div>
        )
    }
}

export default WhoWeHelp;