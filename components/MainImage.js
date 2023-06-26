import React from "react";
import { Image } from "react-native";
import { styled } from "nativewind";

const StyledImage = styled(Image);

function MainImage({ source, className }) {
  return <StyledImage className={className} source={source} />;
}

export default MainImage;
