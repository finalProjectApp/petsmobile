import React, { useState, useEffect} from "react";
import { View, Text } from "react-native";
import connect from "../../../connect/connect.js";

const PetsDetailsScreen = ({ route }) => {
    const  petId   = route.params.petId;
    //console.log(petId)
    const [petDetails, setPetDetails] = useState();
    //console.log("petDetails : ", petDetails)


    useEffect(() => {
        getPetDetails();
    },[]);

        const getPetDetails = async () => {
           
            try {
                const response = await fetch(connect.baseUrl + `/getPetById/${petId}`, { method:'get' });
                const pet = await response.json();
                setPetDetails(pet);
                //console.log("my pet ", pet)
                if (!response.ok) {
                    throw new Error(`Failed to fetch pet details. Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error fetching pet details:', error);
            }
        };


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {petDetails ? (
                <>
                    <Text>{petDetails.foundPet.name}</Text>
                    {/* Display other pet details as needed */}
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default PetsDetailsScreen;