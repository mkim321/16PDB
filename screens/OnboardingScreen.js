import { StyleSheet, View, Image } from "react-native";

import { ThemeProvider, Text } from "react-native-elements";

import { typeTheme } from "../themes/typeTheme";

export default function OnboardingScreen({ navigation }) {
    return(
        <ThemeProvider theme={typeTheme}>
            <View style={styles.container}>
                <Image style={styles.logoImage} source={require('../assets/images/logo.png')}/>
                <Image style={styles.wordmarkImage} source={require('../assets/images/16pdb.png')}/>
                <Image style={styles.mainImage} source={require('../assets/images/onboard1.png')}/>
                <Text style={styles.headingContent}>Welcome to 16PDB</Text>
                <Text style={styles.bodyContent}>All 16 personality traits at your fingertips, instantly searchable</Text>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logoImage:{
        width: 58,
        height: 67,
    },
    wordmarkImage:{
        width: 103,
        height: 21,
    },
    mainImage: {
        aspectRatio: 1,
        height: 424,
        width: 339,
        alignItems: 'center',
        marginTop: 140,
    },
    headingContent: {
        size: 22,
        fontFamily: 'Montserrat_600SemiBold',
        textTransform: 'uppercase',
        marginTop: 30,
    },
    bodyContent: {
        size: 16,
        fontFamily: 'Montserrat_500Medium',
        textAlign: 'center',
        width: 300,
    },
});