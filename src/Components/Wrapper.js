import styled from "styled-components";
import { themeGet } from "styled-system";

export default styled.div`
  color: ${themeGet("colors.black.0")};
  font-family: ${themeGet("fonts.sansSerif")};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;
  width: 70%;
  padding-bottom: 15vh;
  -webkit-font-smoothin: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
