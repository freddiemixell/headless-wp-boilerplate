import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import styled from "styled-components";
import { device } from "./device";
import { colors } from "./colors";
import { bubble as BurgerMenu } from 'react-burger-menu';
import { PhoneInTalk } from 'styled-icons/material/PhoneInTalk.cjs';
import Subscribe from "./Subscribe.js";

const linkStyle = {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    color: '#C4222F',
    fontWeight: '500',
    justifyContent: 'left',
    fontSize: '20px',
    borderBottom: '1px solid #333',
    padding: '10px'
};

const logoStyle = { 
    position: 'absolute',
    zIndex: '1000',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '2% 0 0 0',
    left: '0',
    right: '0'
};

const PhoneWrap = styled.span`
    position: absolute;
    z-index: 1000;
    right: 36px;
    top: 30px;
    font-size: 22px;
    align-items: center;
    ${colors.redColor};
    padding: 0!important;
    margin: 0!important;
`;

const Wrapper = styled.div`

@media ${device.laptop} {
    display: none;
}
`;

var styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#C4222F'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
      right: '34px'
    },
    bmCross: {
      background: '#243B72',
      height: '34px'
    },
    bmMenu: {
      background: '#fff',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      width: '100%',
      overflow: 'visible'
    },
    bmMorphShape: {
      fill: '#fff'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'column'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

class MobileMenu extends Component {

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link prefetch href={item.url} key={item.ID} remove>
                    <a style={linkStyle}>{item.title}</a>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "page";
        return (
            <Link prefetch
                as={`/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID} 
                remove
            >
                <a style={linkStyle}>{item.title}</a>
            </Link>
        );
    });


    return(
      <Wrapper>
        <BurgerMenu isOpen={false} styles={ styles }>
        <Link prefetch href="/" remove>
            <a><img
                src="/static/images/logo.png"
                width="100"
            /></a>
        </Link>
        {menuItems}
        <Link prefetch
            href="/blog" remove>
            <a style={linkStyle}>Blog</a>
        </Link>
        <Subscribe></Subscribe>
        </BurgerMenu>
        <Link prefetch href="/" remove>
            <a><img
                src="/static/images/logo.png"
                width="150"
                style={logoStyle}
            /></a>
        </Link>
        <a href="tel:2159461046">
            <PhoneWrap>
                <PhoneInTalk size="50" /> 
            </PhoneWrap>
        </a>
      </Wrapper>
    )
  }


}

export default MobileMenu;
