import React, { useEffect, useReducer, useMemo } from "react";
import { AuthContext } from './auth';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import SplashScreen from "../screens/splashScreen";
import LoginScreen from "../screens/auth/loginScreen";
import HomeScreen from "../screens/homeScreen";
import { colors } from "../assets/styles/colors";

const Stack = createNativeStackNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors.dark
    }
};

const Navigation = () => {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        },
    );

    const authContext = useMemo(
        () => ({
            signIn: async data => {
                const token = 'dummy-auth-token';
                // AsyncStorage.setItem('TOKEN', token);
                dispatch({ type: 'SIGN_IN', token: token });
            },
            signOut: () => {
                // AsyncStorage.removeItem('TOKEN')
                dispatch({ type: 'SIGN_OUT' })
            },
            signUp: async data => {
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        [],
    );

    useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken = null;
            try {
                // userToken = await AsyncStorage.getItem('TOKEN');
            } catch (e) {
                // Restoring token failed
                dispatch({ type: 'SIGN_OUT' });
            }
            setTimeout(() => {
                dispatch({ type: 'RESTORE_TOKEN', token: userToken });
            }, 1000);
        };

        bootstrapAsync();
    }, []);

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator
                    initialRouteName={state && state.userToken && 'InitScreen'}>
                    {state && state.isLoading ? (
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="SplashScreen">
                                {props => (
                                    <SafeAreaView style={{ flex: 1, backgroundColor: MyTheme.colors.BACKGROUND }}>
                                        <SplashScreen {...props} />
                                    </SafeAreaView>
                                )}
                            </Stack.Screen>
                        </Stack.Group>
                    ) : state && state.userToken == null ? (
                        <Stack.Group
                            screenOptions={{
                                headerShown: false,
                                animation: 'none',
                            }}>
                            <Stack.Screen name="LoginScreen">
                                {props => (
                                    <>
                                        <SafeAreaView style={{ flex: 1 }}>
                                            <LoginScreen {...props} />
                                        </SafeAreaView>
                                    </>
                                )}
                            </Stack.Screen>
                        </Stack.Group>
                    ) : (
                        <Stack.Group
                            screenOptions={{
                                headerShown: false,
                                animation: 'slide_from_right',
                                // contentStyle: {
                                //     backgroundColor: colors.dark.BACKGROUND,
                                // }
                            }}>
                            <Stack.Screen name="HomeScreen">
                                {props => (
                                    <>
                                        <SafeAreaView style={{ flex: 1 }}>
                                            <HomeScreen {...props} />
                                        </SafeAreaView>
                                    </>
                                )}
                            </Stack.Screen>
                        </Stack.Group>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Navigation