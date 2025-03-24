import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Switch, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur';

const icon = require('./src/img/icon.png');
const icon_user = require('./src/img/user.png');
const icon_lock = require('./src/img/padlock.png');
const icon_email = require('./src/img/email.png');
const icon_cpf = require('./src/img/id-card.png');



export default function App() {


  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView // USADO PARA FAZER O LAYOUT SE AJUSTAR QUANDO ABRIR TECLADOS
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Ajusta o comportamento para iOS e Android
        style={{ flex: 1 }}
      >
        <ScrollView>

          <View style={styles.boxIcon}>
            <View style={styles.colorBackground} />
            <BlurView
              intensity={50} // Intensidade do desfoque
              tint="light" // Cor do desfoque
              style={styles.blurBackground}
            />
            <Image
              source={icon}
              style={styles.icon}
            />
          </View>

          <View style={styles.boxTitle}>
            <Text style={styles.title}>Novo Usuário</Text>
          </View>
          <View style={styles.horizontalLine} />

          <View style={styles.boxInput}>

            <View style={styles.boxEntradaDados}>
              <Image source={icon_user} style={{ height: 35, width: 35 }} />
              <TextInput
                style={styles.inputNome}
                placeholder='DIGITE SEU NOME'
                keyboardType='default'
              />
            </View>

            <View style={styles.boxEntradaDados}>
              <Image source={icon_cpf} style={{ height: 35, width: 35 }} />
              <TextInput
                style={styles.inputNome}
                placeholder='DIGITE SEU CPF'
                keyboardType='number-pad'
              />
            </View>

            <View style={styles.boxEntradaDados}>
              <Image source={icon_email} style={{ height: 35, width: 35 }} />
              <TextInput
                style={styles.inputNome}
                placeholder='DIGITE SEU E-MAIL'
                keyboardType='email-address'
              />
            </View>

            <View style={styles.boxEntradaDados}>
              <Image source={icon_lock} style={{ height: 35, width: 35 }} />
              <TextInput
                style={styles.inputNome}
                placeholder='ESCOLHA UMA SENHA'
                secureTextEntry={true}
              />
            </View>

            <View style={styles.boxEntradaDados}>
              <Image source={icon_lock} style={{ height: 35, width: 35 }} />
              <TextInput
                style={styles.inputNome}
                placeholder='CONFIRME A SENHA'
                secureTextEntry={true}
              />
            </View>

            <View style={styles.boxButton}>
              <TouchableOpacity
                style={styles.button}
              >
                <Text style={styles.txtButton}>Cadastrar</Text>
              </TouchableOpacity>
            </View>


            <View style={styles.login}>
              <Text style={styles.txtLogin}>Já possui conta? </Text>
              <TouchableOpacity><Text style={styles.txtAcesseAqui}>Acesse aqui.</Text></TouchableOpacity>
            </View>


          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  boxIcon: {
    alignItems: 'center',
    paddingBottom: 20,
    overflow: 'hidden'
  },
  icon: {
    height: 300,
    width: 300
  },
  boxTitle: {
    height: 45,
    width: 308,
    marginLeft: 4,
    //backgroundColor: 'red'
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
    paddingLeft: 5,

  },
  boxInput: {
    flexDirection: 'column',
    //alignItems: 'center',
    margin: 30,
  },
  inputNome: {
    borderColor: 'lightgrey',
    borderBottomWidth: 2,
    marginLeft: 15,
    marginBottom: 0,
    flex: 1,
    fontSize: 23
  },
  boxEntradaDados: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    alignItems: 'flex-end',
    paddingBottom: 30
  },
  boxButton: {
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
    marginTop: 25
  },
  button: {
    backgroundColor: '#112084',
    borderColor: '#112084',
    borderWidth: 1,
    width: '60%',
    justifyContent: 'center',
    borderRadius: 12,
    height: 50
  },
  txtButton: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
  },
  login: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10

  },
  txtLogin: {
    textAlign: 'center',
    fontSize: 15
  },
  txtAcesseAqui: {
    borderBottomWidth: 1
  },
  horizontalLine: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    height: 2,
    backgroundColor: 'black',
    width: '80%',
    marginLeft: 35,
  },
  blurBackground: {
    position: 'absolute', // Permite posicionar o blur fora da tela
    top: -100, // Move a metade superior do blur para fora da tela
    width: '100%', // Largura do blur
    height: 500, // Altura do blur
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBackground: {
    position: 'absolute', // Posiciona o fundo atrás do BlurView
    top: -300, // Move a metade superior para fora da tela
    width: '100%', // Largura do fundo
    height: 500, // Altura do fundo
    backgroundColor: '#2E3E71', // Cor com transparência
    borderRadius: 120, // Torna o fundo uma elipse
  },
});
