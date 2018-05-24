import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

var Header = (props) => {
    return (
      <View className="Header">
        <Text style={styles.h1}>Game Of Life</Text>
        <Text style={styles.h2}>Generation: {props.generation}</Text>
      </View>
    );
};

export default Header;

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    color: "#FFF"
  },
  h2: {
    fontSize: 30,
    color: "#FFF"
  }
});
