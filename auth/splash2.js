import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { FontAwesome, Feather } from '@expo/vector-icons'
import axios from 'axios'
import AppLoader from '../component/Loader'

let Welcome = ({ navigation }) => {
    //getting crypto data from coinmarcap
    const [assets, setAssets] = useState([])
    const [loader, setLoader] = useState(false)
  

   useEffect(() => {
    axios
      .get(`https://api.nomics.com/v1/currencies/ticker?key=ba615edc546028d0315b712302197dec5aff6fe6`)
      .then(function (response) {
        // console.log(response);
        setAssets(response.data)
        setLoader(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


   


    if (loader) {
        return <AppLoader />
    }


    return <SafeAreaView style={styles.screen}>
            <ScrollView>


                <View style={styles.top}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Over 89 million people tust us to trade crypto</Text>

                        <Text style={styles.terms}>*Terms Apply</Text>

                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/icons/wallet.jpeg')}
                            style={{ width: 220, height: 220 }} />

                    </View>

                </View>


                <View style={styles.middlesection}>

                    <View style={styles.headerContainer}>
                        <View style={styles.assetsheaderCon}>
                            <TouchableOpacity style={styles.tradableContainer}>
                                <Text style={styles.assetText}>Tradable </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.assetsTextCon}>
                                <Text style={styles.assetText}>
                                    All Assets
                                </Text>

                            </TouchableOpacity>

                        </View>


                        <TouchableOpacity style={styles.searchIconContainer}>
                            <FontAwesome name="search" size={20} color="black" />

                        </TouchableOpacity>


                    </View>



                    {assets.map((coin,index) => (
                        <TouchableOpacity  key={coin.id} style={{marginLeft:12,marginRight:17,paddingHorizontal:3,borderRadius:5,display:'flex',alignItems:'center'}} onPress={()=>navigation.navigate('PriceChart',{price:coin.price,peecentage:parseFloat(coin.market_cap_dominance).toFixed(2),name:coin.name})}  >

                            <View
                                style={styles.cryptoInfoCon}
                            >
                                <View >
                                    <Image
                                        source={{ uri: coin.logo_url }}
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 16,
                                            borderWidth: 0.5,
                                            borderColor: "#ddd",
                                        }}
                                    />
                                </View>

                                <View style={{ flex: 1, paddingLeft:10 }}>
                                    <Text style={{ fontSize: 17, fontWeight: "700" }}>{coin.name}</Text>
                                    <Text style={{ fontSize: 17, fontWeight: "500" }}>{coin.symbol}</Text>

                                </View>


                                <View style={{ paddingLeft: 10,display:'flex',flexDirection:'column' }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500',alignSelf:'flex-end' }}>${parseFloat(coin.price).toFixed(2)}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: "500", color: "#5d616d",alignSelf:'flex-end' }}>{Math.random() * 1000 > 1000 ? <Feather name="arrow-up-right" size={20} color="black" /> : <Feather name="arrow-down-right" size={20} color="black" />}{parseFloat(coin.market_cap_dominance).toFixed(2)}% </Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                    ))}


                </View>


            </ScrollView>


            <View style={styles.bottomsection}>
                <TouchableOpacity style={styles.bottombuttonsignup} onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.bottombuttonsignupText}>Sign up</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.bottombuttonsignin} onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.bottombuttonsigninText}>Sign in</Text>

                </TouchableOpacity>


            </View>

        </SafeAreaView>
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#edf0f3"

    },
    header: {
        paddingVertical: 60,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10

    },
    headerText: {
        fontFamily: 'Montserrat',
        fontSize: 25,
        fontWeight: '600',
        width: '80%',
        textAlign: 'center'

    },
    terms: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '400',
        fontFamily: 'Montserrat',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middlesection: {
        backgroundColor: '#fff',
        paddingBottom: 200
    },
    headerContainer: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%',
        justifyContent:'space-between'
        
    },
    searchIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#edf0f3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:15
    

    },
    assetsheaderCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        paddingLeft:15

    },
    tradableContainer: {
        padding: 5,
        borderRadius: 8,
        backgroundColor: '#edf0f3'

    },
    assetText: {
        fontWeight: '700',
        fontSize: 16,
        fontFamily: 'Montserrat',
        paddingLeft:15
    },
    /*
    styling crypto info

    */
   cryptoInfoCon: {
        paddingTop: 25,
        flexDirection: "row",
        alignItems: "center",
    }







    ,
    /* styling bottom section */
    bottomsection: {
        position: 'absolute',
        top: '85%',
        width: '100%',
        height: '15%',
        borderTopWidth: 1,
        borderTopColor: '#edf0f3',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'


    },
    bottombuttonsignin: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: '#edf0f3',
        width: '42%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Montserrat',
        fontSize: 20

    },
    bottombuttonsignup: {
        paddingVertical: 15,
        borderRadius: 25,
        backgroundColor: 'blue',
        width: '42%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontFamily: 'Montserrat',
        fontSize: 20

    },
    bottombuttonsignupText:{
        fontFamily: 'Montserrat',
        fontSize: 20,
        color:'#fff'

    },
    bottombuttonsigninText:{
        fontFamily: 'Montserrat',
        fontSize: 20

    }
})



export default Welcome