import React, { Component } from "react";
import { Image, ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";
import Container2 from '../../components/Container';
import Button2 from '../../components/Button';

const launchscreenBg = require("../../assets/background/launchscreen-bg.png");
const launchscreenLogo = require("../../assets/background/logo.png");

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo}>
            </ImageBackground>
          </View>
          <Container>
            <Button2 
              styles={{button: styles.orangeButton}}
              title="Open modal"
              onPress={() => navigate("Tes")}
              >
              <View style={styles.inline}>
              <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Empezemos </Text> 
                  <Text style={styles.buttonBlueText}>!!</Text>
              </View>
            </Button2>
          </Container>
          <View style={styles.footer}>
            
            <H3 style={styles.text}>Bienvenidos a SWELL</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>Federacion Salvadoreña de SURF</H3>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;