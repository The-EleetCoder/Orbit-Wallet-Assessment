import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const FeedScreen = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const newImages = [];
    for (let i = 0; i < 10; i++) {
      newImages.push(
        `https://picsum.photos/${Math.round(width)}/${Math.round(
          height
        )}?random=${Math.random()}`
      );
    }
    setImages([...images, ...newImages]);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} />
      <Text style={styles.topText}>For you</Text>
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>Caption</Text>
        <Text style={styles.caption}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign style={styles.icon} name="like1" />
        <FontAwesome style={styles.icon} name="share" />
        <FontAwesome style={styles.icon} name="comment" />
        <AntDesign style={styles.icon} name="download" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(index) => index.toString()}
        onEndReached={fetchImages}
        pagingEnabled
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width,
    height: height-53,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "99.5%",
    position: "absolute",
  },
  topText: {
    position: "absolute",
    top: 20,
    textAlign: "center",
    width: "100%",
    color: "white",
    fontSize: 18,
  },
  captionContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 10,
  },
  caption: {
    fontSize: 13,
    color: "#d6d6d6b5",
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    bottom: 80,
    justifyContent: "space-between",
    height: 200,
  },
  icon: {
    color: "white",
    fontSize: 30,
  },
});

export default FeedScreen;
