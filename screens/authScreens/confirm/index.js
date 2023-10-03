import { View, Text, StyleSheet } from "react-native";

const ConfirmScreen = () => {
    return(
        <View style={styles.container}>
            <Text>
                Auth Confirm Screen
            </Text>
        </View>
    )
}

export default ConfirmScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})