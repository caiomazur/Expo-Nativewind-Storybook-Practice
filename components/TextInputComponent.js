import React from "react";
import { TextInput } from "react-native";
import { styled } from "nativewind";

const StyledTextInput = styled(TextInput);

function TextInputComponent({ onChangeText, value, placeholder, className }) {
  // State for the input text
  return (
    <StyledTextInput
      className={className}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default TextInputComponent;
