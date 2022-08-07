import * as React from 'react';

import { StyleSheet, View, TouchableOpacity, Image, TextInput, Linking } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";

import { typeTheme } from "../themes/typeTheme";

export default function HomeScreen({ navigation }) {
    const [text, onChangeText] = React.useState("Search");
    return(
        <ThemeProvider theme={typeTheme}>
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
                <Text h2>Personality Group Types</Text>
                <View style={styles.btngrid}>
                    <View style={styles.row}>
                        <TouchableOpacity style ={styles.imgbtn}
                        onPress={() => navigation.navigate('Analyst')}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/card/home-analyst.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style ={styles.imgbtn}
                        onPress={() => navigation.navigate('Diplomat')}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/card/home-diplomat.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style ={styles.imgbtn}
                        onPress={() => navigation.navigate('Sentinel')}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/card/home-sentinel.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style ={styles.imgbtn}
                        onPress={() => navigation.navigate('Explorer')}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/card/home-explorer.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            <Text h2>Take The Test</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => Linking.openURL('https://www.16personalities.com/')}>
                <Text style={styles.btntxt}>Official 16 Personality Test</Text>
            </TouchableOpacity>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
      backgroundColor: '#fff'
    },
    input:{
        fontFamily: 'Montserrat_500Medium',
        backgroundColor: '#F3F3F3',
        fontSize: 16,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:30,
        marginTop:24,
        marginBottom: 36
    },
    btngrid:{
        // position:'absolute',
        flex: 1,
        flexWrap: 'wrap',
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    imgbtn:{        
        width: 160,
        height: 210,
        marginBottom:20,
    },
    btn: { 
        backgroundColor: '#D6E9E1',
        marginBottom: 20,
        paddingVertical: 14,
        borderRadius: 10,
    },
    btntxt:{
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 20
    },  
    imagebtn: {
        width:160,
        height: 210
    }
  });