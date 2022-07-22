import React from 'react';
import { Container,ButtonMenu} from './styles';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'; 

export default function Header() {
    const navigation = useNavigation();

 return (
   <Container>
    <ButtonMenu onPress={()=> navigation.toggleDrawer()}>
        <Icon name="menu" color="#FFF" size={35}/>

    </ButtonMenu>
   </Container>
  );
}