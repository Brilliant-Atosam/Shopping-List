import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Shopping List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "blue",
  },
  headerText: {
    fontSize: 22,
    color: "white",
  },
});
export default Header;
