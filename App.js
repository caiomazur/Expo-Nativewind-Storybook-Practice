import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Switch
} from "react-native";

export default function App() {
  const [text, onChangeText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

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

      <Button
        title="Press me"
        onPress={() =>  Alert.alert('Simple Button pressed')}
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
    marginBottom: "5%",
    fontSize: "2.5rem",
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: "10px",
    border: "2px solid #64CCC5",
  },
  input: {
    color: "#DAFFFB",
    border: "2px solid #64CCC5",
    textAlign: "center",
    borderRadius: "5px",
    marginTop: "2.5%",
    fontSize: "1rem",
  },
});
