import Link from "next/link";
import Subscribe from "./Subscribe.js"
import styled from "styled-components";

import { device } from "./device";

const Wrapper = styled.div`
    background-color: #232b2c;
    display: flex;
    flex-direction: column;
    padding: 50px;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const SectionOne = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const SectionTwo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;

    @media ${device.laptop} {
        order: 0;
    }
`;

const SectionThree = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Footer = () => (
        <Wrapper>
            <SectionOne>
                <Link href="/"><a><img src="/static/images/footLogo.png" width="150" /></a></Link>
                <p className="white bigP">We solve business problems, take a consultative approach to every client engagement, and find actionable solutions that will help your organization.</p>
                <div className="flex spaceAround">
                    <Link href="https://www.facebook.com/1seoitdigital/"><a><i className="fourtyP facebook fa fa-facebook-f"></i></a></Link>
                    <Link href="https://www.youtube.com/user/1seocom"><a><i className="fourtyP youtube fa fa-youtube"></i></a></Link>
                    <Link href="https://www.instagram.com/1seoitdigital/"><a><i className="fourtyP instagram fa fa-instagram"></i></a></Link>
                    <Link href="https://twitter.com/1SEOITDigital"><a><i className="fourtyP twitter fa fa-twitter"></i></a></Link>
                    <Link href="https://plus.google.com/u/0/+1SEOcomDigitalAgency"><a><i className="fourtyP googlep fa fa-google-plus"></i></a></Link>
                </div>
            </SectionOne>
            <SectionTwo>
                <Subscribe></Subscribe>
            </SectionTwo>
            <SectionThree>
                <h2 className="white">GET IN TOUCH</h2>
                <a className="white bigP linkFix" href="tel:215-946-1046">215-946-1046</a>
                <a className="white bigP linkFix" href="https://goo.gl/NGFRTc" rel="noreferrer" target="_blank"><i className="fa fa-map"></i> Open in Google Maps</a>
            </SectionThree>
        </Wrapper>
);

export default Footer;
