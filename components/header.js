import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from 'react-native-vector-icons/Entypo';

export default Header = (props) =>{
    return(
        <LinearGradient colors={['#00e5ff', '#1200ff']} start={[0.1,0.1]} end={[1,1]} style={styles.linear}>
            <Text style={styles.txt}>{props.text}</Text>
            <TouchableOpacity onPress={props.onPress} style={styles.backBtn}>
                <Entypo name={props.iconName} size={30} color={'#1200ff'}/>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linear:{
        height: 200,
        justifyContent:'center',
        borderBottomRightRadius:200,
        padding:20
    },
    txt:{
        color:'#fff',
        fontSize: 30,
        fontWeight: 700
    },
    backBtn:{
        position:'absolute',
        bottom:20,
        left:20,
        backgroundColor: "yellow",
        height: 40, width: 40,
        justifyContent:'center', alignItems:'center',
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20
    }
})