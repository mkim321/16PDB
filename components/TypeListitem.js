import { StyleSheet, TouchableOpacity, Image, View } from 'react-native'

export default function TypeListItem({ itemData, navigatorRef}) {


    return(
        <TouchableOpacity style ={styles.imgbtn}
            onPress={() => navigatorRef.navigate('Detail', {detailId: itemData.id})}>
            <Image
            style={styles.imagebtn}
            source={{uri:itemData.imgurl}}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imagebtn: {
        width:330,
        height:100,
        resizeMode: 'contain',
        alignSelf:'center',
        marginVertical:5
    }
});