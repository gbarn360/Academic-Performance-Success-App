import React from "react";
import CreateFolder from "../../components/CreateFolder";
import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import CreateMenu from "../../components/CreateMenu";

export default function SubjectPage({ navigation, route }) {
  const { title, subjectId } = route.params;

  useEffect(() => {
    navigation.setOptions({ headerTitle: title });
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: "#1e407c",
      },

      headerTintColor: "#fff",
    });
  }, [title]);

  return (
    <View style={styles.container}>
      <CreateMenu navigation={navigation} subjectId={subjectId} title={title} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subjectContainer: {
    flex: 1,
  },
  head: {
    display: "flex",
    flexDirection: "row",
  },
  header: {
    margin: 10,
    marginLeft: 25,
    fontSize: 50,
    width: 270,
  },
});
