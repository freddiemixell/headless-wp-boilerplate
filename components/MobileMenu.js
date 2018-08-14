import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { bubble as BurgerMenu } from 'react-burger-menu';
import { style } from "./style-util";

const AnchorMan = styled.a`
    color: ${style.color.primary};
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 5%;
    cursor: pointer;
`;


const MenuWrapper = styled.div`
    display:flex;
    @media ${style.device.tablet} {
        display: none;
    }
`;

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
                    <AnchorMan>{item.title}</AnchorMan>
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
                <AnchorMan>{item.title}</AnchorMan>
            </Link>
        );
    });


    return(
      <MenuWrapper>
        <Link prefetch href="/" remove>
            <a><img
                src="/static/images/logo.png"
                width="300"
            /></a>
        </Link>
        <BurgerMenu isOpen={false} styles={ style.burgerStyles } right>
        <Link prefetch href="/" remove>
            <a><img
                src="/static/images/logo.png"
                style={{width: '100%', borderRadius: '2%', paddingBottom: '10%'}}
            /></a>
        </Link>
        {menuItems}
        <Link prefetch
            href="/blog" remove>
            <AnchorMan>Blog</AnchorMan>
        </Link>
        </BurgerMenu>
        </MenuWrapper>
    )
  }


}

export default MobileMenu;
