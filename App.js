import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import { Text, View, Alert, Linking } from "react-native";

import MainTitle from "./components/MainTitle";
import MainImage from "./components/MainImage";
import TextInputComponent from "./components/TextInputComponent";
import {
  StyledMoreInfoPressable,
  StyledClickMePressable,
} from "./components/Pressables";
import SwitchComponent from "./components/SwitchComponent";

import Constants from "expo-constants";

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

// Storybook Configuration:
// Default to rendering your app
let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;

// URL for the Trilobite Wikipedia page
const trilobiteURL = "https://en.wikipedia.org/wiki/Trilobite";

// Custom component for opening a URL in a button press
const OpenURLButton = ({ url, children }) => {
  // Callback function for handling the button press
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL schemes.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app. If the URL scheme is "http", the web link should be opened
      // by some browser on the mobile.
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <StyledMoreInfoPressable type="primary" size="medium" onPress={handlePress}>
      <Text>More Info:</Text>
    </StyledMoreInfoPressable>
  );
};

export function App() {
  // State for the switch value
  const [isEnabled, setIsEnabled] = useState(true);
  const [text, onChangeText] = useState("");

  // Callback function for toggling the switch
  const toggleSwitch = () => {
    console.log("toggleSwitch!!!!");
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View className="flex-1 items-center justify-center bg-cyan-900">
      <MainTitle title="Welcome to Trilobite app!" size="large" />

      <MainImage shape="circle" />

      <TextInputComponent
        onChangeText={onChangeText}
        value={text}
        placeholder="Name your Trilobite:"
        state="default"
      />

      <OpenURLButton url={trilobiteURL}></OpenURLButton>

      <StyledClickMePressable
        type="primary"
        onPress={() => Alert.alert("This Alert works on mobile")}
      >
        <Text>Click Me!</Text>
      </StyledClickMePressable>

      <StyledClickMePressable
        type="secondary"
        onPress={() => alert("This alert works on web")}
      >
        <Text className="text-cyan-900 text-base">Click Me!</Text>
      </StyledClickMePressable>

      <SwitchComponent
        isEnabled={isEnabled}
        onValueChange={toggleSwitch}
        label="Turn Trilobite On/Off:"
      />

      <StatusBar style="auto" />
    </View>
  );
}

//export {default} from './.storybook';
