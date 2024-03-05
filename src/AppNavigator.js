import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/Splash';
import Welcome from './screens/Welcome';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
       <NavigationContainer>
          <Stack.Navigator>

          <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{headerShown: false}}
          />

<Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{headerShown: false}}
          />



          


            </Stack.Navigator>
         </NavigationContainer>
    );
}

export default AppNavigator;