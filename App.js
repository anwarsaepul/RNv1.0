import React, { Component } from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 100, height:100, backgroundColor: '#34495e'}}></View>
      <Text>Hy</Text>
      <Away/>
      <Text>Saepul</Text>
      <Text>Anwar</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}}/>
      <BoxGreen />
      <Profile />
    </View>
  );
}

const Away = () => {
  return <Text>Awaay We</Text>
}

const Photo = () => {
  return ( < Image 
  source={{uri: 'https://placeimg.com/640/480/any'}} 
  style={{width: 100, height:100}}/>
  );
}

// Membuat class komponen

class BoxGreen extends Component{
  render(){
    return <Text>Ini Component dari class</Text>
  }
}


class Profile extends Component{
  render(){
    return (
    <View>
      <Image 
        source={{uri: 'https://placeimg.com/640/480/tech'}}
        style={{width: 100, height:100, borderRadius: 50}}
      />
      <Text style={{color: 'blue', fontSize: 24}}>Ini Gambar</Text>
    </View>
    );
  }
}
  
export default App;