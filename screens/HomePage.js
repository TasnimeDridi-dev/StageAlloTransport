import React from "react";
import { View, Text, Button, ImageBackground, StyleSheet } from "react-native";

const HomePage = (props) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/Accueil.png")}
    >
      <View style={styles.screen}>
        <Button
          title="Se connecter"
          onPress={() => {
            props.navigation.navigate({ routeName: "Admin_Client" });
          }}
        />
        <View style={{paddingTop:100}}>
        <Button
          title="Suivre un colis"
          onPress={() => {
            props.navigation.navigate({ routeName: "SuiviColis" });
          }}
        />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:170,
    paddingLeft:60,
    
  },
});

export default HomePage;
