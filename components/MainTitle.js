import React from "react";
import { Text } from "react-native";
import { styled } from "nativewind";

const StyledTitle = styled(Text);

function MainTitle({ title, className }) {
  return <StyledTitle className={className}>{title}</StyledTitle>;
}

export default MainTitle;
