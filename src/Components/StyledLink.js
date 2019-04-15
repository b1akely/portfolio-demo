import styled from "styled-components";
import { themeGet } from "styled-system";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: ${props => (props.original ? "" : themeGet("colors.black.0"))};
  text-decoration: none;
  border-bottom: 0.25em solid ${themeGet("colors.cyan.5")};

  &:hover {
    border-bottom: 0.25em solid ${themeGet("colors.cyan.5")};
  }
`;

export default StyledLink;
