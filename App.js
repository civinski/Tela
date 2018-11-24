import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="dark-content"
        />
        <Image
          style={styles.img}
          source={{uri: 'https://image.prntscr.com/image/N-Moa9dET-6QGFuq8qTeNQ.png'}}
        />
        <Text style={styles.texto}>Todos os serviços na palma da sua mão, tenha tudo em sua casa</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}> Ir para Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  texto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30
  },
  botao: {
    borderRadius: 15,
    backgroundColor: '#e3397c',
    position: 'absolute',
    height: 55,
    left: 10,
    right: 10,
    bottom: 95,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 0
  },
  textoBotao: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  img: {
    width: 140,
    height: 140,
    marginTop: 50,
    marginBottom: 60
  }
});
