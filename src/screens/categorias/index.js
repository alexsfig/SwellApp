import React, { Component } from "react";
import { FlatList, ActivityIndicator, View , Image} from 'react-native';
import Config from 'react-native-config'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body,
  Badge,
  H2
} from "native-base";
import styles from "./styles";

const cardImage = require("../../assets/background/logo2.png");

class NHListAvatar extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch(Config.API_URL + '/api/v1/categorias')
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
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: "#FFFFFF" }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Ranking</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray = {this.state.dataSource}
            renderRow={
              data =>
              <ListItem button
                onPress={() => navigate('Atletas', {id: data.id})}
                avatar>
                <Left>
                  <Thumbnail small source={cardImage} />
                </Left>
                <Body>
                  <H2>
                    {data.nombre_categoria}
                  </H2>
                  <Text numberOfLines={4} note>
                    {data.descripcion_categoria}
                  </Text>
                  <Text numberOfLines={4} note>
                    Sexo: {data.sexo == 'M' ? 'Masculino': data.sexo == 'F' ? 'Femenino' : 'Mixto'}
                  </Text>
                  <Text numberOfLines={4} note>
                    Edad Minima: {data.edad_min}, Edad Maxima : {data.edad_max}
                  </Text>

                </Body>
                <Right>
                  <Badge primary style={styles.badge}>
                    <Text style={styles.note} note>
                      {data.atletas}
                    </Text>
                  </Badge>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListAvatar;
