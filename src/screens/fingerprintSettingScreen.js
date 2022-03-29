import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtonComponent from '../components/button';

const FingerprintSettingScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()
    return (
        <View style={styles.viewContainerStyle}>
            <View style={styles.viewTextStyle}>
                <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontWeight: 'bold' }]}>{t('touch id')}</Text>
                <Text style={[styles.textTitleStyle, { color: colors.TEXT_TITLE, fontSize: wp('5%') }]}>{t('seting fingerprint des')}</Text>
            </View>
            <View style={styles.viewIconStyle}>
                <Icon name="fingerprint" color={colors.BACKGROUND_COMPONENT} size={wp('30%')} />
            </View>
            <View style={styles.viewButtonStyle}>
                <ButtonComponent title={t('seting fingerprint')} onPress={() => console.log('seting fingerprint')} />
                <Button title={t('skip')} type="clear" onPress={() => navigation.navigate('PinCodeValidateScreen')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        paddingHorizontal: wp('5%'),
        justifyContent: 'space-between'
    },
    textTitleStyle: {
        fontSize: wp('6%'),
        marginVertical: wp('2.5%')
    },
    viewIconStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTextStyle: {
        marginTop: hp('5%'),
        width: '70%'
    },
    viewButtonStyle: {
        marginBottom: hp('15%')
    }
})

export default FingerprintSettingScreen