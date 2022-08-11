import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Image} from "react-native";
import { ThemeProvider, Text } from "react-native-elements";
import { List } from 'react-native-paper';

import { typeTheme } from "../themes/typeTheme";

export default function TypeDetailContainer({ currType, navigatorRef}){

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return(    
        <ThemeProvider theme={typeTheme}>
            <View style={styles.container}>
                <View style={styles.btngrid}>
                    <Image
                    style={styles.imagebtn}
                    source={{uri:currType.imgurl}}/>
                </View>
                <List.Section title="" style={styles.accordlist}>
                    <List.Accordion title="Introduction" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                        <List.Item title={currType.introduction} titleNumberOfLines={10}>
                        </List.Item>
                    </List.Accordion>
                    <List.Accordion title="Strengths" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                        <List.Item title={currType.strengths} titleNumberOfLines={10}>
                        </List.Item>
                    </List.Accordion>
                    <List.Accordion title="Weakness" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                        <List.Item title={currType.weaknesses} titleNumberOfLines={10}>
                        </List.Item>
                    </List.Accordion>
                    <List.Accordion title="Relationships" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                        <List.Item title={currType.relationships} titleNumberOfLines={10}>
                        </List.Item>
                    </List.Accordion>
                    <List.Accordion title="Friendships" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                        <List.Item title={currType.friendships} titleNumberOfLines={10}>
                        </List.Item>
                    </List.Accordion>
                    <List.Accordion title="Strengths" style={styles.accordionbanner} titleStyle={styles.accordionbannertitle}>
                        <List.Item title={currType.strengths} titleNumberOfLines={10}>
                        </List.Item>
                    </List.Accordion>
                </List.Section>
            </View>
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
        flex:1,
        alignItems:'flex-end'
    },
    imagebtn: {
        width:292,
        height:80,
        // resizeMode:"contain"
    },
    title:{
        textAlign:'center',
        color:'#000',
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 18
    },
    accordlist:{
        backgroundColor: '#fff'
    },
    accordionbanner:{
        backgroundColor: '#e7e7e7',
        borderRadius: 10,
        marginBottom: 10
    },
    accordionbannertitle: {
        color:'#000',
    }

  });
