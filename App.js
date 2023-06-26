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
    <StyledMoreInfoPressable
      className="rounded-full w-32 my-2 bg-white text-center py-3"
      onPress={handlePress}
    >
      <Text className="text-cyan-900 text-base">More Info:</Text>
    </StyledMoreInfoPressable>
  );
};

export function App() {
  // State for the switch value
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, onChangeText] = useState("");

  // Callback function for toggling the switch
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className="flex-1 items-center justify-center bg-cyan-900">
      <MainTitle
        className="text-5xl text-teal-100 my-6"
        title="Welcome to Trilobite app!"
      />

      <MainImage
        className="w-64 h-64 rounded-lg border-teal-400 border-2 shadow-teal-500 shadow-2xl my-5"
        source={{
          uri: "https://p.turbosquid.com/ts-thumb/Cp/5GPmGI/BYJcG9i2/trilobite_thumbnail/jpg/1597330246/600x600/fit_q87/86c48f0a43b6511d683c9ea549228131aceca1e0/trilobite_thumbnail.jpg",
        }}
      />

      <TextInputComponent
        className="text-xl text-teal-100 my-4 text-center border-solid border-2 border-teal-400 rounded-lg"
        onChangeText={onChangeText}
        value={text}
        placeholder="Name your Trilobite:"
      />

      <OpenURLButton url={trilobiteURL}></OpenURLButton>

      <StyledClickMePressable
        className="rounded-full w-28 my-3 py-2 bg-cyan-100 text-center"
        title="Press me"
        onPress={() => Alert.alert("This Alert works on mobile")}
      >
        <Text className="text-cyan-900 text-base">Click Me!</Text>
      </StyledClickMePressable>

      <StyledClickMePressable
        className="rounded-full w-28 my-3  py-2 bg-cyan-100 text-center"
        title="Press me"
        onPress={() => alert("This alert works on web")}
      >
        <Text className="text-cyan-900 text-base">Click Me!</Text>
      </StyledClickMePressable>

      <SwitchComponent
        className="my-4"
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <StatusBar style="auto" />
    </View>
  );
}

//export {default} from './.storybook';
