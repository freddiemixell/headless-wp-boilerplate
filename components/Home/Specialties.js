import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';
import { colors } from '../colors';

import { ChartBar } from 'styled-icons/fa-regular/ChartBar.cjs';
import { Law } from 'styled-icons/octicons/Law.cjs';
import { Heartbeat } from 'styled-icons/fa-solid/Heartbeat.cjs';
import { BusinessCenter } from 'styled-icons/material/BusinessCenter.cjs';

import { Car } from 'styled-icons/fa-solid/Car.cjs';
import { Business } from 'styled-icons/material/Business.cjs';
import { Dna } from 'styled-icons/fa-solid/Dna.cjs';
import { Pills } from 'styled-icons/fa-solid/Pills.cjs';

const iconSize = 30;

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

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0;
        margin: auto;

        li {
            color: #000;
            display: flex;
            text-align: center;
            align-items: center;
            margin: 10px;
            
           div {
            border: 0;
            border-radius: 50%;
            padding: 10px;
            max-width: 30px;
            max-height: 30px;
            background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
           }
            svg {
                color: #fff;
            }

            .head {
                text-transform: uppercase;
                font-weight: 500;
                ${colors.blueColor}
            }

            .bodyText {
                display: none;
            }

            .column {
                display: flex;
                flex-direction: column;
                max-width: 270px;
                min-width: 200px;
                text-align: left;
                margin-left: 5%;
                p {
                    margin: 0;
                }
                @media all and (max-width: 1024px) {
                    width: 270px;
                }
            }

            @media ${device.laptop} {
                align-items: flex-start;
            }
        }

        @media ${device.laptop} {
            flex-direction: row;
            .bodyText {
                display: flex!important;
            }
        }
    }

    @media ${device.laptop} {
        flex-direction: column;
    }
`;

class Specialties extends Component {
    render () {
        return (
            <div style={{padding: '20px'}}>
            <Headline>OUR SPECIALTIES</Headline>
            <Wrapper> 
                <ul>
                    <li>
                        <div>
                        <ChartBar size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                    <li>
                        <div>
                        <Law size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                    <li>
                        <div>
                        <Heartbeat size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                    <li>
                        <div>
                        <BusinessCenter size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div>
                        <Business size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                    <li>
                        <div>
                        <Car size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                    <li>
                        <div>
                        <Dna size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                    <li>
                        <div>
                        <Pills size={iconSize} />
                        </div>
                        <span className="column">
                        <p className="head">Search Engine Optimization</p>
                        <p className="bodyText">Get found locally, nationally, or internationally — wherever you want to be. Our SEO services don’t stop there. We also offer consulting and white label solutions.</p>
                        </span>
                    </li>
                </ul>
            </Wrapper>
            </div>
        )
    }
}

export default Specialties;