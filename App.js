import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import Loader from "./components/loader";

export default function App() {
  return (
    <View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
