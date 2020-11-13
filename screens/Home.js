import React from 'react';
import { View, Text,Image,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useFonts } from 'expo-font';
import { light } from '@eva-design/eva';


function Home(props){
    
    let [fontsLoaded] = useFonts({
        'Overpass-Black': require('../assets/fonts/Overpass-Black.ttf'),
        'Overpass-ExtraLight': require('../assets/fonts/Overpass-ExtraLight.ttf'),
      });

    const categaries =[{categary:'Available',color:"#eefbfb"},{categary:'Fast Food',color:"lightblue"},{categary:'Drinks',color:"pink"},{categary:'Ice cream',color:"lightgreen"},{categary:'Ice cream',color:"lightgreen"},{categary:'Drinks',color:"pink"},{categary:'Ice cream',color:"lightgreen"},]  
    const foods=[{color:'lightblue',image:require('../assets/Images/pizza.png')},{color:'lightblue',image:require('../assets/Images/french-fries.png')},{color:'lightblue',image:require('../assets/Images/salad.png')},{color:'lightblue',image:require('../assets/Images/ice-cream.png')}]
    
    return (
      <View style={{ flex: 1,backgroundColor:'#eefbfb', justifyContent: 'space-around' }}>
          <View style={{marginHorizontal:20,marginVertical:20}}>
            <View>
                <Text style={{ fontFamily: 'Overpass-Black',fontSize:35}}>Hungry?</Text>
                <Text style={{ fontFamily: 'Overpass-Thin',fontSize:25}}>{'Order & Eat.'}</Text>
            </View>
            <View style={{marginVertical:20,borderWidth:1,borderColor:'#b1c4c4',borderRadius:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TextInput 
                    style={{height:50,marginHorizontal:20}}
                    placeholder={'Search'} />
                        <Image style={{width:25,height:25,marginRight:10}}source={require('../assets/Images/magnifiying-glass.png')} />    
            </View>
        </View>
            <FlatList
                style={{marginVertical:0,marginLeft:20}}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                horizontal
                data={categaries}
                renderItem={({item})=>{
                    return(
                        <View style={{height:30,borderRadius:10,marginHorizontal:10,backgroundColor:item.color,justifyContent:'center'}}>
                            <Text style={{ fontFamily: 'Overpass-Thin',fontSize:15,marginHorizontal:5}}>{item.categary}</Text>
                        </View>
                    )
                }}
            />

            <FlatList
                style={{marginVertical:0,marginLeft:20}}
                // pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                horizontal
                data={foods}
                renderItem={({item})=>{
                    return(
                        <View style={{borderRadius:10,marginHorizontal:10,justifyContent:'center',alignItems:'center',backgroundColor:item.color,justifyContent:'center'}}>
                            <Image style={{height:100,width:100,marginHorizontal:10}} source={item.image}/>
                            <Text style={{ fontFamily: 'Overpass-Black',fontSize:15,marginHorizontal:5}}>Pizza</Text>
                            <Text style={{ fontFamily: 'Overpass-Thin',fontSize:15,marginHorizontal:5}}>Starting from</Text>
                            <Text style={{ fontFamily: 'Overpass-Black',fontSize:15,marginHorizontal:5}}>$5</Text>
                        </View>
                    )
                }}
            />
            
              <Text style={{ fontFamily: 'Overpass-Black',fontSize:15,marginHorizontal:25,marginTop:10}}>We recommend</Text>
              <FlatList
                style={{marginVertical:20,marginBottom:40,marginLeft:20}}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                horizontal
                data={foods}
                renderItem={({item})=>{
                    return(
                        <View style={{borderRadius:10,marginHorizontal:10,backgroundColor:item.color,justifyContent:'center'}}>
                            <Image style={{height:100,width:100}} source={item.image}/>
                            <Text style={{ fontFamily: 'Overpass-Black',fontSize:15,marginHorizontal:5}}>Pizza</Text>
                            <Text style={{ fontFamily: 'Overpass-Thin',fontSize:15,marginHorizontal:5}}>Starting from</Text>
                            <Text style={{ fontFamily: 'Overpass-Black',fontSize:15,marginHorizontal:5}}>$5</Text>
                        </View>
                    )
                }}
            />
      </View>
    );
      }




export default Home;