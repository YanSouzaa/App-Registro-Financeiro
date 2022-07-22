import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Platform, ActivityIndicator, Animated } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles'

export default function SignIn() {

    const ButtonAnimated = Animatable.createAnimatableComponent(Input);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);
    const opacidadeAnimada = useRef(new Animated.Value(0)).current;
    const [animaEmail, setAnimaEmail] = useState('bounceInLeft')
    const [animaSenha, setAnimaSenha] = useState('bounceInRight')

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacidadeAnimada, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            })
        ]).start();

    })

    function handleLogin() {
            signIn(email, password);
        

    }

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#ff0000', 'black']}>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Animated.View style={{ opacity: opacidadeAnimada }}>
                    <Icon name="bank" size={100} style={{ marginBottom: 50, }} />
                </Animated.View>
                <Animatable.View style={{ flexDirection: 'row' }} animation={animaEmail}>
                    <Input placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}

                    />
                </Animatable.View>

                <Animatable.View style={{ flexDirection: 'row' }} animation={animaSenha}>
                    <Input placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}

                    />
                </Animatable.View>
                <SubmitButton onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }

                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Novo por aqui?</LinkText>
                </Link>


            </Container>
        </LinearGradient>
    );
}