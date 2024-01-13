import Foundation from 'react-native-vector-icons/Foundation'; // Change 'FontAwesome' to the desired icon set
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Plus = (props) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={()=> navigation.navigate('CreatePet')}>
            <Foundation name="plus" size={40} color={'#c6c'}/>
        </TouchableOpacity>
    )
}


const Back = (props) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Foundation name="arrow-left" size={40} color={'#c6c'}/>
        </TouchableOpacity>
    )
}

const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared successfully');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };
  
  const Exit = () => {
    const handleExitPress = () => {
      // Display an alert to confirm before clearing AsyncStorage
      Alert.alert(
        'Confirmation',
        'Are you sure you want to exit and clear data?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: clearAsyncStorage,
          },
        ],
        { cancelable: false }
      );
    };
  
    return (
      <TouchableOpacity onPress={handleExitPress}>
        <Text>Exit</Text>
      </TouchableOpacity>
    );
  };

export { Plus, Back, Exit };