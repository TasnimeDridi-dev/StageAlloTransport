import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";

const SignUp = (props) => {
  return (
    <ImageBackground
      
      source={require("../assets/inscrireClient0.png")}
    >
      <View style={styles.screen}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,

            color: "gray",
            
          }}
          defaultValue="    Nom utilisateur    "
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,

            color: "gray",
          }}
          defaultValue="    Email    "
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,

            color: "gray",
          }}
          defaultValue="    Mot de passe    "
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,

            color: "gray",
          }}
          defaultValue="    Comfirmer votre mot de passe    "
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,

            color: "gray",
          }}
          defaultValue="    Numéro téléphone    "
        />
        
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              color: "gray",
              
            }}
            defaultValue="    Ville & code postal   "
          />
         <View style={{paddingTop:90}}>
        <Button
          title="Admin"
          onPress={() => {
            props.navigation.navigate({ routeName: "ConnectAdmin" });
          }}
        />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    
    justifyContent: "center",
  },
});

export default SignUp;
