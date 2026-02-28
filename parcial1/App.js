import { StatusBar } from 'expo-status-bar';
import React, {use, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import Inicio from './componentes/inicio';
import Perfil from './componentes/perfil';
import Buscar from './componentes/buscar';

export default function App() {

  const [screen, setScreen] = useState("inicio");

  const renderContent = () => {
    switch(screen){
      case "inicio":
        return <Inicio />
      case "perfil":
        return <Perfil />
      case "buscar":
        return <Buscar />
      default:
        return <Inicio />
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        {renderContent()}
      </View>

      <View style={styles.navBar}>

        <TouchableOpacity style={styles.left} onPress={() => setScreen("inicio")}>
          <Text style={[styles.navText, screen == "inicio" && styles.active]}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.center} onPress={() => setScreen("perfil")}>
          <Text style={[styles.navText, screen == "perfil" && styles.active]}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.right} onPress={() => setScreen("buscar")}>
          <Text style={[styles.navText, screen == "buscar" && styles.active]}>Buscar</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: '#ee8eee',
  },
  left:{
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 15,
  },
  right:{
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 15,
  },
  center:{
    flex: 1,
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 16,
  },
  active: {
    color: "yellow",
    fontWeight: "bold",
  },
});
