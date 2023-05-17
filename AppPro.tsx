import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>

            <Text style = {isDarkMode ?  styles.whiteText : styles.darkText}>
                Hey there
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'flex-start', // Left to right 
        justifyContent : 'center' // Top to Bottom
    },
    whiteText :{
        color : "#FFFFFF"
    },
    darkText : {
        color : "#000000"
    }
})


export default AppPro;