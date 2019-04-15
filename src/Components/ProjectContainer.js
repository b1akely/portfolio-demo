import React from "react";
import { Box, Image } from "rebass";
import openlabs from "../Assets/openlabs.jpg";
import ImageContainer from "../Components/ImageContainer";
import Overlay from "../Components/Overlay";
import Header from "./Header";
import Text from "./StyledText";
import StyledLink from "./StyledLink";

export default class ProjectContainer extends React.Component {
  render() {
    return (
      <ImageContainer py={[3, 4]} mb={3} width={1} fontSize={[1, 2, 3]}>
        <StyledLink to={{ pathname: this.props.project.id }}>
          <Overlay>
            <Box pl={[1, 4]} pt={[0, 3]}>
              <Header ml={2} fontSize={[1, 2, 3]}>
                {this.props.project.title}
              </Header>
            </Box>
          </Overlay>

          <Overlay description>
            <Box pl={[1, 4]} pt={[0, 3]}>
              <Header fontSize={[1, 2, 3]}>{this.props.project.title}</Header>
              <Text fontSize={[1, 2, 3]} fontWeight={3}>
                {this.props.project.short}
              </Text>
            </Box>
          </Overlay>
          <Image src={openlabs} alt="" title={this.props.project.title} />
        </StyledLink>
      </ImageContainer>
    );
  }
}
