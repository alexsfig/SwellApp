import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Home from "./screens/home/";
import Noticias from "./screens/noticias/";
import Categorias from "./screens/categorias/";
import Atletas from "./screens/categorias/atletas";
import Fechas from "./screens/fechas";
import FechaId from "./screens/fechas/fecha";
import Circuito from "./screens/circuitos";
import Perfil from "./screens/categorias/perfil";
import SideBar from "./screens/sidebar";
import Homepage from "./screens/homePage";

const Drawer = DrawerNavigator(
  {
    SideBar: { screen: SideBar },
    Homepage: {screen: Homepage},
    Noticias: { screen: Noticias },
    Categorias: { screen: Categorias },
  },
  {
    initialRouteName: "Homepage",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  },
)
const AppNavigator = StackNavigator(
  {
    Drawer: {
      screen: Drawer
    },
    Home: { screen: Home,  },
    Atletas: { screen: Atletas },
    Fechas: { screen: Fechas },
    FechaId: { screen: FechaId },
    Circuito: { screen: Circuito },
    Perfil: { screen: Perfil },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  });

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
