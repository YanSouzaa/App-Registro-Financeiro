import React, { useContext, useState, useEffect } from 'react';
import { Alert, TouchableOpacity, Platform, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth'
import HistoricoList from '../../components/HistoricoList';
import firebase from './../../../../firebaseConnection';
import { format, isBefore } from 'date-fns';
import DatePicker from '../../components/DatePicker';
import LinearGradient from 'react-native-linear-gradient';


import { Background, Container, Nome, Saldo, Title, List, Area } from './styles'

export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=>{
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historico')
      .child(uid)
      .orderByChild('date').equalTo(format(newDate, 'dd/MM/yy'))
      .limitToLast(10).on('value', (snapshot)=>{
        setHistorico([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            date: childItem.val().date,
            descricao: childItem.val().descricao
          };
          
          setHistorico(oldArray => [...oldArray, list].reverse());
        })
      })

    }

    loadList();
  }, [newDate]);


  function handleDelete(data){

    Alert.alert(
      'Atençao!',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )

  }


  async function handleDeleteSuccess(data){
    await firebase.database().ref('historico')
    .child(uid).child(data.key).remove()
    .then( async ()=>{
      let saldoAtual = saldo;
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);

      await firebase.database().ref('users').child(uid)
      .child('saldo').set(saldoAtual);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function handleShowPicker(){
    setShow(true);
  }

  function handleClose(){
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
    console.log(date);
  } 

 return (
  <LinearGradient style={{flex:1}} colors={['#ff0000','black']}>
      <Header/>
      <Container>
        <Nome>Saldo em Conta</Nome>
        <Saldo>R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Saldo>
      </Container>

      <Area>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon name="calendar" color="#FFF" size={30}  />
        </TouchableOpacity>
        <Title>Data da movimentação</Title>
      </Area>

      
      <List
      ListFooterComponentStyle={{height:300}}
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key}
      renderItem={ ({ item }) => ( <HistoricoList data={item} deleteItem={handleDelete} /> )}
      />
      

      {show && (
        <DatePicker
        onClose={handleClose}
        date={newDate}
        onChange={onChange}
        />
      )}

    </LinearGradient>
  );
}