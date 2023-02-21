import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen } from './components/organisms';
import { MyContextProvider } from './Context';


const Stack = createStackNavigator();

export default function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  options={{
            
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
