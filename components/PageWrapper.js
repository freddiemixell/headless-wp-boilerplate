import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp => (
  class extends React.Component {
    static async getInitialProps(args) {
      const mainNavRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/main-nav`
      );
      const mainNav = await mainNavRes.json();
      return {
        mainNav,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      return (
        <Comp {...this.props} />

      )
    }
  }
)

export default PageWrapper;
