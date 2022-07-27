import React, { useState,useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet,Dimensions } from 'react-native'
import { Feather,Entypo } from '@expo/vector-icons';
import * as Victory from 'victory-native'
import axios from 'axios'

const PriceChart = ({ route,navigation }) => {
    const [data,setData] = useState()
    const [coin,setCoin] = useState('bitcoin')
    const [period,setPeriod] =useState(30)
    const {price,percentage,name} = route.params

    useEffect(()=>{
        getData()
    },[coin,period])

    let getData = async()=>{
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30')
            const formData = response.data.prices.map(function(i){
                return {
                    x:i[0],
                    y:i[1]
                }

            })
            setData(formData)

        }catch(error){
            console.log(error)

        }
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.navigationHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.cosmos}>Cosmos price</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>$4,670.99</Text>

                    <View style={styles.iconOuterContainer}>
                        <TouchableOpacity style={styles.iconContainer}>
                        <Entypo name="star-outlined" size={20} color="black" />

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                        <Feather name="download" size={20} color="black" />

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.volumeContainer}>
                <Feather name="arrow-up-right" size={20} color="green" /><Text style={styles.volume}>$0.22 (2.50%)</Text>
                </View>



                <View style={styles.chart}>
                <Victory.VictoryLine
                    style={{
                        data:{
                            stroke:'#000',
                            strokeWidth:2
                        }
                    }}
                    width={Dimensions.get('window').width}
                    height={400}
                    data={data}/>





                </View>

                <View style={styles.dayscontainer}>
                    <Text  style={styles.hour}>
                        1H

                    </Text>

                    <Text style={styles.hour}>
                        1D
                        
                    </Text>

                    <Text style={styles.hour}>
                        1W
                        
                    </Text>
                    <Text style={styles.hour}>
                        1M

                        
                    </Text>
                    <Text style={styles.hour}>
                        1Y
                        
                    </Text>
                    <Text style={styles.hour}>
                        ALL
                        
                    </Text>
                
                </View>


            </View>
            <View style={styles.buyContainer}>
                <TouchableOpacity style={styles.buyButtonContainer}>
                    <Text style={styles.buy}>Buy</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%'

    },
    navigationHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 10

    },
    cosmos: {
        fontSize: 18,
        fontWeight: '800',
        color: 'grey'
    },
    priceContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        alignItems:'center'

    },
    price: {
        fontSize: 25,
        fontWeight: '700'
    },
    iconOuterContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'40%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    iconContainer:{
        padding:15,
        borderRadius:25,
        backgroundColor:'#edf0f3'

    },
    volumeContainer:{
        display:'flex',
        flexDirection:'row'
    },
    volume:{
        fontSize:15,
        color:'green',
        fontWeight:'700'
        
    },
    chart:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'



    },
    dayscontainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'


    },
    hour:{
        fontWeight:'700',
        color:'grey'
    },

    buyContainer:{
        position:'absolute',
        width:Dimensions.get('window').width,
        top:'80%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
        

    },
    buyButtonContainer:{
        width:'85%',
        paddingVertical:22,
        // backgroundColor:'blue',
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    buy:{
        color:'#fff',
        fontSize:15,
        fontWeight:'700'
    }


})




export default PriceChart