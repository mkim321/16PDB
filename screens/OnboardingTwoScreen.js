import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { ThemeProvider, Text } from "react-native-elements";

import { typeTheme } from "../themes/typeTheme";

// import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingTwoScreen({ navigation }) {
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
                
                <Image style={styles.mainImage} source={require('../assets/images/onboard2.png')}/>
                <Text style={styles.headingContent}>Direct Search</Text>
                <Text style={styles.bodyContent}>Know the personality trait? Search directly and learn more about it!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('OnboardingThree')}>
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
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
        marginTop: 50,
        marginLeft: 120,
    },
    mainImage: {
        aspectRatio: 1,
        height: 424,
        width: 339,
        alignItems: 'center',
        marginTop: 40,
    },
    headingContent: {
        fontSize: 22,
        fontFamily: 'Montserrat_600SemiBold',
        textTransform: 'uppercase',
        marginTop: 30,
    },
    bodyContent: {
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
        textAlign: 'center',
        width: 300,
        marginTop: 10,
    },
    nextBtn: {
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium',
        marginTop: 30,
        marginLeft: 260,
    }
});