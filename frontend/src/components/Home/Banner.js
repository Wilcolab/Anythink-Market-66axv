import React from "react";
import logo from "../../imgs/logo.png";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const ThemeDiv = styled.div`
background-color: ${p => p.theme.dark};
`
const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeDiv>
        <div className="banner text-white">
          <div className="container p-4 text-center">
            <img src={logo} alt="banner" />
            <div>
              <span>A place to </span>
              <span id="get-part">get</span>
              <span> the cool stuff.</span>
            </div>
          </div>
        </div>
      </ThemeDiv>
    </ThemeProvider>
  );
};

export default Banner;
