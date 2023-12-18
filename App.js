import React, { useState, useEffect } from 'react';
import { Auth, MyTabs} from './navigation'
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [tokenExist, setTokenExist] = useState(null);
  useEffect(() => {
    const checkForExistingToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        setTokenExist(Boolean(token));
      } catch (error) {
        console.error("Error checking for existing token:", error);
      }
    };

    checkForExistingToken();
  }, []);
  return (
    <>
      {tokenExist ? <MyTabs /> : <Auth />}
    </>
  )
}

export default App;