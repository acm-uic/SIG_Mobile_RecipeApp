import { Image, StyleSheet, Platform, TouchableOpacity, View, Modal, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useState } from 'react';

export default function HomeScreen() {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      console.log('Home screen is active');
      // do things like fetch data or start animations
    }
  }, [isFocused]);

  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image source={require('@/assets/images/fried_egg.png') } style={styles.image} />
      </TouchableOpacity>

      <Modal visible={visible} transparent={true} animationType="fade">
        <View style={styles.modal}>
          <Text style={styles.text}>Image Clicked!</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );


  // return (
  //   <ParallaxScrollView
  //     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
  //     headerImage={
  //       <Image
  //         source={require('@/assets/images/fried_egg.png')}
  //         style={styles.reactLogo}
  //       />
  //     }>
  //     <ThemedView style={styles.titleContainer}>
  //       <ThemedText type="title">Welcome!</ThemedText>
  //       <HelloWave />
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 1: Try it</ThemedText>
  //       <ThemedText>
  //         Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
  //         Press{' '}
  //         <ThemedText type="defaultSemiBold">
  //           {Platform.select({
  //             ios: 'cmd + d',
  //             android: 'cmd + m',
  //             web: 'F12'
  //           })}
  //         </ThemedText>{' '}
  //         to open developer tools.
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 2: Explore</ThemedText>
  //       <ThemedText>
  //         Tap the Explore tab to learn more about what's included in this starter app.
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
  //       <ThemedText>
  //         When you're ready, run{' '}
  //         <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
  //         <ThemedText type="defaultSemiBold">app-example</ThemedText>.
  //       </ThemedText>
  //     </ThemedView>
  //   </ParallaxScrollView>
  // );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 255)', // Semi-transparent background
    borderRadius: 20, // Smooth rounded corners
    width: '75%', // Full width
    height: '75%', // Full height
    position: 'absolute',
    top: 100, // Adjust this based on your top navigation height
    bottom: 100, // Adjust this based on your bottom navigation height
    left: 50, // Center horizontally
    right: 50, // Center horizontally
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
},);