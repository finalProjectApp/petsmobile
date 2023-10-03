import { Text, View, StyleSheet } from "react-native";


const PetsScreen = () => {
    return(
        <View style={styles.container}>
            <Text>
                Dashboard stack Pets Screen 
            </Text>
        </View>
    )
}

export default PetsScreen;

const styles = StyleSheet.create({
    container:{ flex: 1, justifyContent: 'center', alignItems: 'center' }
})