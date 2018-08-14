import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { bubble as BurgerMenu } from 'react-burger-menu';
import { style } from "./style-util";

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
                <a>{item.title}</a>
            </Link>
        );
    });


    return(
      <MenuWrapper>
        <BurgerMenu isOpen={false} styles={ style.burgerStyles }>
        <Link prefetch href="/" remove>
            <a><img
                src="/static/images/logo.png"
                width="100"
            /></a>
        </Link>
        {menuItems}
        <Link prefetch
            href="/blog" remove>
            <a>Blog</a>
        </Link>
        </BurgerMenu>
        <Link prefetch href="/" remove>
            <a><img
                src="/static/images/logo.png"
                width="150"
            /></a>
        </Link>
        </MenuWrapper>
    )
  }


}

export default MobileMenu;
