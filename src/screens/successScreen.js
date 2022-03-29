import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";

import ButtonComponent from '../components/button';

const SuccessScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()
    return (
        <View style={styles.viewContainerStyle}>
            <View style={styles.viewContentStyle}>
                <Icon name="checkcircleo" color={colors.BACKGROUND_COMPONENT} size={wp('35%')} />
            </View>
            <View style={[styles.viewContentStyle, { marginVertical: hp('5%') }]}>
                <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontWeight: 'bold' }]}>{t('successed')}</Text>
                <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontSize: wp('5%') }]}>{t('Your password has been reset successfully')}</Text>
            </View>
            <ButtonComponent title={t('ok')} onPress={() => navigation.navigate('LoginScreen')} />
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
    viewContentStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitleStyle: {
        fontSize: wp('6%'),
        marginVertical: wp('2.5%')
    }
})

export default SuccessScreen