import React, { useEffect } from "react";
import { Title, Card, Paragraph } from "react-native-paper";
import { SafeAreaView, ScrollView, StyleSheet, Linking, Text, View} from "react-native";
import contactInfo from "./contactInfo.json"
export default function Resources({ navigation, route }) {
  useEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({ title: "Resources", headerRight: null });
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      {
        contactInfo.map( record => {
          return(
            <Card style={styles.card}>
            <Card.Content style={styles.cardContainer}>
              <Title style={styles.title}>{record.title}</Title>
              <Paragraph
                onPress={() =>
                  Linking.openURL("https://sites.psu.edu/starfishinfo/")
                }
                target="_blank"
                style={styles.paragraph}
              >
             <Text style={styles.underline}>{record.titleInfo}</Text>
              </Paragraph>
              <Paragraph
                onPress={() =>
                  Linking.openURL(
                    "https://psu.starfishsolutions.com/starfish-ops/instructor/index.html?tenantId=9045"
                  )
                }
                target="_blank"
                style={styles.paragraph}
              >
               <Text style={styles.underline}>{record.login}</Text> 
              </Paragraph>
              <Paragraph
                onPress={() =>
                  Linking.openURL(
                    "https://sites.psu.edu/starfishinfo/resources/faq/"
                  )
                }
                target="_blank"
                style={styles.paragraph}
              >
                 <Text style={styles.underline}>FAQ's about Penn State Starfish</Text> 
              </Paragraph>
            </Card.Content>
          </Card>
          )
        })
      }
     
      
    </ScrollView>
  </SafeAreaView>


    
            
  );
            
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdf6ec",
    flex: 1,
    marginTop: 5,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: "#3B71F3",
    marginVertical: 5,
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 5,
  },
  title: {
    color: "#fff",
    
  },
  paragraph: {
    color: "#fff",
    fontSize: 16,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
