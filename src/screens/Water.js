import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {getBlood} from '../api/getBlood';

export default function Humidity() {
  const [blood, setBlood] = useState();
  const [blood2, setBlood2] = useState();
  const [bloodAvg, setBloodAvg] = useState();
  const [bloodMax, setBloodMax] = useState();
  const [bloodMin, setBloodMin] = useState();

  useEffect(() => {
    getBlood()
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
        setBlood(newArray);
        setBlood2(newArray2);
        let result = newArray2.map(i => Number(i));
        console.log(result);
        setBloodAvg(result);
        setBloodMax(Math.max(...result));
        setBloodMin(Math.min(...result));
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
      <Text style={styles.title}>Water</Text>
      {blood2 ? (
        <LineChart
          data={{
            labels: blood,
            datasets: [
              {
                data: blood2,
                // data: ['65.32', '63.76', '56.46', '87.50', '76.34', '45.75'],
              },
            ],
          }}
          width={SIZES.width * 0.9} // from react-native
          height={220}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: COLORS.primary,
            backgroundGradientFrom: COLORS.primary,
            backgroundGradientTo: COLORS.secondary,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : null}
      <ProgressChart
        data={{
          labels: ['Water'], // optional
          data: [0.8],
        }}
        width={SIZES.width * 0.9}
        height={220}
        strokeWidth={16}
        radius={62}
        chartConfig={{
          backgroundColor: COLORS.primary,
          backgroundGradientFrom: COLORS.primary,
          backgroundGradientTo: COLORS.secondary,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
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
      <View style={styles.row}>
        {bloodMax ? (
          <View>
            <View style={styles.rowFlex}>
              <Text style={styles.title1}>Min</Text>
              <Text style={styles.title1}>{bloodMin}</Text>
            </View>
            <View style={styles.rowFlex}>
              <Text style={styles.title1}>Average</Text>
              <Text style={styles.title1}>
                {bloodAvg
                  .reduce((p, c, _, a) => p + c / a.length, 0)
                  .toFixed(2)}
              </Text>
            </View>
            <View style={styles.rowFlex}>
              <Text style={styles.title1}>Max</Text>
              <Text style={styles.title1}>{bloodMax}</Text>
            </View>
          </View>
        ) : null}
        <View style={styles.avgBox}>
          <Text style={styles.title2}>Sufficient Water Level</Text>
          {/* {bloodAvg ? (
            <Text style={styles.title2}>
              {bloodAvg.reduce((a, b) => a + b, 0).toFixed(2)}
            </Text>
          ) : null} */}
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
    // width: SIZES.width * 0.5,
    marginRight: SIZES.width * 0.15,
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
    marginTop: SIZES.width * 0.04,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 15,
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
    fontSize: 17,
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
  },
});
