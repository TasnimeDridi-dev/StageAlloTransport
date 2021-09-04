import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SuiviColis = (props) => {
  return (
    <View style={styles.screen}>
      <Text>SuiviColis</Text>
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

export default SuiviColis;
