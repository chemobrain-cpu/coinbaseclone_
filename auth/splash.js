import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { checkIfIsLoggedIn } from "../store/action/appStorage";

import { useSelector, useDispatch, } from "react-redux"

let Splash = ({ navigation }) => {
    let dispatch = useDispatch()

    let { token, user } = useSelector(state => state.userAuth)
    
    
  

    useEffect(() => {
        async function fetchData() {
            // You can await here
            let isLoggedIn = await dispatch(checkIfIsLoggedIn())
            if (isLoggedIn) {
                //navigate to the application
                return
            }
            //navigate to auth
            setTimeout(()=>{
                navigation.navigate('Splash_2')

            },5000)
            
        }
        fetchData()
    }, [dispatch, checkIfIsLoggedIn, navigation])
    //on this screen loads,check the sync storage for 


    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>

                <Text style={styles.text}>coinbase</Text>

            </View>




        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "blue"
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 30,
        
    }


})


export default Splash