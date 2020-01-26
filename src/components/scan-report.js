import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import Swiper from "react-native-swiper";
import { base_url } from "../constants";


const { width } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 125
  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    borderRadius: 225,
    margin: 10
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },

  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  },

  image: {
    width: 70,
    height: 40,
    flex: 1
  }
};
export default class ScanReport extends Component {
  state = {
    cards: []
  };
  // componentWillMount(){
  //   console.log('First this called');
  // }
  // componentDidMount() {
  //   this.loadAllReports();
  // }
  // loadAllReports = () => {
  //   fetch(`${base_url}get-all-products`)
  //     .then(response => response.json())
  //     .then(async responseJson => {
  //       console.log("responseJson.data", responseJson.data);
  //       // const dt = await responseJson.data;
  //       this.setState({ cards: responseJson.data });
  //       // return responseJson.movies;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };
  render(){
    return(
      <View style={styles.container}>
        <StatusBar style={{ backgroundColor: "#416E74" }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 30
          }}
        >
          <View>
            {/* <Icon type="FontAwesome" name="home" /> */}
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>besanna</Text>
          </View>
          <View>
            {/* <Icon type="FontAwesome" name="bars" /> */}
          </View>
        </View>
       
      </View>
    )
  }
}