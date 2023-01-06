import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity,FlatList,Image,Keyboard,ActivityIndicator } from 'react-native'
import Toast from 'react-native-simple-toast';
import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {getUser,addUser,deleteUser,updateUser,setLoader} from '../redux/actions/userActions'
import { userData } from '../redux/reducers/userReducer'
import { Formik } from 'formik';

export default function HomeScreen() {
    const [name,setName] = useState(null)
    const [mob,setMob] = useState(null)
    const [id,setId] = useState(null)
    const [refresh,setRefresh] = useState(false)
    let data = useSelector((state)=>state.user);
    let loader = useSelector((state)=>state.loader);
 useEffect(()=>{
   setName(null)
   setMob(null)
   setId(null)
   setRefresh(false)
   dispatch(getUser())
 },[refresh])
    const dispatch = useDispatch()
    console.log("MyLoader",loader);
  return (
    <View>
      <View>
      <Text style={styles.heading}>Hello User, Welcome</Text>
      </View>
      <View>
        <TextInput style={styles.input}
         placeholder="Enter your name" 
         defaultValue={name}
         keyboardType="email-address"
         onChangeText={(e)=>{
          setName(e)
        } }/>
        <TextInput style={styles.input} 
        defaultValue={mob}
        keyboardType='number-pad'
        placeholder="Enter your Moblie" onChangeText={(e)=>setMob(e)}/>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity onPress={()=>{
          id == null ? dispatch(addUser({name,mob}))  : data.filter((item,index)=>{
            if(item.id === id){
            dispatch(updateUser({id,name,mob}))
            }
          })
          if(id){
            Toast.show("User updated",Toast.LONG,{backgroundColor:'black',textColor:'white'})
          }
          else{
            Toast.show("User is created",Toast.LONG,{backgroundColor:'black',textColor:'white'})
          }
          setRefresh(true)
          Keyboard.dismiss()
          
        }}>
        <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.heading}>List of Users</Text>
      </View>
      
      
           <ActivityIndicator size="large" color="#0000ff" animating={loader}  /> 
      
      
      {
        
        data.length == 0 ? <Text style={styles.heading}>No User Found</Text> 
        : <View>

        <View style={styles.showHeading}>
                <View style={styles.childView}>
                  <Text style={styles.text}>NAME</Text>
                  </View>
                <View style={styles.childView}>
                <Text style={styles.text}>MOBLIE</Text>
                  </View>
                <View style={styles.childView}>
                  <Text style={styles.text}>UPDATE</Text>
                  </View>
                <View style={styles.childView}>
                <Text style={styles.text}>DELETE</Text>
                  </View>
                </View>
  
          <FlatList
          data={data}
          keyExtractor={(data)=>data.id}
          renderItem={({item,index})=>{
            return <View>
                 <View style={styles.showHeading}>
                <View style={styles.childView}>
                  <Text style={styles.text}>{item.name}</Text>
                  </View>
                <View style={styles.childView}>
                <Text style={styles.text}>{item.mob}</Text>
                  </View>
                <View style={styles.childView}>
                  <TouchableOpacity onPress={()=>{
                    setId(item.id)
                    setName(item.name)
                    setMob(item.mob)
                   
                  }}>
  
  <Image source={require('../assests/edit.png')} style={styles.iconStyle}/>
  </TouchableOpacity >
                  </View>
                <View style={styles.childView}>
                <TouchableOpacity onPress={()=>{

                    dispatch(deleteUser(item.id))
                    setRefresh(true)
                    Toast.show("User deleted Successfully",Toast.LONG,{backgroundColor:'black',textColor:'white'})
  
                  }}>
  
  <Image source={require('../assests/bin.png')} style={styles.iconStyle}/>
  </TouchableOpacity>
                  </View>
                </View>
             
           
              </View>
          }}
          />
        </View>
      
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  iconStyle:{
    width:20,
    height:20,
    alignSelf:'center'
  },
  childView:{
    width:"25%"
  },
  showHeading:{
    flexDirection:'row',
    width:"100%",
    // justifyContent:'space-around',
    marginTop:"5%"
  },
  text:{
    fontSize:16,
    fontWeight:'800',
    textAlign:'center'
  },
    btnText:{
        color:'white',
        fontSize:18,
        fontWeight:'800',
        alignSelf:'center'
    },
    btnBox:{
        backgroundColor:'black',
        width:"40%",
        padding:"2%",
        marginHorizontal:"10%",
        borderRadius:8,
        alignSelf:'center',
        marginVertical:"3%",

    },
    heading:{
        fontSize:20,
        color:'grey',
        fontWeight:'bold',
        alignSelf:'center'
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        width:"70%",
        marginVertical:"3%",
        borderRadius:8,
        color:'black',
        fontSize:16,
        alignSelf:'center',
    }
})