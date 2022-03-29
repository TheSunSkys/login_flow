import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { Input } from "react-native-elements";

import HeaderComponent from "../components/header";
import ButtonComponent from '../components/button';

const ForgotPasswordScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()
    return (
        <View style={styles.viewContainerStyle}>
            <HeaderComponent onParss={() => navigation.goBack()} />
            <View style={styles.viewContentStyle}>
                <View>
                    <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontWeight: 'bold' }]}>{t('forgot password?')}</Text>
                    <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontSize: wp('5%') }]}>{t('Please enter your registered')}</Text>
                </View>
                <View style={styles.viewInputStyle}>
                    <Input containerStyle={styles.inputStyle} inputStyle={{ color: colors.TEXT_TITLE }} placeholder={t('email / phone number')} />
                </View>
                <View>
                    <ButtonComponent title={t('send')} onPress={() => console.log('send')} />
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
    inputStyle: {
        marginVertical: wp('2.5%'),
        marginHorizontal: 0,
        paddingHorizontal: 0
    },
    viewInputStyle: {
        marginBottom: hp('3%'),
        marginTop: hp('5%')
    }
})

export default ForgotPasswordScreen