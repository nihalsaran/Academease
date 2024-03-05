import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/Splash';
import Welcome from './screens/Welcome';
import SignupScreen from './screens/SignupScreen';
import Login from './screens/Login';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />

<Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{ headerShown: false }}
                />

                


                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />






            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;


/*



                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Facultylist"
                    component={Facultylist}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Materialpage"
                    component={Materialpage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="APL"
                    component={APL}
                    options={{ headerShown: false }}
                />


                */