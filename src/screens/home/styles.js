const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,

  },
  logoContainer: {
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300
  },
  orangeButton: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#82450d',
    backgroundColor: '#c36712',
    borderWidth: 2,
    padding: 20
  },
  buttonBlueText: {
    fontSize: 15,
    color: '#FFFFFF'
  },
  buttonBigText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  inline: {
      flexDirection: 'row'
  },
  text: {
    color: "#FFFFFF",
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowRadius: 2,
    shadowOffset: {
      width: 5,
      height: 5
    }
  },
  footer:{
    position: 'absolute', 
    left: 0,
    right: 0, 
    bottom: 0
   }
};