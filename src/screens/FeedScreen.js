import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const FeedScreen = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const newImages = [];
    for (let i = 0; i < 10; i++) {
      newImages.push(`https://picsum.photos/${Math.round(width)}/${Math.round(height)}?random=${Math.random()}`);
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
      <Text style={styles.caption}>Caption</Text>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>Icon1</Text>
        <Text style={styles.icon}>Icon2</Text>
        <Text style={styles.icon}>Icon3</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={fetchImages}
      onEndReachedThreshold={0.5}
      pagingEnabled
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width,
    height: height-109,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  topText: {
    position: 'absolute',
    top: 20,
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontSize: 18,
  },
  caption: {
    position: 'absolute',
    bottom: 40,
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontSize: 14,
  },
  iconContainer: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    justifyContent: 'space-between',
    height: 150,
  },
  icon: {
    color: 'white',
    fontSize: 24,
  },
});

export default FeedScreen;
