import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { View,Text, ImageBackground, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AuthContext} from '../../contexts/auth'
import Icon from 'react-native-vector-icons/dist/FontAwesome';


import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles'

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const { signUp, loadingAuth } = useContext(AuthContext)
 
    function handleSignUp(){
        signUp(email, password, nome);
    }

 return (
    <LinearGradient style={{flex:1}} colors={['#ff0000','black']}>
    <Container
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    >
        <Icon name="bank" size={100} style={{marginBottom:50}}/>
            <AreaInput>
            <Input placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={ (text)=> setNome(text)}
            />
            </AreaInput>

            <AreaInput>
            <Input placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text)=> setEmail(text)}
            />
            </AreaInput>
            <AreaInput>
            <Input placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text)=> setPassword(text)}
            secureTextEntry={true}
            />
            </AreaInput>
            <SubmitButton onPress={handleSignUp}>
            {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color="#FFF"/>
                    ) : (
                        <SubmitText>Criar uma nova conta</SubmitText>
                    )
                }
                
            </SubmitButton>

            <Link onPress={()=> navigation.goBack()}>
                <LinkText>Voltar para Login</LinkText>
            </Link>


    </Container>
   </LinearGradient>
  );
}