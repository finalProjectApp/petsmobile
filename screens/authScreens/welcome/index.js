import { View, Text, Image } from "react-native";
import { Button } from "../../../components/button";
import styles from "./style";

const WelcomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            
            <Text style={styles.h1}> Hello Pet Lovers </Text>
            <Text style={styles.welcome}> Welcome to Our Pack </Text>
            <Image source={require('../../../assets/babycat.webp')} style={styles.img}/>

            <View style={styles.logos} />

            <View style={styles.button}>
                <Button text="Login" onPress={() => navigation.push('Login')}/>
                <Button text="Sign Up" onPress={() => navigation.push('Register')}/>
            </View>
            
        </View>
    )
}

export default WelcomeScreen;