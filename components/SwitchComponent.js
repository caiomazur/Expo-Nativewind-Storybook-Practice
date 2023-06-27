import React from "react";
import { Switch, View, Text } from "react-native-web";
import { styled } from "nativewind";
import classNames from "classnames";

const StyledSwitch = styled(Switch);
const StyledView = styled(View);
const StyledText = styled(Text);

function SwitchComponent({ isEnabled, onValueChange, label }) {
  return (
    <StyledView>
      <StyledText>{label}</StyledText>
      <StyledSwitch
        className="my-4"
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onChange={onValueChange}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        value={isEnabled}
      />
    </StyledView>
  );
}

export default SwitchComponent;
