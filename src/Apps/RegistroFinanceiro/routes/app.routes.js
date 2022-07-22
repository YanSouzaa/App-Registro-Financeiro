import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../components/Drawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={(props)=><CustomDrawer{...props}/>}
            screenOptions={{
                headerShown:false,
                drawerStyle: {
                    backgroundColor: 'black'
                },
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: 'rgba(0,0,0,0.40)',
                drawerInactiveBackgroundColor: '#000',
                drawerInactiveTintColor: '#DDD',
                itemStyle:{
                    marginVertical:5,
                },
                drawerLabelStyle: {
                    fontWeight: 'bold',

                },
            }}
        >
            <AppDrawer.Screen name="Inicio" component={Home} />
            <AppDrawer.Screen name="Nova Movimentação" component={New} />
            <AppDrawer.Screen name="Perfil" component={Profile} />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;


