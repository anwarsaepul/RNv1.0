import React, { Component } from 'react';
import {Image, Text, TextInput, View, StyleSheet, ScrollView} from 'react-native';
import gambar from './gambar.jpg';

const StylingReactNativeComponent = () => {
    return(
      <View>
        <Text style={styles.text}>Styling Componen</Text>
        {/* ukuran fix */}
        <View style={{
          // Mengatur Lebar
          width:100, 
          // Mengatur Tinggi
          height:100, 
          // Mengatur background
          backgroundColor:'#456789', 
          // Mengatur ketebalan border
          borderWidth:2,
          // Mengatur warna pada border
          borderColor: '#987654',
          // Mengatur Jarak di atas
          marginTop: 20,
          // Mengatur Jarak kiri
          marginLeft: 20
          }}
        />
        
        <View style={{padding:12, marginTop: 15, backgroundColor: '#f2f2f2', width: 212}}>
          <Image 
            source={gambar} 
            style={{
              width: 188, 
              height:107, 
              borderRadius:8
            }}
          />
          <Text 
            style={{
              fontSize:14, 
              fontWeight:'bold', 
              marginTop:16
            }}>
              Coding
          </Text>
          
          <Text 
            style={{
              fontSize:12, 
              fontWeight:'bold', 
              color:'#987654'
            }}>
              React Native
          </Text>
  
          <Text 
            style={{
              fontSize:12, 
              fontWeight: '300', 
              marginTop: 12
            }}>
              Sukabumi
          </Text>
  
          <View 
            style={{
              backgroundColor: '#6fcf97', 
              paddingVertical:6,  
              borderRadius:25,
              marginTop:20
            }}>
            <Text 
              style={{
                fontSize: 14, 
                fontWeight: '600', 
                color:'white', 
                textAlign: 'center'
              }}>
                Daftar
            </Text>
          </View>
        </View>
      </View>
    )
  }
  
  
  // Membuat Component stylesheet
  const styles = StyleSheet.create({
    text: {
      // mengatur ukuran
      fontSize: 18,
      // mengatur ketebalan
      fontWeight: 'bold',
      // mengatur warna
      color: '#945654',
      // mengatur jarak
      margin: 10
    }
  
  })
  
  export default StylingReactNativeComponent;