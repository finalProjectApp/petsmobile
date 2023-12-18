import React, { useEffect, useState, useRef} from "react";
import { Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from './style';
import connect from '../../../connect/connect';
import PetFlatList from "./PetFlatList";

const PetsScreen = (props) => {
    const [ petsList, setPetsList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const flatListRef = useRef(null);

    useEffect(() => {
        getPets();
    },[]);

    const getPets = async() => {
        setIsLoading(true);      
        try {
            const response = await fetch(connect.baseUrl + '/getAllPets', { method:'get' });
            const pets = await response.json();
            setPetsList(pets);
            //console.log(pets)
        } catch (error) {
            console.error('Error fetching pets:', error);
        } finally {
            setIsLoading(false);
        }
    }


    const renderItem = ({ item : pet }) => (
        <TouchableOpacity style={styles.petCard}>
            <View >
            <Text style={styles.cardtxt}>nickname: {pet.name}</Text>
            <Text style={styles.cardtxt}>breed: {pet.breed}</Text>
            </View>
        </TouchableOpacity>
        
      );

 
    return(
        <View style={styles.container}>
            {
                isLoading ? (
                    <ActivityIndicator size='large' color={{color: '#ccc'}} />
                ) : (
                    <FlatList 
                        removeClippedSubviews={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        data = {petsList.pets}
                        keyExtractor = {pet => pet._id}
                        renderItem = {({item : pet}) =>(
                            <PetFlatList 
                            pet = {pet}
                            clickMe = {()=>{
                                props.navigation.navigate('PetDetailsScreen', {petId: pet._id})
                            }} 
                        ListEmptyComponent={<Text>No pets available</Text>}
                            />
                )}
                    />
                )
            }
        </View>
        
    )
}

export default PetsScreen;

