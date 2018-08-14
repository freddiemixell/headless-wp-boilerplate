import React from 'react';
import Head from 'next/head';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import NProgress from 'nprogress';
import { subscribeToNewsletter } from '../lib/api/public';


class PageInsight extends React.Component {
  onSubmit = async (e) => {
    e.preventDefault();
    console.log(this.siteInput.value);
    const email = (this.emailInput && this.emailInput.value) || null;

    const res = await fetch(
        `https://www.googleapis.com/pagespeedonline/v4/runPagespeed?key=AIzaSyDJNrdDHcPCGwmb4_JpJCoLFsqd5c92_LQ&url=${this.siteInput.value}`
    );
    const resData = await res.json();

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

  console.log(resData.captchaResult);

  return { resData }
};

render() {
    return (

      <div style={{ padding: '10px 45px' }}>
        <br />
        <form onSubmit={this.onSubmit}>
          <p>Get an official 1SEO audit instantly!</p>
          <TextField
            inputRef={(elm) => {
              this.siteInput = elm;
            }}
            type="url"
            label="Your site"
            className="white"
            required
          />
          <p />
          <br/>
          <TextField
            inputRef={(elm) => {
              this.emailInput = elm;
            }}
            type="email"
            label="Your email"
            className="white"
            required
          />
          <p />
          <Button variant="raised" color="primary" type="submit">
            Submit
          </Button>
        </form>
        <div>{}</div>
      </div>

    );
  }
}

export default PageInsight;