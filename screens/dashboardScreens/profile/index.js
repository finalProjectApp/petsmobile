import { View, Text, StyleSheet } from "react-native";
import { Exit } from "../../../components/icons";

const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <Text>
                Dashboard stack Profile Screen
            </Text>
            <Exit />
        </View>
    )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})