import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { useTheme } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Modal from "react-native-modal";
import { useTranslation } from "react-i18next";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from "react-native-elements";

import HeaderComponent from "../components/header";

const ConditionScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()
    const [visible, setVisible] = useState(true);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const nextScreen = () => {
        setVisible(!visible);
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={[styles.viewContainerStyle, { backgroundColor: colors.BACKGROUND }]}>
            <HeaderComponent onParss={() => navigation.goBack()} />
            <Modal
                isVisible={visible}
                style={styles.bottomModalStyle}
                backdropColor={'transparent'}
                onBackdropPress={toggleOverlay}
                transparent
            >
                <View style={[styles.modalContentStyle, { backgroundColor: colors.BACKGROUND_SUB_COMPONENT }]}>
                    <View style={[styles.viewTextStyle, { borderBottomColor: colors.COMPONENT_SUB }]}>
                        <Icon name="text-box-outline" color={colors.BACKGROUND_COMPONENT} size={wp('8%')} />
                        <Text style={styles.textHeaderStyle}>{t('condition')}</Text>
                    </View>
                    <View style={styles.viewButtonStyle}>
                        <Button
                            title={t('refuse')}
                            buttonStyle={[styles.buttonStyle, { borderColor: colors.BACKGROUND_COMPONENT }]}
                            type="outline"
                            titleStyle={{ color: colors.TEXT_TITLE_SAME_COMPONENT }}
                            containerStyle={styles.buttonContainerStyle}
                            onPress={toggleOverlay}
                        />
                        <Button
                            title={t('agree')}
                            buttonStyle={[styles.buttonStyle, { backgroundColor: colors.BACKGROUND_COMPONENT }]}
                            titleStyle={{ color: colors.TEXT_TITLE }}
                            containerStyle={styles.buttonContainerStyle}
                            onPress={nextScreen}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        paddingHorizontal: wp('5%')
    },
    bottomModalStyle: {
        justifyContent: 'flex-end',
        margin: 0
    },
    modalContentStyle: {
        height: hp('70%'),
        padding: wp('5%'),
        justifyContent: 'space-between',
        borderRadius: wp('3%'),
    },
    textHeaderStyle: {
        fontSize: wp('6%'),
        fontWeight: 'bold',
        marginLeft: wp('2.5%')
    },
    buttonContainerStyle: {
        width: wp('42%')
    },
    buttonStyle: {
        borderRadius: wp('1.5%'),
        paddingVertical: wp('3%'),
    },
    viewButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: wp('5%')
    },
    viewTextStyle: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        paddingBottom: wp('5%'),
        alignItems: 'center'
    }
})

export default ConditionScreen