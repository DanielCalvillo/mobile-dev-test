import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import { MyContextProvider } from './Context';


const Stack = createStackNavigator();

export default function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  options={{
            headerTitleStyle: {
              fontFamily: 'Avenir',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 24,
              color: 'red',
            },
            headerShown: false
          }} // hide the header for this screen
          />
          <Stack.Screen name="Details" component={DetailScreen} options={{
            
            headerShown: false
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  );
}
