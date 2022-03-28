import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const HeaderComponent = ({ onParss = () => { } }) => {
    const { colors } = useTheme()
    return (
        <View style={styles.viewContainner}>
            <TouchableOpacity onPress={onParss} >
                <Icon name="arrow-left" color={colors.BACKGROUND_COMPONENT} size={wp('7%')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainner: {
        height: hp('5%')
    }
});

export default HeaderComponent