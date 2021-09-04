import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../screens/HomePage";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import SuiviColis from "../screens/SuiviColis";
import ConnectAdmin from "../screens/ConnectAdmin";
import ConnectClient from "../screens/ConnetClient";
import ClientCommandes from "../screens/ClientCommandes";
import EspaceClient from "../screens/EspaceClient";
import EspaceAdmin from "../screens/EspaceAdmin";

const ScreensNavigation = createStackNavigator({
  Bienvenue: HomePage,
  Admin_Client: Login,
  Créer_Compte: SignUp,
  SuiviColis: SuiviColis,
  ConnectAdmin: ConnectAdmin,
  ConnectClient: ConnectClient,
  ClientCommandes: ClientCommandes,
  EspaceClient: EspaceClient,
  EspaceAdmin: EspaceAdmin,
});

export default createAppContainer(ScreensNavigation);
