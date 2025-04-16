import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Apenas uma vez
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import boasVindas from './boasVindas';
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="boasVindas">
        <Stack.Screen name="boasVindas" component={boasVindas} />
        <Stack.Screen name="pesquisar" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
