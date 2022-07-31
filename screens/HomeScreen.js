import * as React from 'react';

import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { StyleSheet, View, TouchableOpacity, Image, Button } from "react-native";
import { Text, ThemeProvider } from "react-native-elements";

import { typeTheme } from "../themes/typeTheme";


export default function HomeScreen({ navigation }) {
    return(
        <ThemeProvider theme={typeTheme}>
            <View style={styles.container}>
            {/* <Box component="form" m={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Search" variant="filled" />
            </Box> */}
            <Text h2>Personality Group Types</Text>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                <Grid item xs={6}>
                    {/* <Button title="" color='#CFBFD6'></Button> */}
                    <TouchableOpacity>
                        <Image
                        style={styles.imagebtn}
                        source={{uri:require('../assets/img/home-analyst.png')}}/>
                    </TouchableOpacity>
                </Grid>
                <Grid item xs={6}>
                    <TouchableOpacity>
                        <Image
                        style={styles.imagebtn}
                        source={{uri:require('../assets/img/home-diplomat.png')}}/>
                    </TouchableOpacity>
                </Grid>
                <Grid item xs={6}>
                    <TouchableOpacity>
                        <Image
                        style={styles.imagebtn}
                        source={{uri:require('../assets/img/home-sentinel.png')}}/>
                    </TouchableOpacity>
                </Grid>
                <Grid item xs={6}>
                    <TouchableOpacity>
                        <Image
                        style={styles.imagebtn}
                        source={{uri:require('../assets/img/home-explorer.png')}}/>
                    </TouchableOpacity>
                </Grid>
                </Grid>
            </Box>
            <Text h2>Take The Test</Text>
            <Button style={styles.btn} title='Official 16 Personality Test' color='#D6E9E1'></Button>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: '#fff'
    },
    btn: {
        color: '#372F3A',
        fontFamily: 'Montserrat_500Medium',
        marginBottom: 20,
    },
    imagebtn: {
        width:'100%',
        alignSelf: 'center',
        height: 300
    }
  });