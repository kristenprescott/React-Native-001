import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function Game() {
  const grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [move, setMove] = useState("");

  const handleSquare = () => {
    console.log("moves");
  };
  const handleRestart = () => {
    console.log("restart");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Tic-Tac-Toe</Text>
        </View>

        <View style={styles.board}>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <TouchableOpacity onPress={handleSquare}>
              <Text>{move}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text onPress={handleRestart} style={styles.buttonText}>
              Restart
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.turn}>
          <Text style={styles.turnText}>Turn: {() => {}}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 50,
    // backgroundColor: "pink",
  },
  headerText: {
    fontSize: 42,
    padding: 10,
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
    padding: 5,
    borderRadius: 4,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#9E3C27",
    borderColor: "#942911",
    borderWidth: 5,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginTop: 20,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  board: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 350,
    textAlign: "center",
    backgroundColor: "gainsboro",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 1,
    padding: 18,
  },
  square: {
    width: 100,
    height: 100,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 1,
    margin: 2,
    backgroundColor: "white",
  },
  turn: {
    marginTop: 20,
  },
  turnText: {
    fontSize: 26,
  },
});
