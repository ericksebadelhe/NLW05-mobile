import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
 } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import watImg from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const getName = async() => {
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setUserName(user ? JSON.parse(user) : '');
    }

    getName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={watImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  }
});


export default Header;