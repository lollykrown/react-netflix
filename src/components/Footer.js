import React, { Component } from "react";
import Title from "./Title";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
            <div className="row my-4 pt-4">
              <div className="col-md-6">
              <Title name="Ol&#250;wak&#225;y&#242;d&#233; – Nigerian Mall" title="" />
                <p className="grey"> 
                  The digital marketing agency for the future. Aiming to provide
                  a permanent solution to businesses all around the world.
                </p>
              </div>
              <div className="col-md-2 col-sm-6">
                <h5>Company</h5>
                <ul className="links">
                  <li>
                    <a href="https://lollykrown.xyz">Blog</a>
                  </li>
                  <li>
                    <a href="https://lollykrown.xyz">About us</a>
                  </li>
                  <li>
                    <a href="https://lollykrown.xyz">Contact Us</a>
                  </li>
                  <li>
                    <a href="https://lollykrown.xyz">Services</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-6">
                <h5>Legal</h5>
                <ul className="links">
                  <li>
                    <a href="https://lollykrown.xyz">Terms</a>
                  </li>
                  <li>
                    <a href="https://lollykrown.xyz">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-6">
                <h5>Follow Us</h5>
                <ul className="links">
                  <li>
                    <a href="https://lollykrown.xyz">Facebook</a>
                  </li>
                  <li>
                    <a href="https://lollykrown.xyz">Instagram</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/lollykrown">Twitter</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/linkedin">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

          <p className="grey mt-4">
            &copy; 2020{" "}
            <a className="white" href="https://lollykrown.xyz">
              Ol&#250;wak&#225;y&#242;d&#233;.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
