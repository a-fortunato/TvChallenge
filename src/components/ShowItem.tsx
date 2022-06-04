import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface ItemProps {
  image: number;
  title: string;
  description: string;
  isFocused: boolean;
  setFocused(focused: boolean): void;
  isTextVisible: boolean;
  setTextVisible(textVisible: boolean): void;
}

const ShowItem = ({
  image,
  title,
  description,
  isTextVisible,
  setTextVisible,
  isFocused,
  setFocused,
}: ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableHighlight
        style={[styles.imageContainer, isFocused ? styles.selectedItem : {}]}
        onFocus={() => setFocused(true)}
        onPress={() => {
          setTextVisible(true);
        }}
        onBlur={() => {
          setFocused(false);
          setTextVisible(false);
        }}>
        <Image resizeMode="cover" source={image} style={styles.image} />
      </TouchableHighlight>
      {isTextVisible && (
        <>
          <Text style={[styles.text, styles.title]}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    maxWidth: 300,
  },
  itemContainer: {
    margin: 10,
    marginVertical: 30,
  },
  imageContainer: {
    borderWidth: 5,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  selectedItem: {
    borderColor: 'purple',
  },
});

export default ShowItem;
