/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChange = (textValue) => setText(textValue);
  return (
    <View style={styles.addItemContainer}>
      <TextInput
        placeholder="Add item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" color="green" size={20} /> Add item
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  addItemContainer: {},
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  btn: {
    backgroundColor: "#DE1F5C",
    padding: 8,
  },
  btnText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
export default AddItem;
