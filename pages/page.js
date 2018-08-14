import Layout from "../components/Layout";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import MobileMenu from "../components/MobileMenu";
import { Config } from "../config.js";

class Page extends Component {

    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
        );
        const page = await res.json();

        return { page };
    }

    render() {

        const {
            title,
            content,
            acf

        } = this.props.page;

        if (!this.props.page.title){
            return(
                <Error statusCode={404} />
            );
        };

                return (
                    <div>
                        <Menu menu={this.props.headerMenu} />
                        <MobileMenu menu={this.props.headerMenu} />
                        <h1>Page</h1>
                    </div>
                );
            
    }
}

export default PageWrapper(Page);
