import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';

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
            return <a>{item.title}</a>
        })}
     </nav>
    )
  }
}
