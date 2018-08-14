import React, { Component } from "react";
import { FlatList, ActivityIndicator, View , Image} from 'react-native';
import Config from 'react-native-config'
import {
  Text,
  Container,
  Header,
  Left,
  Thumbnail,
  Button,
  Icon,
  Title,
  H1,
  Right,
  Content,
  Body,
  List,
  ListItem,
} from "native-base";
import styles from "./styles";
const cardImage = require("../../assets/background/logo2.png");

class Categorias extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(Config.API_URL + '/api/v1/fechas')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {
    const {state} = this.props.navigation;
    const {navigate} = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator style={styles.activityIndicator}size="large" color="#031328"/>
          <Text>
            Cargando Informacion
          </Text>
        </View>
      )
    }
    return (

      <Container style={styles.container}>
        <Header androidStatusBarColor="#031328" style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerToggle")}>
              <Icon style={{ color: "#FFFFFF" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Fechas</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List
            dataArray = {this.state.dataSource}
            renderRow={
                data =>
              <ListItem button avatar
                onPress={() => navigate('FechaId', {id: data.id})}
              >
                <Left>
                  <Thumbnail square small source={cardImage} />
                </Left>
                <Body>
                  <H1>
                    {data.nombre}
                  </H1>
                  <Text>
                    Fecha: {data.fecha}
                  </Text>
                  <Text>
                    Playa: {data.playa.nombre}
                  </Text>
                </Body>

              </ListItem>
            }/>

        </Content>
      </Container>

    )}
  }
export default Categorias;
