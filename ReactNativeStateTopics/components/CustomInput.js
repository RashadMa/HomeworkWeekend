import React from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Enter product name" />
      <TextInput style={styles.input} placeholder="Enter price" />
      <TextInput style={styles.input} placeholder="Enter category" />
      <Pressable style={styles.button}>
        <Text style={styles.text}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  input: {
    backgroundColor: "#F7F8F9",
    borderColor: "#E8ECF4",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    elevation: 3,
    backgroundColor: "#1E232C",
    borderRadius: 8,
    marginVertical:10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "600",
    color: "white",
  },
});

export default CustomInput;
