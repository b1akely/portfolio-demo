import React from "react";
import Header from "../Components/Header";
import { Flex, Box } from "rebass";
import { PROJECTS } from "../Services/Data";
import ProjectContainer from "../Components/ProjectContainer";
import StyledLink from "../Components/StyledLink";

export default class Home extends React.Component {
  render() {
    return (
      <Box>
        <Box pt={6}>
          <Header>
            <StyledLink to={"/about"}>Your Name</StyledLink>
          </Header>
          <Header>Short description about yourself</Header>
        </Box>
        <Box pt={6}>
          <Flex>{projects}</Flex>
        </Box>
      </Box>
    );
  }
}

const projects = PROJECTS.map((project, i) => (
  <ProjectContainer key={i} project={project} />
));
