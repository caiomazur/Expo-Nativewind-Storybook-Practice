import React from "react";
import { Text } from "react-native";
import { styled } from "nativewind";
import classNames from "classnames";

const StyledTitle = styled(Text);

function MainTitle({ title, size }) {
  return (
    <StyledTitle
      className={classNames("text-teal-500 my-6", {
        "text-5xl": size === "large",
        "text-xl": size === "medium",
        "text-sm": size === "small",
      })}
    >
      {title}
    </StyledTitle>
  );
}

export default MainTitle;
