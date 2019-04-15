import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Wrapper from "./Components/Wrapper";

const App = props => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Routes {...props} />
    </Wrapper>
  </ThemeProvider>
);

export default App;
