import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { AuthContext } from '../../contexts/auth';
import LinearGradient from 'react-native-linear-gradient';

export default function Drawer(props) {
    const { user, signOut } = useContext(AuthContext)
    return (
        
            <DrawerContentScrollView style={{ backgroundColor: 'red' }} {...props}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Icon name="bank" size={100} style={{ marginBottom: 10, marginLeft: 10 }} color={'rgba(0,0,0,0.40)'} />
                    <Text style={{ color: '#fff', fontSize: 18, marginTop: 5 }}>
                        Bem Vindo
                    </Text>
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold', paddingBottom: 25 }}>
                        {user && user.nome}
                    </Text>
                </View>
                <DrawerItemList {...props} />

                <DrawerItem
                    {...props}
                    label="Sair da conta"
                    labelStyle={{ color: 'red', textAlign: 'center', paddingLeft: 23 }}
                    style={{ backgroundColor: '#000' }}
                    onPress={() => signOut()}
                />
            </DrawerContentScrollView>
      
    );
}