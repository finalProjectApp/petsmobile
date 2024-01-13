import React from "react";
import { View, Text } from "react-native";


const PetsDetailsScreen = ({ route }) => {
   
    const  pet = route.params.pet;
    console.log("PetsDetailsScreen: ", pet)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            <Text>{pet._id}</Text> 
            <Text>{pet.name}</Text>
            <Text>{pet.breed}</Text>
            <Text>{pet.gender}</Text>
        </View>
    );
};

export default PetsDetailsScreen;