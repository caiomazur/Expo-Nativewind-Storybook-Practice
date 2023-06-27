import React from "react";
import { Image } from "react-native";
import { styled } from "nativewind";
import classNames from "classnames";

const StyledImage = styled(Image);

function MainImage({ shape }) {
  return (
    <StyledImage
      className={classNames("w-64 h-64 border-teal-400 border-2 my-5", {
        "rounded-xl": shape === "circle",
      })}
      source={{
        uri: "https://p.turbosquid.com/ts-thumb/Cp/5GPmGI/BYJcG9i2/trilobite_thumbnail/jpg/1597330246/600x600/fit_q87/86c48f0a43b6511d683c9ea549228131aceca1e0/trilobite_thumbnail.jpg",
      }}
    />
  );
}

export default MainImage;
