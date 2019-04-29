import React from 'react';
import { Button, View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import loginScreen from "./src/login"
import authScreen from "./src/auth"
import homeScreen from "./src/home"
import profilScreen from "./src/profil"
import aboutScreen from "./src/about"
import listpengaduanScreen from "./src/listpengaduan"
import detailScreen from "./src/detailpengaduan"
import tambahpengaduanScreen from "./src/tambahpengaduan"
import editpengaduanScreen from "./src/editpengaduan"

const RootStack = createStackNavigator(
    {
        Login: loginScreen,
        Auth: authScreen,
        Home: homeScreen,
        Profil: profilScreen,
        About: aboutScreen,
        Listpengaduan: listpengaduanScreen,
        Detail: detailScreen,
        Tambah: tambahpengaduanScreen,
        Edit: editpengaduanScreen,
    },
    {
        initialRouteName: 'Auth',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


