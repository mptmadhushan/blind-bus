import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';

import {LineChart, ProgressChart} from 'react-native-chart-kit';
import {getGlucose} from '../api/getGlucose';

export default function Humidity({navigation}) {
  const [bicycle, setBicy] = useState([0.4, 0.6, 0.8]);
  const [glucose2, setGlucose2] = useState();
  const [glucose, setGlucose] = useState();

  useEffect(() => {
    getGlucose()
      .then(response => {
        if (response.error) {
          console.log('error', response.error);
          // showToast(response.error);
          return;
        }
        const {data} = response;
        console.log(data);
        const newArray = data.map(element => element.labels);
        console.log(newArray); // [100, 200, 300]
        const newArray2 = data.map(element => element.datasets);
        console.log(newArray2); // [100, 200, 300]
        setGlucose(newArray);
        setGlucose2(newArray2);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
      });
    // handlePlay();
  }, []);
  return (
    <LinearGradient
      colors={[COLORS.black, COLORS.primary, COLORS.black]}
      style={styles.mainBody}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 0.7, 0.9]}>
      <Text style={styles.title}>Analyze</Text>
      <View style={styles.rowNorm}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Activity')}
          style={styles.slide1}>
          <View style={styles.centerFlex}>
            <Image
              source={require('../assets/humi.png')}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.15,
                height: SIZES.width * 0.15,
              }}
            />
            <Text style={styles.text001}>Humidity</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Water')}
          style={styles.slide1}>
          <View style={styles.centerFlex}>
            <Image
              source={require('../assets/swim.png')}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.15,
                height: SIZES.width * 0.15,
              }}
            />
            <Text style={styles.text001}>Temp</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Humidity')}
          style={styles.slide1}>
          <View style={styles.centerFlex}>
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
        </TouchableOpacity>
      </View>
      {bicycle ? (
        <ProgressChart
          data={{
            labels: ['Water', 'Humidity', 'Temp'],
            data: bicycle,
          }}
          width={SIZES.width * 0.9}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: COLORS.primary,
            backgroundGradientFrom: COLORS.primary,
            backgroundGradientTo: COLORS.secondary,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
              marginTop: 49,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          hideLegend={false}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : null}

      <View style={styles.row}>
        <View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1} />
            <Text style={styles.title1}>Min</Text>
            <Text style={styles.title1}>Max</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>Normal</Text>
            <Text style={styles.title1}>60</Text>
            <Text style={styles.title1}>70</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>Medium</Text>
            <Text style={styles.title1}>60</Text>
            <Text style={styles.title1}>70</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>High</Text>
            <Text style={styles.title1}> {'>'}120</Text>
          </View>
        </View>
        <View style={styles.avgBox}>
          <Text style={styles.title2}>Your Average</Text>
          {<Text style={styles.title2}>109</Text>}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: SIZES.width * 0.6,
  },
  text001: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  slide1: {
    // backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
    borderWidth: 0.6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    flex: 1,
    marginHorizontal: 10,
    maxWidth: SIZES.width * 0.27,
    height: SIZES.width * 0.25,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 45,
  },
  rowNorm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginTop: SIZES.height * 0.1,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
  avgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.3,
    height: SIZES.width * 0.3,
    borderRadius: 16,
  },
  mainBody: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    marginTop: SIZES.width * 0.02,
    fontSize: 25,
  },
  title1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 15,
    width: SIZES.width * 0.2,
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: SIZES.height * 0.1,
  },
});
