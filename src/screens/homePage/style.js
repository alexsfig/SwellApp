const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    height: deviceHeight / 3.5,
    width: deviceWidth
  },
  row:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF'
  },
  row2:{
    backgroundColor: "#e7a73d"
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,

  },
  logoContainer: {
    width: null,
    height: null,
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120
  },
  logo2: {
    width: 160,
    height: 100
  },
  h1:{
    paddingTop: 20,
    color: "#7c96b7",
    justifyContent: "center"
  },
  text:{
    paddingTop: 40,
    paddingBottom: 40,
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "center",
    textAlign: "center"

  },
  header:{
    backgroundColor: "#031328",
    justifyContent: 'flex-start'
  },
  centerHorizontal:{
    alignItems: 'center'

  },
  centerVertical:{
    justifyContent:'center'
  }

}
