import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, CheckBox } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';

import ButtonComponent from '../../components/button';

const LoginScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()
    const [rememberMe, setRememberMe] = useState(false)

    return (
        <View style={styles.viewContainer}>
            <Input containerStyle={styles.inputStyle} inputStyle={{ color: colors.TEXT_TITLE }} placeholder={t('username')} />
            <Input containerStyle={styles.inputStyle} inputStyle={{ color: colors.TEXT_TITLE }} placeholder={t('password')} />
            <View style={styles.viewCheckBoxStyle}>
                <CheckBox
                    containerStyle={styles.checkBoxStyle}
                    title={t('remember me')}
                    checked={rememberMe}
                    onPress={() => setRememberMe(!rememberMe)}
                    textStyle={{ color: colors.TEXT_TITLE }}
                />
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style={{ color: colors.TEXT_TITLE }}>{t('forgot password?')}</Text>
                </TouchableOpacity>
            </View>
            <ButtonComponent title={t('login')} onPress={() => navigation.navigate('RequestOtp')} />
            <View style={styles.viewDivider}>
                <View style={[styles.viewLineStyle, { backgroundColor: colors.TEXT_SUBTITLE }]} />
                <View>
                    <Text style={[styles.textOnLineStyle, { color: colors.TEXT_SUBTITLE }]}>{t('not have account')}</Text>
                </View>
                <View style={[styles.viewLineStyle, { backgroundColor: colors.TEXT_SUBTITLE }]} />
            </View>
            <ButtonComponent title={t('signin')} onPress={() => console.log('signin')} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        justifyContent: 'flex-end',
        paddingBottom: hp('10%')
    },
    inputStyle: {
        marginVertical: wp('2.5%'),
        marginHorizontal: 0,
        paddingHorizontal: 0
    },
    viewCheckBoxStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkBoxStyle: {
        marginHorizontal: 0,
        paddingHorizontal: 0,
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginLeft: 0,
        alignItems: 'center'
    },
    viewDivider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: wp('2.5%')
    },
    viewLineStyle: {
        flex: 1,
        height: 1
    },
    textOnLineStyle: {
        textAlign: 'center',
        marginHorizontal: 4
    }
})

export default LoginScreen