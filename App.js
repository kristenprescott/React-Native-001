import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GameZone</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Lorem ipsum yadda yadda bleh...</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F7",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#AA5042",
    padding: 20,
  },
  headerText: {
    fontSize: 42,
    fontWeight: "900",
    color: "#253031",
  },
  body: {
    backgroundColor: "#508991",
    padding: 20,
  },
  bodyText: {
    color: "#253031",
    fontSize: 18,
  },
});
