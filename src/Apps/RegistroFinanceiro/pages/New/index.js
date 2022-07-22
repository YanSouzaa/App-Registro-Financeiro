import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../../../firebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { Background, Input, SubmitButton, SubmitText } from './styles'
import Picker from '../../components/Picker';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

export default function New() {
  const navigation = useNavigation();

 const [valor, setValor] = useState('');
 const [descricao,setDescricao] = useState('');
 const [tipo, setTipo] = useState(null);
 const { user: usuario } = useContext(AuthContext);

 function handleSubmit(){
  Keyboard.dismiss();
  if(isNaN(parseFloat(valor)) || tipo === null || descricao === ''){
    alert('Preencha todos os campos!');
    return;
  }

  Alert.alert(
    'Confirmando dados',
    `Tipo ${tipo} - Valor: ${parseFloat(valor)} - Descrição: ${descricao} `,
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Continuar',
        onPress: () => handleAdd()
      }
    ]
  )

 }


 async function handleAdd(){
   let uid = usuario.uid;

    let key = await firebase.database().ref('historico').child(uid).push().key;
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yy'),
      descricao: descricao
    })


    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot)=>{
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo);

    });
    Keyboard.dismiss();
    setValor('');
    setDescricao('');
    navigation.navigate('Inicio');

 }

 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
   <LinearGradient style={{flex:1}} colors={['#ff0000','black']}>
       <Header/>

       <SafeAreaView style={{ alignItems: 'center' }}>
         <Input
         placeholder="Digite um valor"
         keyboardType="numeric"
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={valor}
         onChangeText={ (text) => setValor(text) }
         />
         <Input
         placeholder="Digite uma descrição "
         returnKeyType="next"
         onSubmitEditing={ () => Keyboard.dismiss() }
         value={descricao}
         onChangeText={ (text) => setDescricao(text) }
         />
         
         <Picker onChange={setTipo}/>

        <SubmitButton onPress={handleSubmit}>
          <SubmitText>Registrar</SubmitText>
        </SubmitButton>

       </SafeAreaView>

   </LinearGradient>
   </TouchableWithoutFeedback>
  );
}