import styled from "styled-components";
import { Box } from "rebass";
import { relative } from "path";

export default styled(Box)({
  width: "100%",
  position: relative,
  display: "block",

  "a > img": {
    display: "block",
    width: "100%",
    opacity: "0.8"
  },

  "a > img:hover": {
    width: "100%",
    opacity: ".2"
  },
  "a > h2": {
    opacity: ".9"
  },
  "a:hover > div": {
    display: "block"
  }
});
