import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const hashtags = ["#adventure", "#roadtrip", "#travel", "#vacation", "#nature"];
const communities = [
  { name: "Places of FRANCE", posts: "123posts/day" },
  { name: "We live in ITALY", posts: "75posts/day" },
  { name: "Beautiful Spain", posts: "50posts/day" },
];
const nomads = [
  { username: "@playparker", followers: "5K followers" },
  { username: "@mobogan", followers: "3K followers" },
  { username: "@raysjoh", followers: "2K followers" },
];

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top search of the day</Text>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={styles.topSearchImage}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending hashtags</Text>
          <ScrollView horizontal>
            {hashtags.map((hashtag, index) => (
              <View key={index} style={styles.item}>
                <Text>{hashtag}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top community</Text>
          <ScrollView horizontal>
            {communities.map((community, index) => (
              <View key={index} style={styles.item}>
                <Text>{community.name}</Text>
                <Text>{community.posts}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top nomads</Text>
          <ScrollView horizontal>
            {nomads.map((nomad, index) => (
              <View key={index} style={styles.item}>
                <Text>{nomad.username}</Text>
                <Text>{nomad.followers}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  topSearchImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    alignItems: "center",
  },
});

export default SearchScreen;
