import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

import { style } from "./style-util";

const AnchorMan = styled.a`
    margin: 0 10px;
    cursor: pointer;
`;

const MenuWrapper = styled.div`
    display: none;
    @media ${style.device.tablet} {
        display: flex;
    }
`;

class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <Link key={index} prefetch href={item.url} key={item.ID} replace>
                    <AnchorMan>{item.title}</AnchorMan>
                </Link>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "page";
        return (
            <Link
                prefetch
                as={`/${slug}`}
                href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                key={item.ID}
                replace
            >
                <AnchorMan>{item.title}</AnchorMan>
            </Link>
        );
    });


    return(
        <MenuWrapper>
      <div id="homeNav" className="mainNav flex absolute">
        <Link prefetch href="/" replace>
            <a><img 
                src="/static/images/logo.png"
                width="300px"
                id="logo"
                className="logo"
            /></a>
        </Link> 
        {menuItems}
        <Link prefetch
            href="/blog" replace>
            <AnchorMan>Blog</AnchorMan>
        </Link>
      </div>
      </MenuWrapper>
    )
  }


}

export default Menu;
