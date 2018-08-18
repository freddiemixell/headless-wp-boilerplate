import React, { Component } from "react";
import NextHead from 'next/head'
import Menu from "./Menu.js";
import MobileMenu from "./MobileMenu";
import { Config } from "../config.js";

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        const {
            title = 'Headless WP Boilerplate',
            description = 'Designed by Freddie Mixell'
        } = this.props

        return (
            <div>
                <NextHead>
                    <meta 
                        name='viewport' 
                        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
                    />
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#243B72"/>
                    <link rel="manifest" href="/static/manifest.json"/>
                    <title>
                        {title}
                    </title>
                    <meta name="description" content={description}/>
                </NextHead>
                <header>
                    <Menu menu={this.props.mainNav}/>
                    <MobileMenu menu={this.props.mainNav} />
                </header>
            </div>
        );
    }
}

export default Header;
