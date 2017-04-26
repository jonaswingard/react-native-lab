import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import DayItem from './src/day-item'
import Moment from 'moment';

const Weekdays = React.createClass({
  render() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days() {
    const daysItems = [];

    for (var i = 0; i < 7; i++) {
      const day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems;
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('weekdays', function () {
  return Weekdays;
});
