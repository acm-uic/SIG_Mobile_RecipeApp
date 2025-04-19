import { View, Text, StyleSheet } from 'react-native';

export default function SavedRecipesScreen() {
  console.log('Navigated to Saved Recipes Screen');
    return (
      <View>
        <Text>Saved Recipes Screen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, // Ensures this view fills the entire screen
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', // Optional: Add a background color for visibility
    },
  });
  