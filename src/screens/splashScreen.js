import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@react-navigation/native';

const SplashScreen = () => {
    const { colors } = useTheme()
    return <View style={{ flex: 1, backgroundColor: colors?.BACKGROUND }} />
}

export default SplashScreen