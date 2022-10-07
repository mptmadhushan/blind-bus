/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';

const AdminNearBy = () => {
  const data = [
    {
      id: 1,
      title: 'suger',
      desc: 'Qui est duis id do eu pariatur velit magna ipsum est sint ex mollit.Mollit in ex velit duis ipsum amet cillum velit consequat.',
      image:
        'https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 2,
      title: 'suger 2',
      desc: 'Consequat minim irure commodo laboris ea mollit quis cillum consequat dolor.',
      image:
        'https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 3,
      title: 'suger 3',
      desc: 'Laborum cupidatat commodo ex labore officia minim id veniam minim labore.Non culpa laboris tempor fugiat. s',
      image:
        'https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 4,
      title: 'suger',
      desc: 'Qui est duis id do eu pariatur velit magna ipsum est sint ex mollit.Mollit in ex velit duis ipsum amet cillum velit consequat.',
      image:
        'https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 5,
      title: 'suger 2',
      desc: 'Consequat minim irure commodo laboris ea mollit quis cillum consequat dolor.',
      image:
        'https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 6,
      title: 'suger 3',
      desc: 'Laborum cupidatat commodo ex labore officia minim id veniam minim labore.Non culpa laboris tempor fugiat. s',
      image:
        'https://images.unsplash.com/photo-1606590277088-eeffbe973337?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    },
  ];
  return (
    <LinearGradient
      colors={[COLORS.black, COLORS.primary, COLORS.black]}
      style={styles.mainBody}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 0.7, 0.9]}>
      <Text style={styles.title3}>Instructions</Text>
      <FlatList
        data={data}
        // renderItem={renderItem}
        renderItem={({item}) => (
          <LinearGradient
            colors={[COLORS.black, COLORS.primary, COLORS.black]}
            style={styles.item}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 0.2, 0.88]}>
            <Image
              source={{uri: item.image}}
              resizeMode="contain"
              style={{
                resizeMode: 'cover',
                borderRadius: 5,
                width: SIZES.width * 0.2,
                height: SIZES.width * 0.2,
              }}
            />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.title2}>{item.desc}</Text>
            </View>
          </LinearGradient>
        )}
        keyExtractor={item => item.id}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderRadius: 5,
    backgroundColor: '#4792f1',
    padding: 20,
    flexDirection: 'row',
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 16,
    width: SIZES.width * 0.5,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title2: {
    fontSize: 15,
    marginLeft: 16,
    width: SIZES.width * 0.5,
    color: COLORS.white,
    textAlign: 'center',
  },
  title3: {
    fontSize: 30,
    width: SIZES.width * 0.5,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
  },
  mainBody: {
    flex: 1,
    alignItems: 'center',
  },
});

export default AdminNearBy;
