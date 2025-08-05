import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BackgroundWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0a0e1a', '#1a1f2e', '#1e2533']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default BackgroundWrapper;
