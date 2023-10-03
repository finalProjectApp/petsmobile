import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const ForgotScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <LinearGradient colors={['#00e5ff', '#1200ff']} start={[0.1,0.1]} end={[1,1]} style={{height: 200, justifyContent:'center', borderBottomRightRadius:200, padding:20}}>
            <Text style={{color:'#fff', fontSize: 30, fontWeight: 700}}>
                Renew Your Password
            </Text>
            <TouchableOpacity style={{position:'absolute', bottom:30,left:20}} onPress={() => navigation.goBack()}>
                <Text>back</Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default ForgotScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})