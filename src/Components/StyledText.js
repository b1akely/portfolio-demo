import styled from "styled-components";
import { Text } from "rebass";
import { themeGet } from "styled-system";

const StyledText = styled(Text)`
  color: ${themeGet("colors.black.0")};
`;

export default StyledText;
