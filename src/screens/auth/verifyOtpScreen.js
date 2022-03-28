import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import HeaderComponent from "../../components/header";

const VerifyOtpScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()
    const [phoneNumber, setPhoneNumber] = useState('082-XXX-8998')
    const [countdownTime, setCountdownTime] = useState(60)

    useEffect(() => {
        let interval = setInterval(() => {
            setCountdownTime(prev => {
                if (prev === 1) clearInterval(interval)
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <View style={styles.viewContainerStyle}>
            <HeaderComponent onParss={() => navigation.goBack()} />
            <View style={styles.viewContentStyle}>
                <View>
                    <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontWeight: 'bold' }]}>{t('verify')}</Text>
                    <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontSize: wp('5%') }]}>{t('enter otp')}</Text>
                    <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontSize: wp('5%') }]}>{phoneNumber}</Text>
                </View>
                <View>
                    <OTPInputView
                        style={{ width: '100%', height: hp('25%') }}
                        pinCount={6}
                        autoFocusOnLoad
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code) => {
                            console.log(`Code is ${code}, you are good to go!`)
                        }}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontSize: wp('5%') }]}>{t('not recive otp')}</Text>
                    <TouchableOpacity
                        onPress={() => console.log('resend otp')}
                    >
                        <Text style={[styles.textTitleStyle, { color: colors.BACKGROUND_COMPONENT, fontSize: wp('5%') }]}>{t('resend otp')} ({countdownTime})</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        paddingHorizontal: wp('5%')
    },
    viewContentStyle: {
        flex: 1
    },
    textTitleStyle: {
        fontSize: wp('6%'),
        marginVertical: wp('2.5%')
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },
    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        fontSize: wp('6%'),
    },
    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },

})


export default VerifyOtpScreen