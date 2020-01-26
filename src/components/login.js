import React, { Component } from "react";
import {
  Alert,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView
} from "react-native";
import appStyleSheets from "../styles/styles";
import HeaderScreen from "./header-screen";

export default class LoginScreen extends Component {
  
  state = {
    txtLoginEmailId: "admin",
    txtLoginPassword: "123",
    isLoading: true,
    errorLoginEmailId: true,
    errorLoginPass: true,
    msgValidate: ""
  };
  

  btnLoginClick = () => {
    console.log("All fields filled");
    this.props.navigation.navigate("AppScanner");
  };

  render() {
    return (
      <View>
        <HeaderScreen />
        <Text style={appStyleSheets.loginHeader}>Login</Text>
        <ScrollView
          contentContainerStyle={{ height: 1000, paddingVertical: 30 }}
        >
          <Text style={appStyleSheets.labelStyle}>Email</Text>
          <TextInput
            style={appStyleSheets.textBoxStyle}
            placeholder="Enter Email id"
            keyboardType="email-address"
            onChangeText={valLoginEmailId =>
              this.setState({
                txtLoginEmailId: valLoginEmailId,
                errorLoginEmailId: true
              })
            }
            value={this.state.txtLoginEmailId}
          />
          <View style={{ paddingTop: 10 }} />
          {this.state.errorLoginEmailId == false ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Please enter the email id to proceed.
            </Text>
          ) : null}
          <Text style={appStyleSheets.labelStyle}>Password</Text>
          <TextInput
            style={appStyleSheets.textBoxStyle}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={valLoginPassword =>
              this.setState({
                txtLoginPassword: valLoginPassword,
                errorLoginPass: true
              })
            }
            value={this.state.txtLoginPassword}
          />
          {this.state.errorLoginPass == false ? (
            <Text style={{ color: "red", textAlign: "center" }}>
              Please enter the password to proceed.
            </Text>
          ) : null}
          <TouchableOpacity
            style={appStyleSheets.buttonStyle}
            activeOpacity={0.5}
            onPress={this.btnLoginClick}
          >
            <Text style={appStyleSheets.bttonTextStyle}> Login </Text>
          </TouchableOpacity>
          <Text style={{ color: "red", textAlign: "center" }}>
            {this.state.msgValidate}
          </Text>
          <Text
            style={{
              paddingTop: 15,
              color: "#999999",
              textAlign: "center"
            }}
            onPress={() =>
              this.props.navigation.navigate("ForgotPasswordScreen")
            }
          >
            Forgot Password ?
          </Text>
        </ScrollView>
      </View>
    );
  }
}