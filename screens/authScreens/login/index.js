import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { useState } from "react";

import Header from "../../../components/header";
import Button from "../../../components/button";

import { Google, Facebook, Apple } from "../../../components/socials.js";


const LoginScreen = ({navigation}) => {

    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    return(
        <View style={styles.container}>
            <Header onPress={() => navigation.goBack()} text="Login To Your Account" iconName="arrow-left"/>
            <View style={styles.inputs}>
                <TextInput placeholder="Email" style={styles.fields}/>
                <TextInput placeholder="Password" style={styles.fields}/>

                <TouchableOpacity style={{marginTop:10, marginBottom:10}} onPress={() => navigation.navigate('Forgot')}>
                <Text style={{padding:5}}>
                    Forgot password? 
                </Text>
                </TouchableOpacity>
                <Button text="Login"/>
            </View>

            <Text style={{alignSelf: 'center'}}>- Or sign in with -</Text>

            <View style={styles.socials}>
                <Google onPress={() => Alert.alert("Google cliked")}/>
                <Facebook onPress={() => Alert.alert("FAcebook cliked")}/>
                <Apple onPress={() => Alert.alert("Apple cliked")}/>
            </View>
            <Text>

            </Text>
        </View>
    )
}

export default LoginScreen;