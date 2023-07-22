import React, { useState } from 'react';
import { StyleSheet, Text,  View, TextInput, TouchableOpacity } from 'react-native';

//import AnimalService from '../services/animal.service'
import { Vehicle } from '../models/vehicle.model'
export default class Home extends React.Component {
    state = {
      formulario: new Vehicle(),
    };
  
    handleSubmit = () => {
      // Lógica para lidar com os dados do formulário aqui
      console.log('ID:', this.state.formulario.id);
      console.log('Nome:', this.state.formulario.nome);
      console.log('Placa:', this.state.formulario.placa);
      console.log('Cor:', this.state.formulario.color);
      console.log('Categoria:', this.state.formulario.category);
      console.log('Tipo:', this.state.formulario.type);
    };
  
    render() {
      return (
        <View style={{ padding: 20 }}>
          <TextInput
            style={{ borderBottomWidth: 1, padding: 5 }}
            placeholder="ID"
            value={this.state.formulario.id.toString()}
            onChangeText={(text) => this.setState({ formulario: { ...this.state.formulario, id: parseInt(text, 10) } })}
            keyboardType="numeric"
          />
          <TextInput
            style={{ borderBottomWidth: 1, padding: 5 }}
            placeholder="Nome"
            value={this.state.formulario.nome}
            onChangeText={(text) => this.setState({ formulario: { ...this.state.formulario, nome: text } })}
          />
          <TextInput
            style={{ borderBottomWidth: 1, padding: 5 }}
            placeholder="Placa"
            value={this.state.formulario.placa}
            onChangeText={(text) => this.setState({ formulario: { ...this.state.formulario, placa: text } })}
          />
          <TextInput
            style={{ borderBottomWidth: 1, padding: 5 }}
            placeholder="Cor"
            value={this.state.formulario.color}
            onChangeText={(text) => this.setState({ formulario: { ...this.state.formulario, color: text } })}
          />
          <TextInput
            style={{ borderBottomWidth: 1, padding: 5 }}
            placeholder="Categoria"
            value={this.state.formulario.category}
            onChangeText={(text) => this.setState({ formulario: { ...this.state.formulario, category: text } })}
          />
          <TextInput
            style={{ borderBottomWidth: 1, padding: 5 }}
            placeholder="Tipo"
            value={this.state.formulario.type}
            onChangeText={(text) => this.setState({ formulario: { ...this.state.formulario, type: text } })}
          />
          <TouchableOpacity
            style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', marginTop: 20 }}
            onPress={this.handleSubmit}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Enviar</Text>
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
        justifyContent: 'center',
    },

    textInput:{
        alignItems: "center", 
        width: 200, 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
    },
    containerTouch:{
        width: 200,
         padding: 10
    }
});