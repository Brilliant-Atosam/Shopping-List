/* eslint-disable prettier/prettier */
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={30}
          color="red"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    padding: 10,
  },
  listItemView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemText: {
    fontSize: 20,
  },
});
export default ListItem;
