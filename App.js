import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SignatureText extends Component {
    render() {
        return (
            <Text style={styles.signtext}>
                {this.props.prefix} '{this.props.author}' {this.props.suffix}
            </Text>
        );
    }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
              Hello World
          </Text>

          <SignatureText prefix = 'Done by ' author='Sunil' suffix = '©isunilapps'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },

  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    signtext: {
        fontSize: 20,
        textAlign: 'right',
        margin: 10,
        color: '#fff',
        backgroundColor: '#000',
    },
});
