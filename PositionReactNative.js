import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Order from './order.png';

const PositionReactNative = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.OrderWrapper}>
                <Image source={Order} style={styles.iconOrder}/>
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}
export default PositionReactNative;

const styles = StyleSheet.create({
    wrapper: {padding:20, alignItems:'center'},
    OrderWrapper: {
        borderWidth:1, 
        borderColor:'#4398D1', 
        width:93, 
        height:93, 
        borderRadius:93/2,
        alignItems:'center',
        justifyContent:'center',
        position:'relative'

    },
    iconOrder: {width:50, height:50},
    text: {
        fontSize:12, 
        color:'#777777', 
        fontWeight:'700'
    },
    notif: {
        fontSize:12, 
        color:'white', 
        backgroundColor:'#6fcf97', 
        padding:4, 
        borderRadius:25, 
        width:24, 
        height:24,
        position:'absolute',
        top:0,
        right:0
    }
})
