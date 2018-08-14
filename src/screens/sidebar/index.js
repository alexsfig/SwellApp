import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./styles";

const drawerCover = require("../../assets/background/launchscreen-menu-1.png")
const drawerImage = require("../../assets/background/logo-fesasurf.png");
const datas = [
  {
    name: "Home",
    route: "Homepage",
    icon: "home",
    bg: "#423f47"
  },
  {
    name: "Noticias",
    route: "Noticias",
    icon: "paper",
    bg: "#423f47"
  },
  {
    name: "Fechas",
    route: "Fechas",
    icon: "calendar",
    bg: "#423f47"
  },
  {
    name: "Ranking/Categorias",
    route: "Categorias",
    icon: "person",
    bg: "#423f47"
  },
  // {
  //   name: "Ranking",
  //   route: "Footer",
  //   icon: "star",
  //   bg: "#423f47"
  // }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 8
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#4b688e", fontSize: 26, width: 40 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 90,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
