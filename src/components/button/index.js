import React from "react";
import { StyleSheet } from "react-native";
import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';

const ButtonComponent = ({ title = "unknow", onPress = () => { } }) => {
    const { colors } = useTheme()
    return (
        <Button
            title={title}
            onPress={onPress}
            titleStyle={styles.titleStyle}
            buttonStyle={[styles.buttonStyle, { backgroundColor: colors.BACKGROUND_COMPONENT }]}
            containerStyle={styles.containerStyle}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '100%',
        marginVertical: wp('2.5%')
    },
    buttonStyle: {
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: wp('1%'),
        padding: wp('3%')
    },
    titleStyle: {
        fontWeight: '500'
    }
})

export default ButtonComponent