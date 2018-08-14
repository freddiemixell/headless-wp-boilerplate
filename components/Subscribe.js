import React from 'react';
import Head from 'next/head';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import NProgress from 'nprogress';
import { subscribeToNewsletter } from '../lib/api/public';
import styled from "styled-components";
import { colors } from "./colors";

const Wrapper = styled.div`
  display: flex;
  width: 200px;
`;

const Text = styled.p`
  ${colors.blueColor};
  line-height: 5px;
  margin: 50px 0 0 0;
`;

const classes = {
  margin: { margin: '8px' },
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'red',
    },
  }
};


class Subscribe extends React.Component {
  onSubmit = async (e) => {
    e.preventDefault();

    const email = (this.emailInput && this.emailInput.value) || null;

    if (this.emailInput && !email) {
          return;
        }

    NProgress.start();

    try {
      await subscribeToNewsletter({ email });

    if (this.emailInput) {
        this.emailInput.value = '';
      }
      
      NProgress.done();
      console.log('email was successfully added to Mailchimp list');
    } catch (err) {
      console.log(err); //eslint-disable-line
      NProgress.done();
  }
};

render() {
    return (

      <Wrapper>
        <form onSubmit={this.onSubmit}>
        <Text>Free SEO Evaluation</Text>
          <TextField
            inputRef={(elm) => {
              this.emailInput = elm;
            }}
            classname={classes.cssUnderline}
            label="Email"
            type="email"
            required
          />
          <p />
          <Button variant="raised" color="primary" type="submit">
          Subscribe
          </Button>
          </form>
      </Wrapper>

    );
  }
}

export default Subscribe;