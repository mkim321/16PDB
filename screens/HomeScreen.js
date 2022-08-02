import * as React from 'react';

import { StyleSheet, View, TouchableOpacity, Image, Button, TextInput } from "react-native";
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
                        onPress={() => navigation.navigate('Type')}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/img/home-analyst.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style ={styles.imgbtn}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/img/home-diplomat.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style ={styles.imgbtn}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/img/home-sentinel.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style ={styles.imgbtn}>
                            <Image
                            style={styles.imagebtn}
                            source={require('../assets/img/home-explorer.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            <Text h2>Take The Test</Text>
            <Button style={styles.btn} title='Official 16 Personality Test' color='#D6E9E1'></Button>

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
        color: '#372F3A',
        fontFamily: 'Montserrat_500Medium',
        marginBottom: 20,
    },
    imagebtn: {
        width:160,
        height: 210
    }

  });