import React from "react";
import { Flex, Box, Image } from "rebass";
import { PROJECTS } from "../Services/Data";
import Header from "../Components/Header";
import Text from "../Components/StyledText";
import ImageContainer from "../Components/ImageContainer";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.project = PROJECTS.filter(p => p.id === this.props.match.params.id);
  }

  render() {
    return (
      <Box pt={5}>
        <Flex flexWrap="wrap" mx="auto">
          <Box pb={4}>
            <Header>{this.project[0].title}</Header>
          </Box>

          <ImageContainer pb={4} width={1}>
            <Image src={this.project[0].headerImage} alt="headerimage" />
          </ImageContainer>

          <Box width={1}>
            <Header>The Problem</Header>
            <Text>{this.project[0].problem}</Text>
          </Box>
          <Box width={1} pt={3}>
            <Header>The Solution</Header>
            <Text>{this.project[0].solution}</Text>
          </Box>
        </Flex>
      </Box>
    );
  }
}
