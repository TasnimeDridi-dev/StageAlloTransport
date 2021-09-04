import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, TouchableHighlight } from "react-native";

const Login = (props) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/Ident.png")}
    >
      
      <View style={styles.screen}>
        <View style={{paddingTop:150}}>
        <Button
          title="Client"
          onPress={() => {
            props.navigation.navigate({ routeName: "ConnectClient" });
          }}
        />
        </View>
        <View style={{paddingTop:90}}>
        <Button
          title="Admin"
          onPress={() => {
            props.navigation.navigate({ routeName: "ConnectAdmin" });
          }}
        />
        </View>
        <TouchableHighlight  onPress={() => {
            props.navigation.navigate({ routeName: "Créer_Compte" });
          }}>
            <View style={styles.buttonpad,{paddingTop:10}}>
              <View >
                <Text style={{color:"#00f"},{paddingLeft:150, paddingBottom:1}}>S'identifier</Text>
              </View>
            </View>
          </TouchableHighlight>
          </View>
          </ImageBackground>
       
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft:20,
    paddingTop:110,
  },
});

export default Login;
