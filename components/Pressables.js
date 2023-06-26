import React from "react";
import { Pressable, Text } from "react-native";
import { styled } from "nativewind";

const MoreInfoPressable = styled(Pressable);
const ClickMePressable = styled(Pressable);

export function StyledMoreInfoPressable({ onPress, className, children }) {
  return (
    <MoreInfoPressable className={className} onPress={onPress}>
      <Text>{children}</Text>
    </MoreInfoPressable>
  );
}

export function StyledClickMePressable({ onPress, className, children }) {
  return (
    <ClickMePressable className={className} onPress={onPress}>
      <Text>{children}</Text>
    </ClickMePressable>
  );
}
