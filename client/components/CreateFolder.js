import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function CreateFolder({ navigation, location }) {
  return (
    <TouchableOpacity>
      <View style={styles.btnContainer}>
        <AntDesign
          name="addfolder"
          color="#ffff"
          size={30}
          onPress={() => navigation.navigate(location)}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    fontSize: 90,
    borderRadius: 25,
    width: 45,
    marginBottom: 5,
    height: 45,
    shadowRadius: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  btnContainer: {
    marginRight: 10,
  },
});
