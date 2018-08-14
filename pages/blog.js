import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";


class Blog extends Component {

    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
        );
        const post = await res.json();

        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();

        return { post, posts };
    }

    render() {

        const posts = this.props.posts.map((post, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/blog/${post.slug}`}
                            href={`/blog?slug=${post.slug}&apiRoute=post`}
                        >
                        <a className="linkFix"><h2>{post.title.rendered}</h2></a></Link>
                        <div>{post.featured_media}</div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered
                        }}
                />
                    </li>
                </ul>
            );
            });

        if (!this.props.post.title){
                    return (
                        <Layout>
                            <Wrapper>
                                <Menu menu={this.props.headerMenu} />
                                <MobileMenu menu={this.props.headerMenu} />
                                <div className="padTop white">
                                    <div className=" flex wrapper oneSeoGradient">
                                        <div className="flex flexThree column">
                                            <h1>Posts</h1>
                                            <ul>{posts}</ul>
                                        </div>
                                        <div className="flex flexOne column sidePadTop">
                                            <iframe src="https://go.1seo.com/l/367991/2018-07-20/3mpw8" frameborder="0"></iframe>
                                        </div>
                                    </div>
                                </div>
                                <PageInsight></PageInsight>
                            </Wrapper>
                        </Layout>
                    )
                }   else {
                        return (
                            <Layout>
                                <Menu menu={this.props.headerMenu} />
                                <MobileMenu menu={this.props.headerMenu} />
                                <div className="padTop white">
                                        <div className=" flex wrapper oneSeoGradient">
                                            <div className="flex flexThree column">
                                <h1>{this.props.post.title.rendered}</h1>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: this.props.post.content.rendered
                                    }}
                                />
                                </div>
                                            <div className="flex flexOne column sidePadTop">
                                                <iframe src="https://go.1seo.com/l/367991/2018-07-20/3mpw8" frameborder="0"></iframe>
                                            </div>
                                        </div>
                                    </div>
                            </Layout>
                        );
                    }
    } //render
} //class

export default PageWrapper(Blog);
