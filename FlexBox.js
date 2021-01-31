
// class Component
// Membuat class Component
import React, { Component } from "react";
import { Image, Text, View } from "react-native";

class FlexBox extends Component {
    render(){
        return( 
            <View>
                <View 
                    style={{
                        flexDirection:'row', 
                        backgroundColor:'#c8d6e5', 
                        alignItems:'center',
                        justifyContent: 'space-between'
                    }}>
                    <View style={{backgroundColor:'#c0392b', width:50, height: 50}}></View>
                    <View style={{backgroundColor:'#1abc9c', width:50, height: 50}}></View>
                    <View style={{backgroundColor:'#2980b9', width:50, height: 50}}></View>
                    <View style={{backgroundColor:'#f1c40f', width:50, height: 50}}></View>
                </View>

                <View style={{flexDirection:'row', justifyContent: 'space-between', margin:10}}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
                    <Image 
                        source={{
                            uri: 'https://placeimg.com/640/480/any'}}
                            style={{width:100, height:100, borderRadius:50, marginRight:14}}
                    />
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>Saepul Anwar</Text>
                        <Text>1000 Followers</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default FlexBox;