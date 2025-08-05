import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ onProfilePress }) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <BlurView intensity={80} tint="dark" style={styles.header}>
        <Text style={styles.logo}>GAMEVAULT</Text>
        <TouchableOpacity 
          style={styles.profileBtn} 
          onPress={onProfilePress}
          activeOpacity={0.8}
        >
          <Text style={styles.profileEmoji}>👤</Text>
        </TouchableOpacity>
      </BlurView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
  backgroundColor: 'transparent',
},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(139, 92, 246, 0.3)',
  },
  logo: {
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: '900',
    color: '#8b5cf6',
    letterSpacing: 1,
  },
  profileBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8b5cf6',
    borderWidth: 2,
    borderColor: '#a78bfa',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8b5cf6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  profileEmoji: {
    color: 'white',
    fontSize: 18,
  },
});

export default Header;