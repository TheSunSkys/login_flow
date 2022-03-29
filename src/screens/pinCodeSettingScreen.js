import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import PINCode from '@haskkor/react-native-pincode'
import { useTranslation } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from "@react-navigation/native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const PinCodeSettingScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()

    const onFinishProcess = async (pinCode) => {
        console.log('pinCode: ', pinCode)
        await AsyncStorage.setItem('@pincode', pinCode)
        navigation.navigate('FingerprintSettingScreen')
    }

    return (
        <View style={styles.viewContainerStyle}>
            <PINCode
                passwordLength={6}
                status={'choose'}
                titleConfirm={t('confirm pin code')}
                titleChoose={t('setting pin code')}
                subtitleChoose={' '}
                touchIDDisabled={true} //disable touchID and FaceID
                stylePinCodeDeleteButtonText={{
                    marginTop: 10
                }}
                stylePinCodeColumnDeleteButton={{
                    marginTop: 15
                }}
                stylePinCodeRowButtons={{
                    marginBottom: 5
                }}
                stylePinCodeColumnButtons={{
                    marginLeft: SCREEN_WIDTH * 0.06,
                    marginRight: SCREEN_WIDTH * 0.06
                }}
                stylePinCodeEmptyColumn={{
                    marginLeft: SCREEN_WIDTH * 0.06,
                    marginRight: SCREEN_WIDTH * 0.06
                }}
                colorCircleButtons={colors.BACKGROUND_COMPONENT}
                colorPassword={colors.BACKGROUND_COMPONENT}
                finishProcess={e => onFinishProcess(e)}
                buttonDeleteText={null}
                timeLocked={1000}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        paddingHorizontal: wp('5%'),
    }
})

export default PinCodeSettingScreen