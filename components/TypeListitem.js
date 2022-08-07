import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'
import { ListItem, Text } from 'react-native-elements'

export default function TypeListItem({ itemData, navigatorRef}) {

    //const imgsource = '../assets/card' + itemData.type + '.png';

    return(
        <ListItem>
            <TouchableOpacity style ={styles.imgbtn}
                onPress={() => navigatorRef.navigate('Detail', {detailId: itemData.id})}>
                <View style={styles.container}>
                    <View style={styles.headingView}>
                        <Text style={styles.title}>{itemData.type}</Text>
                    </View>
                    <Image
                    style={styles.imagebtn}
                    source={{uri:itemData.imgurl}}/>
                </View>
                
            </TouchableOpacity>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        width:160,
        height: 210
    },
    headingView:{
        position:'absolute',
        zIndex:10,
        top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    title:{
        textAlign:'center',
        color:'#000',
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 18
    },
    imgbtn:{        
        width: 160,
        height: 210,
        marginBottom:20,
        flex:1
    },
    imagebtn: {
        width:160,
        height: 210
    }
});