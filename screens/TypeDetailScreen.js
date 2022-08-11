import React, { useState, useEffect } from 'react';

import { StyleSheet, View, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";

import TypeDetailContainer from '../components/TypeDetailContainer';

import { typeTheme } from "../themes/typeTheme";

export default function DetailScreen({ route, navigation }) {
    // get the params from the route
    const { detailId } = route.params;

    // add a useState for the search process
    const [text, onChangeText] = React.useState("Search for a personality");

    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    // add useEffect for the fetch process
    useEffect(() => {
        fetch('https://16pdbapiimg.misunkim.ca/classes/read.php?id=' + detailId)
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setDataResult(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, []);

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
                    {displayData(error, isLoaded, dataResult, navigation)}
                </View>
            </ScrollView>
        </ThemeProvider>
    );
}

function displayData(error, isLoaded, dataResult, navigation) {
    if (error) {
        // show an error message    
        return (
        <View>
            <Text>Error: {error.message}</Text>
        </View>
        );
    }
    else if (!isLoaded) {
        // show the ActivityIndicator (spinner)
        return (
        <View>
            <Text>Loading...</Text>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
        );
    }
    else if (dataResult.personality === undefined) {
        // not an error but no resorts, so show a message
        return (
        <View>
            <Text>No records found for search</Text>
        </View>
        );
    }
    else {
        // show the data in the FlatList
        return(
            <TypeDetailContainer currType={dataResult.personality[0]} navigatorRef={navigation} />
        );
    }
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
  });