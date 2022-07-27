import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';


const Login = ({navigation}) => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null)


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.navigationHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={30} color="black" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.headerText}>Sign in to coinbase </Text>

                <View>
                    <Text style={styles.emailText}>Email</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder='you@example.com'
                    />
                    <Text style={styles.passwordText}>Password</Text>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="visible-password"
                    />

                    <TouchableOpacity style={styles.submitBtn}>
                        <Text>Sign In</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.forgetPasswordCon}>
                    <TouchableOpacity style={styles.forgetPasswordText}>
                    <Text style={{color: 'blue'}}>Forget password?</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.privacyText}>

                    <Text style={{color: 'blue'}}>Privacy Policy</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'90%',
        marginHorizontal:'5%'

    },
    navigationHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 30

    },
    headerText: {
        fontSize:25,
        fontWeight:'600',
        fontFamily:'Montserrat',
        marginBottom:30
    },
    emailText: {
        fontSize:15,
        fontWeight:'500',
        fontFamily:'Montserrat',
        marginBottom:20
    },
    input: {
        borderWidth:1,
        borderColor:'#edf0f3',
        borderRadius:2,
        height:50,
        paddingHorizontal:10,
        fontFamily:'Montserrat',
        marginBottom:30,
        

    },
    passwordText: {
        fontSize:15,
        fontWeight:'500',
        fontFamily:'Montserrat',
        marginBottom:20

    },
    submitBtn: {
        width:'100%',
        height:70,
        borderRadius:10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'blue',
        fontFamily:'Montserrat',
        color:'#fff',
        fontWeight:550,
        marginBottom:30




    },
    forgetPasswordCon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    forgetPasswordText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start'

    },
    privacyText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end'

    },
   


})




export default Login