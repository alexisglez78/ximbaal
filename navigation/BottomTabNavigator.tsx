import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabTwoScreen from '../screens/TabTwoScreen';
import inicio from '../screens/inicio';
import { BottomTabParamList, TabHomeParamList, TabTwoParamList ,RootStackParamList} from '../types';
import { DarkTheme } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Inicio"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabHomeParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Inicio"
        component={inicio}
        options={{headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}


const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="PerfilScreen"
        component={TabTwoScreen}
        options={{headerShown:false}}
      />
    </TabTwoStack.Navigator>
  );
}
const Detalle = createStackNavigator<RootStackParamList>();

function DetalleSite() {
  return (
    <Detalle.Navigator>
      <Detalle.Screen
        name="DetalleSite"
        component={DetalleSite}
        options={{ headerTitle: 'Detalle' }}
      />
    </Detalle.Navigator>
  );
}