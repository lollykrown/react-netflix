import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FooterWrapper className="container footer ml-5">
          <p className="mt-4 white">
            &copy; 2020{" "}
            <a className="" href="https://lollykrown.xyz">
              Ol&#250;wak&#225;y&#242;d&#233;.
            </a>{" "}
            All rights reserved.
          </p>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
`;

export default Footer;
