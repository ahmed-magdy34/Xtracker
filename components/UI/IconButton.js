import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: 'grey' }}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
});

export default IconButton;