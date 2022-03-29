import React, { useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';

import { AuthContext } from "../navigation/auth";
import ButtonComponent from '../components/button'

const HomeScreen = () => {
    const { colors } = useTheme()
    const { signOut } = useContext(AuthContext);
    const { t } = useTranslation()

    return (
        <View style={styles.viewContainerStyle}>
            <Text style={[styles.textStyle, { color: colors.TEXT_TITLE }]}>Home Screen</Text>
            <ButtonComponent title={t('Sign Out')} onPress={() => signOut()} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: wp('5%')
    }
})


export default HomeScreen