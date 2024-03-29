import React from "react";
import { useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Card, Title } from "react-native-paper";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import formatTime from "../../utils/formateTime";
import { Entypo } from "@expo/vector-icons";

export default function Session({ navigation, route }) {
  const { getAllActivitySession, activitysessions, getAllActivity } =
    useContext(AuthContext);
  const { activityId, title, subjectId } = route.params;

  useEffect(() => {
    getAllActivitySession({ activityId });
    getAllActivity({ subjectId });
  }, [activityId]);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <Entypo
          name="stopwatch"
          style={styles.newTaskBtn}
          onPress={() =>
            navigation.navigate("ActivityTime", { activityId: activityId })
          }
        />
      ),
    });
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: "#1e407c",
      },
      headerTintColor: "#fff",
    });
  }, [route]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginBottom: 10 }}
        data={activitysessions.activites}
        renderItem={({ item }) => (
          <CustomSessionsCard
            keyExtractor={(item) => item._id}
            activitySession={item}
            activityId={activityId}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}
const CustomSessionsCard = ({ activitySession }) => {
  const timeStudied = formatTime(activitySession.time);

  return (
    <Card
      style={{
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "#3B71F3",
      }}
    >
      <Card.Content style={styles.card}>
        <Text style={styles.texts}>{activitySession.note}</Text>
        <Text style={styles.date}>
          {/* {moment(activitySession.createdAt).fromNow()} */}
        </Text>
        <Title style={styles.timeSpent}>
          {`${timeStudied["hr"]} ${timeStudied["min"]} ${timeStudied["sec"]}`}
        </Title>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6ec",
    flexDirection: "column",
  },
  text: {
    fontSize: 20,
    textAlign: "left",
  },
  timeSpent: {
    fontSize: 14,
    textAlign: "right",
    color: "white",
  },
  card: {
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
  },
  date: {
    fontSize: 15,
    textAlign: "left",
    color: "white",
  },
  texts: {
    fontSize: 14,
    textAlign: "left",
    color: "white",
  },
  newTaskBtn: {
    height: 40,
    width: 40,
    fontSize: 30,
    margin: 10,
    left: 10,
    color: "#ffff",
  },
});
