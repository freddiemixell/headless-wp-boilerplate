import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';
import styled from 'styled-components';
import { style } from "./style-util";

const AnchorMan = styled.a`
    color: ${style.color.primary};
    text-decoration: none;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    padding: 5%;
    cursor: pointer;
`;

export default class MainMenu extends Component {
    state = {
        menuItems: []
    };

    async componentWillMount() {
        const menuRes = await fetch(
            `${Config.apiUrl}/wp-json/menus/v1/menus/main-nav`
        );
        const menu = await menuRes.json();
        this.setState({
            menuItems: menu.items
        });
    }
  render() {
      const { menuItems } = this.state
    return (
     <nav>
        {menuItems.map(item => {
            return <AnchorMan>{item.title}</AnchorMan>
        })}
     </nav>
    )
  }
}
