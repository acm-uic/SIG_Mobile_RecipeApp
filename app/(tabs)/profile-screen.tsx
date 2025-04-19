import { View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

export default function ProfileScreen() {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      console.log('Profile screen is active');
      // do things like fetch data or start animations
    }
  }, [isFocused]);
    return (
      <View>
        <Text>Profile Screen</Text>
      </View>
    );
  }