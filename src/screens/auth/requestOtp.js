import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HeaderComponent from "../../components/header";
import ButtonComponent from '../../components/button';

const RequestOtp = ({ navigation }) => {
    const { colors } = useTheme()
    const { t } = useTranslation()
    const [phoneNumber, setPhoneNumber] = useState('082-XXX-8998')
    return (
        <View style={styles.viewContainerStyle}>
            <HeaderComponent onParss={() => navigation.goBack()} />
            <View style={styles.viewContentStyle}>
                <Icon style={{ marginLeft: wp('10%') }} name="cellphone-message" color={colors.BACKGROUND_COMPONENT} size={wp('30%')} />
                <Text
                    style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontWeight: 'bold', marginTop: hp('5%') }]}
                >
                    {t('send opt to')}
                </Text>
                <Text
                    style={[styles.textTitleStyle, { color: colors.BACKGROUND_COMPONENT, marginBottom: hp('5%') }]}
                >
                    {phoneNumber}
                </Text>
                <ButtonComponent title={t('request otp')} onPress={() => console.log('request otp')} />
                <Text style={{ color: colors.TEXT_SUBTITLE, marginVertical: wp('2.5%') }}>{t('phone wrong')}</Text>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitleStyle: {
        fontSize: wp('6%'),
        marginVertical: wp('2.5%')
    }
})

export default RequestOtp