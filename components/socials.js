import { StyleSheet, TouchableOpacity, Image } from "react-native";

import google from '../assets/socialIcons/google.png';
import facebook from "../assets/socialIcons/facebook.png";
import apple from "../assets/socialIcons/apple.png";


const Google = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Image source={google} style={styles.icon}/>
        </TouchableOpacity>
    )
}

const Facebook = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Image source={facebook} style={styles.icon}/>
        </TouchableOpacity>
    )
}

const Apple = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Image source={apple} style={styles.icon}/>
        </TouchableOpacity>
    )
}

export { Google, Facebook, Apple };

const styles = StyleSheet.create({
    icon:{width: 60, height: 60}
})