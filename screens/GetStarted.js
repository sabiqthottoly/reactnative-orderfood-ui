import React from 'react';
import { View, Text,Image,TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
// import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { createStackNavigator } from 'react-navigation-stack';


function GetStarted(props){
    let [fontsLoaded] = useFonts({
        'Overpass-Black': require('../assets/fonts/Overpass-Black.ttf'),
        'Overpass-ExtraLight': require('../assets/fonts/Overpass-ExtraLight.ttf'),
      });
      if (!fontsLoaded) {
        return <Text>loading</Text>;
      }else{
    return (
      <View style={{ flex: 1,backgroundColor:'#eefbfb', alignItems: 'center', justifyContent: 'space-around' }}>
        {console.log(props)}
       <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Text style={{ fontFamily: 'Overpass-Black',fontSize:55,}}>ORIX</Text>
        <Text style={{ fontFamily: 'Overpass-Black',fontSize:17,lineHeight:18}}>food land</Text>
        <Text style={{fontSize:14,color:"grey"}}>Hungry? Order and Eat</Text>
       </View>
       <View style={{borderRadius:15}}>
        <Image
            style={{height:200,width:200,margin:20}}
            source={require('../assets/Images/burger.png')}
        />
       </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}style={{backgroundColor:'white',marginBottom:20,elevation:2,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:15}}>
            <Text style={{ fontFamily: 'Overpass-Black',fontSize:20,margin:20}}>Get started</Text>
            <View style={{backgroundColor:'black',borderRadius:15,marginRight:5}}>
                <Image
                 style={{height:50,width:50,tintColor:'white',margin:5}}
                 source={require('../assets/Images/right-arrow.png')}/>
            </View>
        </TouchableOpacity>
      </View>
    );
      }
}



export default GetStarted;