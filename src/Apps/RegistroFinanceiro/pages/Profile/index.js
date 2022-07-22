import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { Container, Nome, NewLink, NewText, Logout, LogoutText } from './styles'
import Header from '../../components/Header';
import { Alert } from 'react-native';
export default function Profile() {
    const { user, signOut, } = useContext(AuthContext);
    const navigation = useNavigation();


    return (
        <Container>
            <Header />
            <Nome>
                {user && user.nome}
            </Nome>
            <NewLink onPress={() => navigation.navigate('Registrar')}>
                <NewText>Registrar gastos</NewText>
            </NewLink>
             
            
            <Logout onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    );
}
//criand HOme