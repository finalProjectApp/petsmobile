import React, { useEffect, useState, useRef} from "react";
import { Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from './style';
import { getMyPets } from '../../../api/petApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            const token = await AsyncStorage.getItem('authToken');
            const pets = await getMyPets(token);
            setPetsList(pets);
            console.log(pets)
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
                        data = {petsList.myPets}
                        keyExtractor = {pet => pet._id}
                        renderItem = {({item : pet}) =>(
                            <PetFlatList 
                            pet = {pet}
                            clickMe = {()=>{
                                props.navigation.navigate('PetDetailsScreen', {pet})
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

