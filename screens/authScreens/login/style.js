import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    inputs:{
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    fields: {
        width: '100%',
        borderRadius:5, 
        borderColor: '#c6c6c6', 
        borderWidth: 1,
        height:40, 
        lineHeight: 20,
        fontSize: 15, 
        padding: 5,
        margin: 5,
        
    },
    socials:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})