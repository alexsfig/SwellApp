import React, { Component } from "react";
import { FlatList, ActivityIndicator, View , Image} from 'react-native';
import Config from 'react-native-config'

import {
  Text,
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
  List,
  ListItem,
  Badge
} from "native-base";
import styles from "./styles";

class Categorias extends Component {

  constructor(props){
    super(props);
    this.id = null
    this.anio = null
    this.state ={ isLoading: true, counter: 0, rankingP: 0}
  }
  _incrementCount(points) {
    if (points != this.state.rankingP){
     	this.state.counter = this.state.counter + 1
	}
	this.setState({
  		rankingP: 1000
  	})
  	this.state.rankingP = points
  }

  componentDidMount(){
    return fetch(Config.API_URL + '/api/v1/categorias/'+ this.id + '/atletas/' + this.anio)
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
    this.id = state.params.id;
    this.anio = 2018;
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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: "#FFFFFF" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.dataSource.nombre_categoria}</Title>
          </Body>
          <Right />
        </Header>
        <Container>
          <List
            dataArray = {this.state.dataSource.ranking}
            renderRow={
                data =>
              <ListItem
                onPress={() => navigate('Perfil', {name: data.atleta.persona.nombre, id: data.atleta.id, ranking_id: data.id})}
                >
                { this._incrementCount(data.puntuacion) }
                <Image source={{ uri: Config.API2_URL + '/upload/files/' + (data.atleta.id+'.png' )  }} style={{width: 50, height: 50, borderRadius: 200}} />
                <Body>
                  <Text>
                    {data.atleta.persona.nombre} {data.atleta.persona.apellido}
                  </Text>
                  <Text>
                    Puntos: {data.puntuacion}
                  </Text>
                </Body>
                <Right>
                  <Badge primary style={styles.badge}>
                    <Text style={styles.note} note>
                      {this.state.counter}
                    </Text>
                  </Badge>
                </Right>
              </ListItem>
            }/>

        </Container>
      </Container>

    )}
  }
export default Categorias;
