import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const hashtags = [
  { tag: "#adventure", image: "https://picsum.photos/200/200?random=1" },
  { tag: "#roadtrip", image: "https://picsum.photos/200/200?random=2" },
  { tag: "#travel", image: "https://picsum.photos/200/200?random=3" },
  { tag: "#vacation", image: "https://picsum.photos/200/200?random=4" },
  { tag: "#nature", image: "https://picsum.photos/200/200?random=5" },
];

const communities = [
  {
    name: "Places of FRANCE",
    posts: "123posts/day",
    image: "https://picsum.photos/200/200?random=6",
  },
  {
    name: "We live in ITALY",
    posts: "75posts/day",
    image: "https://picsum.photos/200/200?random=7",
  },
  {
    name: "Beautiful Spain",
    posts: "50posts/day",
    image: "https://picsum.photos/200/200?random=8",
  },
];

const nomads = [
  {
    username: "@playparker",
    followers: "5K followers",
    image: "https://picsum.photos/200/200?random=9",
  },
  {
    username: "@mobogan",
    followers: "3K followers",
    image: "https://picsum.photos/200/200?random=10",
  },
  {
    username: "@raysjoh",
    followers: "2K followers",
    image: "https://picsum.photos/200/200?random=11",
  },
];

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
      <Text style={styles.heading}>Discover the world</Text>
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
          <FlatList
            data={hashtags}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text>{item.tag}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top community</Text>
          <FlatList
            data={communities}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text>{item.name}</Text>
                <Text>{item.posts}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top nomads</Text>
          <FlatList
            data={nomads}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <Text>{item.username}</Text>
                <Text>{item.followers}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#EFF2F6'
  },
  heading:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#5A7A7F'
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white'
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
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default SearchScreen;
