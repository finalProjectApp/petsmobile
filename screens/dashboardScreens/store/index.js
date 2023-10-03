import { View, Text, StyleSheet } from "react-native";


const StoreScreen = () => {
    return(
        <View style={styles.container}>
            <Text>
                Dashboard Stack store screen
            </Text>
        </View>
    )
}

export default StoreScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})