import { StatusBar } from "expo-status-bar";
import { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Switch,
  Linking,
} from "react-native";

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
    <View style={styles.buttonContainer}>
      <Button title={children} onPress={handlePress} />
    </View>
  );
};

export default function App() {
  // State for the input text
  const [text, onChangeText] = useState("");
  // State for the switch value
  const [isEnabled, setIsEnabled] = useState(false);

  // Callback function for toggling the switch
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Welcome to Trilobite app!</Text>

      <Image
        style={styles.mainImage}
        source={{
          uri: "https://p.turbosquid.com/ts-thumb/Cp/5GPmGI/BYJcG9i2/trilobite_thumbnail/jpg/1597330246/600x600/fit_q87/86c48f0a43b6511d683c9ea549228131aceca1e0/trilobite_thumbnail.jpg",
        }}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name your Trilobite:"
      />

      {/* Button component for opening the Trilobite Wikipedia page */}
      <OpenURLButton url={trilobiteURL}>More about Trilobites</OpenURLButton>

      <View style={styles.buttonContainer}>
        <Button
          title="Press me"
          onPress={() => Alert.alert("This Alert works on mobile")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Press me"
          onPress={() => alert("This alert works on web")}
        />
      </View>

      <Switch
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001C30",
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {
    color: "#DAFFFB",
    marginBottom: 25,
    fontSize: 40,
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#64CCC5",
    margin: 15,
  },
  input: {
    color: "#DAFFFB",
    borderWidth: 2,
    borderColor: "#64CCC5",
    textAlign: "center",
    borderRadius: 5,
    margin: 10,
    fontSize: 16,
  },
  buttonContainer: {
    margin: 10,
    width: 100,
  },
});
