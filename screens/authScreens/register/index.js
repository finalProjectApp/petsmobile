import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";


import Header from "../../../components/header";

import { Google, Facebook, Apple } from "../../../components/socials";

const RegisterScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
           <Header text="Create new Account" iconName="arrow-left" onPress={() => navigation.goBack()}/>
           <View style={styles.inputs}>
                <TextInput placeholder="Email" style={styles.fields}/>
                <TextInput placeholder="Password" style={styles.fields}/>

                <Button text="Register"/>
            </View>

            <Text style={{alignSelf: 'center'}}>- Or sign up with -</Text>

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

export default RegisterScreen;