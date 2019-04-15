import styled from "styled-components";

export default styled.div`
  position: absolute;
  display: ${props => (props.description ? "none" : "block")};
  text-align: left;
  width: 50%;
`;
