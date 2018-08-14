import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Button from 'material-ui/Button';
import { device } from "./device";
import { zIndex } from "material-ui/styles";

const linkStyle = {
    marginRight: 15
};

const Wrapper = styled.div`

@media ${device.mobileS} {
    display: none;
}

@media ${device.laptop} {
    display: flex;
}
`;

const PhoneNumber = styled.a`
    display: flex;
    position: absolute;
    top: 2%;
    z-index: 9999;
    display: flex;
    right: 15%;
    text-decoration: none;
    color: #000;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    p {
        margin: 0;
        font-size: 22px;
    }
`;

const styles = {
    button: { 
        height: '50px', 
        marginLeft: '20px', 
        marginRight: '20px', 
        backgroundColor: '#58c2b4', 
        color: '#fff',
        position: 'absolute',
        top: '2%',
        zIndex: '9999',
        right: '40%'
    }
}

class Menu extends Component {
  constructor() {
      super();
  }

  componentDidMount() {

    window.onscroll = function() {headShrinker()};

    function headShrinker() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            var y = document.getElementById("homeNav");
            y.classList.remove("absolute");
            y.classList.add("sticky");
            var z = document.getElementById("logo");
            z.classList.remove("logo");
            z.classList.add("miniLogo");
            var t = document.getElementById("hidden");
            t.classList.remove("none");
            t.classList.add("flex");
        } else {
            var y = document.getElementById("homeNav");
            y.classList.remove("sticky");
            y.classList.add("absolute");
            var z = document.getElementById("logo");
            z.classList.add("logo");
            z.classList.remove("miniLogo");
            var t = document.getElementById("hidden");
            t.classList.add("none");
            t.classList.remove("flex");
        }
    }
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
                    <a style={linkStyle}>{item.title}</a>
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
                <a style={linkStyle}>{item.title}</a>
            </Link>
        );
    });


    return(
    <Wrapper>
      <Link href="tel:215-946-1046">
        <PhoneNumber><p>Call Now: <span style={{color: '#C4222F'}}>215-946-1046</span></p></PhoneNumber>
      </Link>
      <Link href="#">
        <Button variant="raised" style={styles.button}>Get My Free Evaluation</Button>
      </Link>
      <div id="homeNav" className="mainNav flex absolute">
        <Link prefetch href="/" replace>
            <a><img 
                src="/static/images/logo.png"
                width="150px"
                id="logo"
                className="logo"
            /></a>
        </Link> 
        {menuItems}
        <Link prefetch
            href="/blog" replace>
            <a>Blog</a>
        </Link>
        <Link prefetch href="tel:215-946-1046" replace>
        <a>
        <i id="hidden" className="fa fa-phone thirtyP none"></i>
        </a>
        </Link>
      </div>
      </Wrapper>
    )
  }


}

export default Menu;
