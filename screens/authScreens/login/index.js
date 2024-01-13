import { View, Text, TextInput, TouchableOpacity, Alert, Image, SafeAreaView } from "react-native";
import styles from "./style";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginAccount } from '../../../api/authApi.js'

import { useNavigation } from '@react-navigation/native';

import { LoginButton } from "../../../components/button.js";

import { Google, Facebook, Apple } from "../../../components/socials.js";


const LoginScreen = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            console.log("handleSubmit: " + email +", " + password)
            const login = await loginAccount(email, password);
            console.log("login status = " + login.status)

        if (login.status === true) {
            await AsyncStorage.setItem('authToken', login.token);
            console.log("login token = " + login.token)

            navigation.navigate('MyTabs');
        }
        } catch (error) {
            console.error("Error during login:", error);
        }
      };

    return(
            <View style={styles.container}>
            <View style={styles.top}>
            <Text style={{fontSize:20, fontWeight:'bold'}}> Hello Pet Lovers</Text>
                <Image source={require('../../../assets/pngpets.png')} resizeMode="contain" style={styles.img}/>
                
            </View>
            <View style={styles.inputs}>
                <TextInput placeholder="Email" style={styles.fields} value={email} onChangeText={(text) => setEmail(text)}/>
                <TextInput placeholder="Password" style={styles.fields} value={password} onChangeText={(text) => setPassword(text)}/>

                <TouchableOpacity style={{marginTop:10, marginBottom:10}} onPress={() => navigation.navigate('Forgot')}>
                <Text style={{padding:5}}>
                    Forgot password? 
                </Text>
                </TouchableOpacity >
                <LoginButton text="Login" onPress={handleSubmit}/>
                <Text style={{alignSelf: 'center'}}>- Or sign in with -</Text>

            <View style={styles.socials}>
                <Google onPress={() => Alert.alert("Google cliked")}/>
                <Facebook onPress={() => Alert.alert("FAcebook cliked")}/>
                <Apple onPress={() => Alert.alert("Apple cliked")}/>
            </View>
            </View>

        </View>     
    )
}

export default LoginScreen;