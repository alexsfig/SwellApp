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
  Badge
} from "native-base";
import styles from "./styles";
const cardImage = require("../../assets/background/logo2.png");

class Circuitos extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, counter: 0, rankingP: 0}
  }
  _incrementCount(points) {
    if (points != this.state.rankingP){
     	this.state.counter = this.state.counter + 1
	}
  	this.state.rankingP = points
  }

  componentDidMount(){
    return fetch(Config.API_URL + '/api/v1/circuitos/' + this.id + '/atletas')
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
              <Icon style={{ color: "#FFFFFF" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Circuito</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List
            dataArray = {this.state.dataSource.atletas_circuito}
            renderRow={
                data =>
              <ListItem
              >
                { this._incrementCount(data.puntos) }
                <Image source={{ uri: Config.API2_URL + '/upload/files/' + data.atleta.id + '.png' }} style={{width: 50, height: 50, borderRadius: 200}} />
                <Body>
                  <Text>
                    {data.atleta.persona.nombre} {data.atleta.persona.apellido}
                  </Text>
                  <Text>
                    Puntos: {data.puntos}
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

        </Content>
      </Container>

    )}
  }
export default Circuitos;
