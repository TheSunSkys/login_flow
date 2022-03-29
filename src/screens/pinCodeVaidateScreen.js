import React, { useState, useMemo, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import PINCode from '@haskkor/react-native-pincode'
import { useTranslation } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons'

import { AuthContext } from "../navigation/auth";

const SCREEN_WIDTH = Dimensions.get("window").width;

const PinCodeValidateScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const { colors } = useTheme()
    const [pin, setPin] = useState(null)
    const { signIn } = useContext(AuthContext);

    const onFinishProcess = (pinCode) => {
        console.log('pinCode: ', pinCode)
        signIn()
    }

    const getPinCode = async () => {
        const pincode = await AsyncStorage.getItem('@pincode')
        setPin(pincode)
    }

    useMemo(() => {
        getPinCode()
    }, [])

    return (
        <View style={styles.viewContainerStyle}>
            <PINCode
                passwordLength={6}
                status={'enter'}
                titleEnter={t('enter pin code')}
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
                bottomLeftComponent={() => <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="fingerprint" size={wp('15%')} color={colors.BACKGROUND_COMPONENT} />
                </View>}
                colorCircleButtons={colors.BACKGROUND_COMPONENT}
                colorPassword={colors.BACKGROUND_COMPONENT}
                storedPin={pin}
                finishProcess={e => onFinishProcess(e)}
                buttonDeleteText={null}
                timeLocked={5000}
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

export default PinCodeValidateScreen