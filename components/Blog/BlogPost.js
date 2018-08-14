import React, { Component } from "react";
import styled from 'styled-components';
import { device } from '../device';

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    
    @media ${device.laptop} {
        padding: 0 30px 0 30px;
    }
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

class BlogPage extends Component {

    render () {

       return ( 
        <Wrapper>
            <Body>
                <div
                    dangerouslySetInnerHTML={{
                        __html: this.props.post
                    }}
                />
            </Body>
            <Sidebar>
                <iframe src="https://go.1seo.com/l/367991/2018-07-20/3mpw8" frameBorder="0"></iframe>
                <input placeholder="Search Posts" />
                <button>Search</button>
                <select>
                    <option>Uncategorized</option>
                    <option>SEO</option>
                    <option>Web Development</option>
                </select>
                <button>Sort</button>
            </Sidebar>
        </Wrapper>
    )
}
}

export default BlogPage;