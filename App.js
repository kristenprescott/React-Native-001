import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

export default function App() {
  const [name, setName] = useState("KP");
  const [person, setPerson] = useState({ name: "KP", age: 31 });
  const [text, setText] = useState("What's your name?");

  const handleButtonPress = () => {
    console.log("clicky clicky");

    setPerson({ name: "KristenP", age: 32 });
  };

  const onChangeText = () => {
    console.log("text input handled.");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>GameZone</Text>
      </View> */}
      {/* <View style={styles.body}>
        <Text style={styles.bodyText}>My name is {name}</Text>
        <Text style={styles.bodyText}>
          Name: {person.name} Age: {person.age}
        </Text>
      </View> */}

      <View style={styles.textInputContainer}>
        <View style={styles.textContainer}>
          <Text>Name: </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleButtonPress} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
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
  buttonContainer: {
    marginTop: 20,
    padding: 5,
    borderRadius: 4,
  },
  textInputContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    margin: 10,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#9CA3AB",
    padding: 5,
    backgroundColor: "#F3F4F7",
    width: 200,
    height: 35,
    borderWidth: 2,
    borderColor: "gainsboro",
    borderRadius: 4,
  },
});
