import { View, Text, StyleSheet } from "react-native";

const NewsScreen = () => {
    return(
        <View style={styles.container}>
            <Text>
                Dashboard Stack News Screen
            </Text>
        </View>
    )
}


export default NewsScreen;

const styles = StyleSheet.create({
    container:{ flex:1, justifyContent:'center', alignItems:'center' }
})