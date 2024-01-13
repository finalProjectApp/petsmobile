import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = (props) =>{
    return(
        <LinearGradient colors={['#00e5ff', '#1200ff']} start={[0.1,0.1]} end={[1,1]} style={styles.linear}>
            <TouchableOpacity onPress={props.onPress} style={styles.btn}>
                <Text style={styles.txt}>{props.text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const LoginButton = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress} style={styles.loginbtn}>
            <Text style={styles.txt}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export { Button, LoginButton };

const styles = StyleSheet.create({
    linear:{
        borderRadius:5,
        marginTop:10,
        width: '100%'
    },
    btn:{
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009DD1'
    },
    loginbtn:{
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A3B68'
    },
    txt:{
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
    }
})