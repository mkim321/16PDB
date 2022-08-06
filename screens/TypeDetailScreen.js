import React, { useState, useEffect } from 'react';

import { StyleSheet, View, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";
import { List } from 'react-native-paper';

import { typeTheme } from "../themes/typeTheme";

export default function DetailScreen({ navigation }) {
    const [text, onChangeText] = React.useState("Search for a personality");
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return(    
        <ThemeProvider theme={typeTheme}>
            <ScrollView>
                <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                    <Text h2>OverView</Text>
                    <View style={styles.btngrid}>
                        <View style={styles.row}>
                            <TouchableOpacity style ={styles.imgbtn}>
                                <Image
                                style={styles.imagebtn}
                                source={require('../assets/card/home-analyst.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style ={styles.imgbtn}>
                                <Image
                                style={styles.imagebtn}
                                source={require('../assets/card/home-diplomat.png')}/>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <List.Section title="" style={styles.accordlist}>
                        <List.Accordion title="Introduction" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                            <List.Item title="An Architect (INTJ) is a person with introverted, intuitive, thinking, and judging personality traits. They love perfecting the details in life, applying creativity and rationality to everything they do. They love to make their own discoveries, find better ways of doing things, and aren't afraid to break the rules or risk disapproval - as a matter of fact, they enjoy it." titleNumberOfLines={10}>
                            </List.Item>
                        </List.Accordion>
                        <List.Accordion title="Strengths" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                            <List.Item title="An Architect (INTJ) is a person with introverted, intuitive, thinking, and judging personality traits. They love perfecting the details in life, applying creativity and rationality to everything they do. They love to make their own discoveries, find better ways of doing things, and aren't afraid to break the rules or risk disapproval - as a matter of fact, they enjoy it." titleNumberOfLines={10}>
                            </List.Item>
                        </List.Accordion>
                        <List.Accordion title="Weakness" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                            <List.Item title="An Architect (INTJ) is a person with introverted, intuitive, thinking, and judging personality traits. They love perfecting the details in life, applying creativity and rationality to everything they do. They love to make their own discoveries, find better ways of doing things, and aren't afraid to break the rules or risk disapproval - as a matter of fact, they enjoy it." titleNumberOfLines={10}>
                            </List.Item>
                        </List.Accordion>
                        <List.Accordion title="Relationships" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                            <List.Item title="An Architect (INTJ) is a person with introverted, intuitive, thinking, and judging personality traits. They love perfecting the details in life, applying creativity and rationality to everything they do. They love to make their own discoveries, find better ways of doing things, and aren't afraid to break the rules or risk disapproval - as a matter of fact, they enjoy it." titleNumberOfLines={10}>
                            </List.Item>
                        </List.Accordion>
                        <List.Accordion title="Friendships" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                            <List.Item title="An Architect (INTJ) is a person with introverted, intuitive, thinking, and judging personality traits. They love perfecting the details in life, applying creativity and rationality to everything they do. They love to make their own discoveries, find better ways of doing things, and aren't afraid to break the rules or risk disapproval - as a matter of fact, they enjoy it." titleNumberOfLines={10}>
                            </List.Item>
                        </List.Accordion>
                        <List.Accordion title="Strengths" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                            <List.Item title="An Architect (INTJ) is a person with introverted, intuitive, thinking, and judging personality traits. They love perfecting the details in life, applying creativity and rationality to everything they do. They love to make their own discoveries, find better ways of doing things, and aren't afraid to break the rules or risk disapproval - as a matter of fact, they enjoy it." titleNumberOfLines={10}>
                            </List.Item>
                        </List.Accordion>
                    </List.Section>
                </View>
            </ScrollView>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 25,
      backgroundColor: '#fff',
      paddingBottom: 10,
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
    },
    accordlist:{
        backgroundColor: '#fff'
    },
    accordionbanner:{
        backgroundColor: '#CFBFD6',
        borderRadius: 10,
        marginBottom: 10
    },
    accordionbannertitle: {
        color:'#000',
    }
  });