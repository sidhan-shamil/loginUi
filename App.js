import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableHighlight } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/images/logo.jpg')} style={styles.logo}></Image>
          <TextInput style={styles.input} placeholder= 'Email' placeholderTextColor={'#111'}></TextInput>
          <TextInput style={styles.input} placeholder= 'Password' placeholderTextColor={'#111'} secureTextEntry={true}></TextInput>
          <View style= {{flexDirection: 'row'}}>
            <TouchableHighlight style= {styles.btn}>
              <Text style={{color: '#fff'}}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.btn2}>
              <Text style={{color: '#fff'}}>Register</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight style={styles.btnFb}>
            <Text style= {{color: '#fff'}}>Login with facebook</Text>
          </TouchableHighlight>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 100,
    height: 100
  },
  input: {
    width: '80%',
    height: 55,
    backgroundColor: '#fff',
    color: '#111',
    borderColor: '#458cff',
    borderBottomWidth: 2,
    marginTop: 20,
    paddingLeft: 20,
    opacity: 0.7
  },
  btn: {
    width: '40%',
    height: 45,
    backgroundColor: '#4bb543',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 5
  },
  btn2: {
    width: '40%',
    height: 45,
    backgroundColor: '#cf142b',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  btnFb: {
    backgroundColor: '#3b5998',
    width: '80%',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});
