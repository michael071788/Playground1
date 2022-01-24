import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  return (
    <>
      <Navigation />
    </>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app! - Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
