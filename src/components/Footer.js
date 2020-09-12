import React, { Component } from "react";
// import Title from "./Title";

class Footer extends Component {
  render() {
    return (
        <div className="container">
          <p className="grey mt-4">
            &copy; 2020{" "}
            <a className="white" href="https://lollykrown.xyz">
              Ol&#250;wak&#225;y&#242;d&#233;.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
    );
  }
}

export default Footer;
