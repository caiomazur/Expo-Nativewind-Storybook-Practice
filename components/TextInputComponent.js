import React from "react";
import { TextInput, View } from "react-native";
import { styled } from "nativewind";
import classNames from "classnames";

const StyledTextInput = styled(TextInput);
const StyledView = styled(View);

function TextInputComponent({
  onChangeText,
  value,
  placeholder,
  className,
  state,
}) {
  // State for the input text
  return (
    //Install classnames library for duplicate utility tailwind classes!
    // 1st argument: Shared utility classes. 2nd Argument is and object with unique utility classes as keys, and a boolean, a comparisson
    <StyledView className={"w-48"}>
      <StyledTextInput
        className={classNames(
          "text-xl my-4 text-center border-solid border-2 rounded-lg",
          {
            "text-teal-500 border-teal-400": state === "default",
            "text-red-500 border-red-400": state === "error",
            "text-green-500 border-green-100": state === "success",
          }
        )}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </StyledView>
  );
}

export default TextInputComponent;
