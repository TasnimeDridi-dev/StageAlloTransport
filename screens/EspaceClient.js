import React from "react";
import { View, Text, ImageBackground, Button, StyleSheet } from "react-native";

const EspaceClient = (props) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/EspaceClient.png")}
    >
      <View style={styles.screen}>
        <View style={{paddingTop:90,paddingLeft:60}}>
        <Button
          title="Suivre un colis"
          onPress={() => {
            props.navigation.navigate({ routeName: "SuiviColis" });
          }}
        /></View>
        <View style={{paddingTop:100,paddingLeft:70}}>
        <Button
          title="Mes commandes"
          onPress={() => {
            props.navigation.navigate({ routeName: "ClientCommandes" });
          }}
        /></View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 75,
  },
});

export default EspaceClient;
