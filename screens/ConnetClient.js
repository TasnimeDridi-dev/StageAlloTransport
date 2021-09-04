import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  onPress,
  paddingTop,
} from "react-native";

const ConnectClient = (props) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/ConnectClient.png")}
    >
      <ScrollView>
        <View style={styles.screen}>
          <View style={{ paddingTop: "39%" }}>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                color: "gray",
              }}
              defaultValue="    Nom utilisateur   "
            />
          </View>
          <View style={{paddingTop:"4%"}}>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
              
                color: "gray",
              }}
              defaultValue="    Mot de passe    "
            />
          </View>
          <View style={{ paddingTop:80 }}>
            <Button
              title="Se connecter"
              onPress={() => {
                props.navigation.navigate({ routeName: "EspaceClient" });
              }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 10 }}>
          <TouchableHighlight onPress={onPress}>
            <View style={styles.buttonpad}>
              <View style={styles.button}>
                <Text>Se connecter avec la reconnaissance faciale</Text>
              </View>
              <TouchableHighlight onPress={onPress}>
            <View style={styles.buttonpad,{paddingTop:10}}>
              <View >
                <Text style={{color:"#fff"}}>Se connecter avec votre compte Facebook</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={onPress}>
            <View style={styles.buttonpad,{paddingTop:10}}>
              <View >
                <Text style={{color:"#fff"}}>Se connecter avec votre compte Google</Text>
              </View>
            </View>
          </TouchableHighlight>
            </View>
          </TouchableHighlight>
        </View>
        
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    paddingTop: 10,
  },
  buttonpad: {
    paddingRight: 70,
    paddingLeft: 130,
    paddingTop:83,
    fontSize:5,
    
  },
});

export default ConnectClient;
