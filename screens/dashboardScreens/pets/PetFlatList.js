import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './style';

const PetFlatList = ({ pet, clickMe }) => {
    //const status = props.pet.status;
    //console.log(status);

  return (
    <TouchableOpacity style={styles.petCard} onPress={clickMe}>
      <View>
        <Text style={styles.cardtxt}>
          nickname: {pet.name}
        </Text>
        <Text style={styles.cardtxt}>
          breed: {pet.breed}
        </Text>
      </View>
      </TouchableOpacity>
  );
};

export default PetFlatList;
