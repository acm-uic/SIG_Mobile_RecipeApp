import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
});

type GreetingProps = {
  name: string;
  imageLink: any;
};

const Greeting = (props: GreetingProps) => {
  return (
    //<ScrollView style={styles.scrollView}>
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: props.imageLink }}
        />
    </View>
    //</ScrollView>
  );
};

Greeting.defaultProps = {
  name: "Jonathan",
  imageLink: "https://reactnative.dev/img/tiny_logo.png"
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Solacio" imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvcujRF4tCKlszbErZfezvSgvxwlh2vrHWTM2iMUtfg&s&ec=72940543"/>
      <Greeting name="Jamie" />
      <Greeting name="Teagan" />
      <Greeting />
      <Greeting imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvcujRF4tCKlszbErZfezvSgvxwlh2vrHWTM2iMUtfg&s&ec=72940543"/>
    </View>
  );
};

export default LotsOfGreetings;