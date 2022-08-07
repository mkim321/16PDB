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
                    <View style={styles.imgcontainer}>
                        <View style={styles.headingView}>
                            <Text style={styles.title}>{currType.type}</Text>
                        </View>
                        <Image
                        style={styles.imagebtn}
                        source={{uri:currType.imgurl}}/>
                    </View>
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
        // position:'absolute',
        flex: 1,
        flexWrap: 'wrap',
    },
    imagebtn: {
        width:160,
        height: 210
    },
    imgcontainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        width:160,
        height: 210,
    },
    headingView:{
        position:'absolute',
        zIndex:10,
        width: 160,
        top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
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
        backgroundColor: '#CFBFD6',
        borderRadius: 10,
        marginBottom: 10
    },
    accordionbannertitle: {
        color:'#000',
    }

  });
