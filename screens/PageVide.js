import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PageVide = (props) => {
  return (
    <View style={styles.screen}>
      <Text>PageVide</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PageVide;
