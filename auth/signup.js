import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal } from 'react-native'

import CheckBox from 'expo-checkbox'
import { AntDesign } from '@expo/vector-icons';
import * as Progress from 'react-native-progress'



const Signup = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null)
    const [isSelected, setSelection] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {

            e.preventDefault();
            setModalVisible(true)


        });

    }, [navigation]);


    let navigateHandler = () => {
        navigation.removeListener('beforeRemove')
        navigation.goBack()

    }

    return (<>
        <Modal

            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalView}>
                <Text style={styles.modalQuest}>Are you sure you don't want to create a new account?</Text>

                <Text style={styles.modalState}>you can always try again?</Text>

                <View style={styles.modalButtonContainer}>
                    <TouchableOpacity style={styles.acceptBtn} onPress={() => navigateHandler()} >
                        <Text>yes, i'm sure</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
                        <Text>cancel</Text>

                    </TouchableOpacity>
                </View>

            </View>


        </Modal>

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.navigationHeader}>
                    <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                        <AntDesign name="close" size={22} fontWeight={100} color="black" style={{ fontWeight: '200' }} />
                    </TouchableOpacity>
                    <View style={styles.progress}>
                        <View style={styles.progressbar}>
                            <Progress.Bar progress={0.3} width={50} height={4} unfilledColor='#edf0f3' borderColor='#fff' />

                        </View>
                        <View style={styles.progressbar}>
                            <Progress.Bar progress={0} width={50} height={4} unfilledColor='#edf0f3' borderColor='#fff' />

                        </View>
                        <View style={styles.progressbar}>
                            <Progress.Bar progress={0} width={50} height={4} unfilledColor='#edf0f3' borderColor='#fff' />

                        </View>


                    </View>

                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 10, zIndex: 5 }}>
                    <Text style={styles.headerText}>Create your account</Text>

                    <View>
                        <Text style={styles.emailText}>First Name</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder='First Name'
                        />
                        <Text style={styles.passwordText}>Last Name</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Last Name"
                        />

                        <Text style={styles.passwordText}>Email</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Email Address"
                        />

                        <Text style={styles.passwordText}>Password</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Password"
                        />



                    </View>

                    <View style={styles.forgetPasswordCon}>
                        <TouchableOpacity style={styles.checkboxCon}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />


                        </TouchableOpacity>
                        <Text style={styles.privacyText}>
                            I certify that i am 18 years of age or older,and i agree to the <Text style={styles.agreement}>User agreement</Text> and <Text style={styles.policy}>Privacy Policy</Text>
                        </Text>


                    </View>
                    <TouchableOpacity style={styles.submitBtn}>
                        <Text>Create account</Text>
                    </TouchableOpacity>


                    <Text style={styles.protection}>
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply

                    </Text>

                </ScrollView>




            </View>

        </SafeAreaView>
    </>
    )




}




const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        top: '65%',
        height: '35%',
        display: 'flex',
        flexDirection: 'column',
        borderTopColor: '#edf0f3',
        borderTopWidth: 1




    },
    modalQuest: {
        paddingTop: 20,
        fontSize: 18,
        fontFamily: 'Montserrat',
        alignSelf: 'center',
        fontWeight: '600',
        paddingHorizontal: 15,

    },
    modalState: {
        paddingTop: 10,
        fontSize: 15,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        marginBottom: 15,
        alignSelf: 'flex-start',
        paddingHorizontal: 15,

    },
    modalButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 2,

    },
    acceptBtn: {
        width: '50%',
        borderRadius: 50,
        paddingTop: 25,
        paddingBottom: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontFamily: 'Montserrat',
        borderWidth: 1,
        borderColor: '#edf0f3',
    },
    cancelBtn: {
        width: '35%',
        paddingTop: 25,
        paddingBottom: 25,
        borderRadius: 50,
        backgroundColor: '#edf0f3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat'

    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    container: {
        width: '90%',
        marginHorizontal: '5%',
        paddingTop: 60

    },
    navigationHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        zIndex: 10,
        borderColor: 'white',



    },
    progress: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        paddingLeft: 40,
        justifyContent: 'space-around'

    },
    progressbar: {
        paddingLeft:8

    },
    close: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',


    },
    headerText: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        marginBottom: 10
    },
    emailText: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        marginBottom: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#edf0f3',
        borderRadius: 2,
        height: 50,
        paddingHorizontal: 10,
        fontFamily: 'Montserrat',
        marginBottom: 5,


    },
    passwordText: {
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'Montserrat',
        marginBottom: 10

    },
    submitBtn: {
        width: '100%',
        height: 70,
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        fontFamily: 'Montserrat',
        color: '#fff',
        fontWeight: '550',
        marginBottom: 30




    },
    forgetPasswordCon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    checkboxCon: {
        width: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginRight: 10,
        paddingTop: 5

    },
    privacyText: {
        fontFamily: 'Montserrat',
        width: '95%',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 20,
        alignSelf: 'flex-start',


    },
    agreement: {
        fontFamily: 'Montserrat',
        fontWeight: '300',
        fontSize: 14,
        height: 20,

    },
    policy: {
        fontFamily: 'Montserrat',
        fontWeight: '300',
        fontSize: 14,
        height: 20,
    },
    protection: {
        fontFamily: 'Montserrat',
        fontWeight: '600'
    }


});




export default Signup