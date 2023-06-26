import React from "react";
import { Switch } from "react-native-web";
import { styled } from "nativewind";

const StyledSwitch = styled(Switch);

function SwitchComponent({
  className,
  trackColor,
  thumbColor,
  ios_backgroundColor,
  onValueChange,
  value,
}) {
  return (
    <StyledSwitch
      className={className}
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={ios_backgroundColor}
      onValueChange={onValueChange}
      value={value}
    />
  );
}

export default SwitchComponent;
