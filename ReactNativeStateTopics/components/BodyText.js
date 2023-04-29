import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BodyText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>Product List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyText: {
    fontWeight: "600",
    fontSize: 30,
    color: "#1E232C",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default BodyText;
