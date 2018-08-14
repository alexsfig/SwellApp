import React, { Component } from "react";
import { Image, ScrollView, ActivityIndicator,  Dimensions, StatusBar, View} from "react-native";
import Config from 'react-native-config'
import Moment from 'moment';
import 'moment/locale/es';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body,
  List,
  H1
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/background/test-face.jpg");
const deviceWidth = Dimensions.get("window").width;
import { Grid, Row, Col} from "react-native-easy-grid";

class Categorias extends Component {
  constructor(props){
    super(props);
    this.id = null;
    this.state ={ isLoading: true}
    this.atleta = null
  }

  componentDidMount(){
    return fetch(Config.API2_URL + '/atleta/'+this.id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.atleta = responseJson
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
    Moment.locale('es');
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
              <Icon style={{ color: "#FFFFFF" }} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Perfil Atleta</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <Card style={styles.mb}>
            <CardItem style={styles.cardImg} cardBody>
              <Image source={{ uri: Config.API2_URL + '/upload/files/' + (this.atleta.id+'.png' ) }} style={{
                alignSelf: "center",
                height: (deviceWidth / 2),
                width: (deviceWidth / 2),
                marginVertical: 5,
                borderRadius: 200
              }} />
            </CardItem>

            <CardItem>
              <Body style={styles.body, styles.center}>
                <Text>
                  <H1 style={styles.h1}>
                    {this.atleta.personaId.nombre} {this.atleta.personaId.apellido}
                  </H1>
                </Text>
                <Text note>{ Moment.utc(this.atleta.personaId.fechaNacimiento ).format('D  MMMM, YYYY')}</Text>
                <Text note>{ Moment().diff(this.atleta.personaId.fechaNacimiento,'years') } Años</Text>
              </Body>
            </CardItem>
            <CardItem >
              <Body style={styles.body, styles.center}>
                { this.atleta.ranking.map(
                  r => <Text style={{fontSize: 15, color: '#c36712'}}><Icon name="star" style={{fontSize: 20, color: '#c36712'}} /> {r.categoriaName}, Lugar: {r.lugar}, puntos: {r.puntos}</Text>
                )}
              </Body>
            </CardItem>
            <CardItem>
              <Grid>
                <Row style={styles.row}>
                  <Col>
                    <Text style={styles.title}>
                      Edad de inicio en el surf:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.edadInicio} años de edad
                      </Text>
                    </Text>
                  </Col>
                  <Col>
                    <Text style={styles.title}>
                      Años Practicando:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.aniosPracticando} años
                      </Text>
                    </Text>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col>
                    <Text style={styles.title}>
                      Ola Favorita:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.olaPreferida}
                      </Text>
                    </Text>
                  </Col>
                  <Col>
                    <Text style={styles.title}>
                      Lado preferido:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.ladoPie}
                      </Text>
                    </Text>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col>
                    <Text style={styles.title}>
                      Fechas que a competido:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.cuantasFechas} fecha/s
                      </Text>
                    </Text>
                  </Col>
                  <Col>
                    <Text style={styles.title}>
                      Ultima Participación:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.ultimaParticipacion}
                      </Text>
                    </Text>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col>
                    <Text style={styles.title}>
                      Idiomas:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.idiomas}
                      </Text>
                    </Text>
                  </Col>
                  <Col>
                    <Text style={styles.title}>

                    </Text>
                  </Col>
                </Row>

                <Row style={styles.row}>
                  <Col>
                    <Text style={styles.title}>
                      Logros:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.logros}
                      </Text>
                    </Text>
                  </Col>
                </Row>
                <Row style={styles.row}>
                  <Col>
                    <Text style={styles.title}>
                      Rutina:
                      <Text style = { styles.content }>
                        {"\n"}{ this.atleta.rutina}
                      </Text>
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>

    )}
  }
export default Categorias;
