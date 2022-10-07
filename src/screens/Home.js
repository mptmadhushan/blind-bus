/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {authLogout} from '../redux/authSlice';
import {clearUserToken} from '../shared/asyncStorage';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authLogout());
    clearUserToken()
      .then(() => {
        navigation.navigate('OnBoard');
      })
      .catch(() => {
        console.log('Handle me properly! Error clearing user token');
      });
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/arBg.jpeg')}>
      <LinearGradient
        colors={['transparent', COLORS.black, COLORS.black]}
        style={styles.overlay}>
        <View
          style={{
            marginTop: SIZES.height * 0.15,
          }}>
          <Text style={styles.title2}>Hello Kareem!</Text>
          <Text style={styles.title1}>What's new today?</Text>
        </View>
        <View style={styles.rowNorm}>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Activity')}
            style={styles.slide1}>
            <View style={styles.rowNw}>
              <Image
                source={require('../assets/reminder.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>Analyze</Text>
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('Water')}
            style={styles.slide1}>
            <View style={styles.rowNw}>
              <Image
                source={require('../assets/water.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.15,
                  height: SIZES.width * 0.15,
                }}
              />
              <Text style={styles.text001}>Water</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Humidity')}
            style={styles.slide1}>
            <View style={styles.rowNw}>
              <Image
                source={require('../assets/humi.png')}
                resizeMode="contain"
                style={{
                  width: SIZES.width * 0.25,
                  height: SIZES.width * 0.25,
                }}
              />
              <Text style={styles.text001}>Support</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => logOut()}>
          <Text style={styles.buttonTextStyle}>Log Out</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  slide1: {
    // backgroundColor: COLORS.secondary,
    // borderColor: COLORS.primary,
    // borderWidth: 0.6,
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    flex: 1,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.25,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 45,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 5,
  },
  overlay: {
    marginTop: SIZES.height * 0.2,
    height: SIZES.height * 0.8,
    // alignItems: 'center',
  },
  title1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: SIZES.width * 0.06,
  },
  rowNorm: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    flex: 1,
    marginTop: SIZES.height * 0.1,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
  rowNw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    width: SIZES.width * 0.7,
  },
  rowNorm2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginTop: SIZES.height * 0.02,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
  buttonStyle: {
    backgroundColor: '#C8723D',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#00BFA6',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonTextStyle: {
    fontFamily: 'Oh Whale - TTF',
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
