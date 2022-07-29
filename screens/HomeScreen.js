import { StyleSheet, View, ImageBackground } from "react-native";

import { ThemeProvider, Text } from "react-native-elements";

import { typeTheme } from "../themes/typeTheme";

export default function HomeScreen({ navigation }) {
    return(
        <ThemeProvider theme={typeTheme}>
            <View style={styles.container}>
                <Text>Hello</Text>
            </View>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });