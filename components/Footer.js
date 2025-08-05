import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';

const Footer = ({ activeTab, onTabPress }) => {
  const tabs = [
    { name: 'HOME', icon: '🏠' },
    { name: 'LIBRARY', icon: '📚' },
    { name: 'FRIENDS', icon: '👥' },
    { name: 'PROFILE', icon: '👤' },
  ];

  const renderNavItem = (tab) => (
    <TouchableOpacity
      key={tab.name}
      style={[styles.navItem, activeTab === tab.name && styles.navItemActive]}
      onPress={() => onTabPress(tab.name)}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.navIcon, 
        { opacity: activeTab === tab.name ? 1 : 0.6 }
      ]}>
        {tab.icon}
      </Text>
      <Text style={[
        styles.navText, 
        { color: activeTab === tab.name ? '#14b8a6' : '#a3a3a3' }
      ]}>
        {tab.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <BlurView intensity={80} tint="dark" style={styles.navBar}>
        <View style={styles.navContainer}>
          {tabs.map(renderNavItem)}
        </View>
      </BlurView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
  backgroundColor: 'transparent',
},
  navBar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(139, 92, 246, 0.3)',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    minWidth: 60,
  },
  navItemActive: {
    backgroundColor: 'rgba(20, 184, 166, 0.1)',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  navText: {
    fontSize: 10,
    fontFamily: 'monospace',
    fontWeight: '600',
  },
});

export default Footer;