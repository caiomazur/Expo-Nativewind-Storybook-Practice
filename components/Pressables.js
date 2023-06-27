import React from "react";
import { Pressable, Text } from "react-native";
import { styled } from "nativewind";
import classNames from "classnames";

const MoreInfoPressable = styled(Pressable);
const ClickMePressable = styled(Pressable);

export function StyledMoreInfoPressable({
  onPress,
  className,
  children,
  type,
  size,
}) {
  return (
    <MoreInfoPressable
      className={classNames("rounded-full w-32 my-2 text-center py-3", {
        "bg-cyan-200": type === "primary",
        "bg-teal-200": type === "secondary",
      })}
      onPress={onPress}
    >
      <Text
        className={classNames("text-cyan-900", {
          "text-base": size === "medium",
          "text-xl": size === "large",
        })}
      >
        {children}
      </Text>
    </MoreInfoPressable>
  );
}

export function StyledClickMePressable({
  onPress,
  className,
  children,
  type,
  size,
}) {
  return (
    <ClickMePressable
      className={classNames("rounded-full w-28 my-3 py-3 px-2 text-center", {
        "bg-cyan-300": type === "primary",
        "bg-teal-200": type === "secondary",
      })}
      onPress={onPress}
    >
      <Text
        className={classNames("text-cyan-900", {
          "text-base": size === "medium",
          "text-xl": size === "large",
        })}
      >
        {children}
      </Text>
    </ClickMePressable>
  );
}
