import React from 'react';
import { View, Text,Image,TouchableOpacity,TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
// import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { createStackNavigator } from 'react-navigation-stack';


function Login(props){
    let [fontsLoaded] = useFonts({
        'Overpass-Black': require('../assets/fonts/Overpass-Black.ttf'),
        'Overpass-ExtraLight': require('../assets/fonts/Overpass-ExtraLight.ttf'),
        'Overpass-Thin': require('../assets/fonts/Overpass-Thin.ttf'),
      });
      if (!fontsLoaded) {
        return <Text>loading</Text>;
      }else{
    return (
      <View style={{ flex: 1,backgroundColor:'#eefbfb', alignItems: 'center', justifyContent: 'space-evenly' }}>
       
       <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
            <Text style={{ fontFamily: 'Overpass-Black',fontSize:55}}>ORIX</Text>
            <Text style={{ fontFamily: 'Overpass-Black',fontSize:17}}>food land</Text>
            <Text style={{fontSize:14,color:"grey"}}>Hungry? Order and Eat</Text>
       </View>

       <View style={{width:'80%',marginLeft:0}}>
           <Text style={{ fontFamily: 'Overpass-Black',fontSize:25}}>Welcome Back!</Text>
           <Text style={{ fontFamily: 'Overpass-ExtraLight',fontSize:15}}>Enter Your credentials to continue</Text>
       </View>

       <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{borderWidth:1,borderColor:'lightgrey',borderRadius:100/2,marginRight:10}}>
                 <Image style={{width:40,height:40,margin:10}}source={require('../assets/Images/google.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:1,borderColor:'lightgrey',borderRadius:100/2}}>
                 <Image style={{width:40,height:40,margin:10}}source={require('../assets/Images/facebook.png')}/>
            </TouchableOpacity>
          </View>
           <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',paddingHorizontal:0}}>
               <Text style={{ fontFamily: 'Overpass-Black',fontSize:13}}>OR</Text>
           </View>
           <View style={{height:1,backgroundColor:'lightgrey',width:'40%',alignSelf:'center'}}></View>
       </View>
       <View style={{width:"100%",alignItems:'center'}}>
            <View style={{width:'80%'}}>
                <Text style={{ fontFamily: 'Overpass-Black',fontSize:13,color:'grey',marginBottom:5}}>Email:</Text>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'lightgrey',width:'100%'}}>
                     <Image source={require('../assets/Images/email.png')} style={{height:25,width:25}}/>
                     <TextInput
                          style={{color:'black',marginLeft:10,marginBottom:5,fontFamily: 'Overpass-Black',width:220}}
                          placeholder={'sample@sample.com'}
                     />
                </View>
            </View>
            <View style={{width:'80%',marginTop:20}}>
                <Text style={{ fontFamily: 'Overpass-Black',fontSize:13,color:'grey',marginBottom:5}}>Password:</Text>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'lightgrey',width:'100%'}}>
                     <Image source={require('../assets/Images/padlock.png')} style={{height:25,width:25}}/>
                     <TextInput
                          style={{color:'black',marginLeft:10,marginBottom:5,fontFamily: 'Overpass-Black',width:220}}
                          placeholder={'password'}
                          secureTextEntry={true}
                     />
                </View>
            </View>
            <View style={{width:'80%'}}>
                 <Text style={{ fontFamily: 'Overpass-Black',fontSize:13,color:'black',marginBottom:5,marginTop:20,textAlign:'right'}}>Forgot Password</Text>
            </View>
       </View>
       

        <TouchableOpacity onPress={()=>props.navigation.navigate("HomeStack")} style={{backgroundColor:'white',elevation:10,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:15}}>
            <Text style={{ fontFamily: 'Overpass-Black',fontSize:17,margin:20}}>Log In</Text>
            <View style={{backgroundColor:'black',borderRadius:15}}>
                <Image
                 style={{height:50,width:50,tintColor:'white',margin:5}}
                 source={require('../assets/Images/right-arrow.png')}/>
            </View>
        </TouchableOpacity>
        <View style={{width:'80%',flexDirection:'row',justifyContent:'center'}}>
               <Text style={{ fontFamily: 'Overpass-Thin',fontSize:13,color:'grey',marginBottom:5,marginTop:20,textAlign:'center'}}>Don't have an account?</Text>
               <Text style={{ fontFamily: 'Overpass-Black',fontSize:13,color:'black',marginBottom:5,marginTop:20,textAlign:'center'}}> SignUp</Text>
         </View>
      </View>
    );
      }
}



export default Login;