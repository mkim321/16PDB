import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { ThemeProvider, Text } from "react-native-elements";

import { typeTheme } from "../themes/typeTheme";

// import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingThreeScreen({ navigation }) {
    return(
        <ThemeProvider theme={typeTheme}>
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Image style={styles.logoImage} source={require('../assets/images/logo.png')}/>
                    <Image style={styles.wordmarkImage} source={require('../assets/images/16pdb.png')}/>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.skipBtn}>Skip</Text>
                    </TouchableOpacity>
                </View>
                
                <Image style={styles.mainImage} source={require('../assets/images/onboard3.png')}/>
                <Text style={styles.headingContent}>Browse Personalities</Text>
                <Text style={styles.bodyContent}>Look through all 16 types, easily browsable in 4 different groups.</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.nextBtn}>Next</Text>
                </TouchableOpacity>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    topBar: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    logoImage:{
        width: 58,
        height: 67,
        margin: 20,
    },
    wordmarkImage:{
        width: 103,
        height: 21,
        marginTop: 50,
    },
    skipBtn: {
        size: 16,
        fontFamily: 'Montserrat_500Medium',
        marginTop: 50,
        marginLeft: 160,
        color: 'rgba(39, 39, 39, 0.7)',
    },
    mainImage: {
        aspectRatio: 1,
        height: 424,
        width: 339,
        alignItems: 'center',
        marginTop: 40,
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
        marginTop: 10,
    },
    nextBtn: {
        size: 16,
        fontFamily: 'Montserrat_500Medium',
        marginTop: 50,
        marginLeft: 270,
        color: 'rgba(39, 39, 39, 0.7)',
    }
});