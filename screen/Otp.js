import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react'

const Otp = () => {

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourInput = useRef();
    const[c1, setC1]=useState('');
    const[c2, setC2]=useState('');
    const[c3, setC3]=useState('');
    const[c4, setC4]=useState('');
    const[c, setC]=useState('');


  return (
    <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
      <View style={{flexDirection:'row'}}>

        <TextInput  style={styles.input} 
            onChangeText={
                text =>{text && secondInput.current.focus();
                    setC1(text);
            }}            
            ref={firstInput}
            keyboardType="number-pad"
            maxLength={1}
            
        />

        <TextInput  style={styles.input} 
            onChangeText={text =>{
                text ? thirdInput.current.focus()
                :firstInput.current.focus();  
                setC2(text);              
            }}
            ref={secondInput}          
            keyboardType="number-pad"
            maxLength={1}
        />

        <TextInput  style={styles.input} 
        onChangeText={text =>{
            text ? fourInput.current.focus()
            :secondInput.current.focus();
            setC3(text);
        }}
        ref={thirdInput}       
        keyboardType="number-pad"
        maxLength={1}/>

        <TextInput  style={styles.input} 
        onChangeText={text =>{
            text ? fourInput.current.focus()
            :thirdInput.current.focus(); 
            setC4(text);         
        }}
        ref={fourInput}       
        keyboardType="number-pad"
        maxLength={1}/>
      </View>
      
     
      
      <TouchableOpacity onPress={()=>{
        setC(c1.toString()+c2.toString()+c3.toString()+c4.toString())
        // setC1('');setC2('');setC3('');setC4('');
    }}>
      <View style={{alignItems:'center', marginTop:20, backgroundColor:'orange', padding:10, borderRadius:10}}>
        <Text style={{fontSize:20}}>Verifier {c}</Text>
      </View>
      </TouchableOpacity>
    </View>

  )
}

export default Otp

const styles = StyleSheet.create({
    input:{
        backgroundColor:"orange",
        height:50,
        width:50,
        borderColor:'black',
        borderWidth:1,
        margin:10,
        borderRadius:10, 
        textAlign:'center',
        fontSize:20 
           
    }
})