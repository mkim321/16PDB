import React, { useState, useEffect } from 'react';

import { StyleSheet, View, TextInput, FlatList, ActivityIndicator, Linking, TouchableOpacity } from "react-native";
import { ThemeProvider, Text } from "react-native-elements";

import TypeListItem from '../components/TypeListitem';

import { typeTheme } from "../themes/typeTheme";

export default function AnalystScreen({ navigation }) {
    // add a useState for the search process
    const [text, onChangeText] = React.useState("Search");

    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    // add useEffect for the fetch process
    useEffect(() => {
        fetch('https://16pdbapiimg.misunkim.ca/classes/read.php?grouptype=analysts')
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
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
                <Text h2>Personality Group Types</Text>
                {displayDataContainer(error, isLoaded, dataResult, navigation)}
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

function displayDataContainer(error, isLoaded, dataResult, navigation) {
    // since the flatlist will be moved to this function we'll need the renderItem in scope
    const renderItem = ({ item }) => (
        <TypeListItem itemData={item} navigatorRef={navigation} />
    );

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
            <FlatList
            style={styles.btngrid}
            numColumns={2}
            data={dataResult.personality}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        );
    }
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
  });