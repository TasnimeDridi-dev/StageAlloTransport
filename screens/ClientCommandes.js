import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ClientCommandes = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Mes commandes</Text>
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

export default ClientCommandes;
