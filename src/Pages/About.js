import React from "react";
import { Flex, Box, Image } from "rebass";
import ImageContainer from "../Components/ImageContainer";
import Header from "../Components/Header";
import StyledLink from "../Components/StyledLink";
import Text from "../Components/StyledText";
import photo from "../Assets/openlabs.jpg";

export default class About extends React.Component {
  render() {
    return <PageLayout />;
  }
}

function PageLayout() {
  return (
    <Flex flexWrap="wrap">
      <Box pt={6}>
        <Header>
          <StyledLink to={"/"}>Your Name</StyledLink>
        </Header>
      </Box>

      <Box pb={4} pt={3} width={1}>
        <ImageContainer>
          <Image src={photo} alt="photo" />
        </ImageContainer>
      </Box>

      <Box width={[1, 1, 1 / 2]}>
        <Header>About me</Header>
      </Box>
      <Box px={2} py={4} width={[1, 1, 1 / 2]}>
        <Text>Include a short bio about yourself here.</Text>
      </Box>

      <Box width={[1, 1, 1 / 2]}>
        <Header>Skills</Header>
      </Box>
      <Box px={2} py={4} width={[1, 1, 1 / 2]}>
        <Text>
          <ul>
            <li>
              <p>This is a skill</p>
            </li>
            <li>
              <p>This is a skill</p>
            </li>
            <li>
              <p>This is a skill</p>
            </li>
            <li>
              <p>This is a skill</p>
            </li>
            <li>
              <p>This is a skill</p>
            </li>
            <li>
              <p>This is a skill</p>
            </li>
          </ul>
        </Text>
      </Box>

      <Box width={[1, 1, 1 / 2]}>
        <Header>More info</Header>
      </Box>
      <Box px={2} py={4} width={[1, 1, 1 / 2]}>
        <Text>
          If you'd like to share more, you can include additional links here.
        </Text>
      </Box>
    </Flex>
  );
}
