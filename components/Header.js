import React, { Component } from "react";
import Link from "next/link";
import NextHead from 'next/head'
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss'
import Intercom, { IntercomAPI } from 'react-intercom';

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        const {
            title = '1SEO Digital & Tech',
            description = 'Digital Marketing Agency & Tech | Philadelphia, Pennsylvania | Bucks County Pennsylvania'
        } = this.props

        return (
            <div>
                <NextHead>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
                <Intercom appID="vmn0i5pf"/>
            </div>
        );
    }
}

export default Header;
