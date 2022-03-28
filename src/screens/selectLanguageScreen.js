import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

import ButtonComponent from '../components/button';

const SelectLanguageScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()

    const navigationToConditionScreen = () => {
        navigation.navigate('ConditionScreen')
    }

    return (
        <View style={[styles.viewContainerStyle, { backgroundColor: colors.BACKGROUND }]}>
            <View style={styles.viewTextStyle}>
                <Text h3 h3Style={{ color: colors.TEXT_TITLE }}>{t('welcome')}</Text>
                <Text h4 h4Style={{ color: colors.TEXT_TITLE }}>{t('please select language')}</Text>
            </View>
            <ButtonComponent title={t('engligh lang')} onPress={navigationToConditionScreen} />
            <ButtonComponent title={t('thai lang')} onPress={navigationToConditionScreen} />
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
    viewTextStyle: {
        justifyContent: 'flex-start',
        width: '100%',
        marginBottom: hp('10%')
    }
})

export default SelectLanguageScreen