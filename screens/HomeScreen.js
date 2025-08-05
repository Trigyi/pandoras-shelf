import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { Search, User, Home, BookOpen, Users, UserCircle, Gamepad2 } from 'lucide-react-native';

// -------- CONFIG SCALE --------
const scaleFactor = 1.25;
const rfs = (size) => RFValue(size) / scaleFactor;

// ----- Game Card Component -----
const GameCard = ({ title, year }) => (
  <TouchableOpacity style={styles.gameCard}>
    <View style={styles.gameCardContent}>
      <Gamepad2 size={40} color="#8B5CF6" />
    </View>
    <Text style={styles.gameTitle}>{title}</Text>
    <Text style={styles.gameYear}>{year}</Text>
  </TouchableOpacity>
);

// ----- Activity Item Component -----
const ActivityItem = ({ user, activity, game, time, color = "#8B5CF6" }) => (
  <View style={styles.activityItem}>
    <View style={[styles.avatar, { backgroundColor: color }]}>
      <Text style={styles.avatarText}>{user.charAt(0)}</Text>
    </View>
    <View style={styles.activityContent}>
      <Text style={styles.activityText}>
        <Text style={styles.username}>{user}</Text>
        <Text style={styles.activityAction}> {activity} </Text>
        <Text style={styles.gameName}>{game}</Text>
      </Text>
      <Text style={styles.activityTime}>{time}</Text>
    </View>
  </View>
);

// ----- Bottom Tab Component -----
const BottomTab = ({ icon: Icon, label, active = false }) => (
  <TouchableOpacity style={styles.tabItem}>
    <Icon size={24} color={active ? "#10B981" : "#6B7280"} />
    <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
  </TouchableOpacity>
);

// ----- Main Screen -----
export default function GameVaultHome() {
  const recentReleases = [
    { title: "Cyberpunk 2077", year: "2024" },
    { title: "Neon Runner", year: "2024" },
    { title: "Space Odyssey", year: "2024" },
    { title: "Retro Quest", year: "2024" },
    { title: "Pixel Warriors", year: "2024" },
    { title: "Digital Dreams", year: "2024" }
  ];

  const friendsActivity = [
    { user: "Alex_Gamer", activity: "est en train de jouer à", game: "The Legend of Zelda", time: "Il y a 5 min", color: "#8B5CF6" },
    { user: "Sarah_RPG", activity: "a terminé", game: "Final Fantasy XVI", time: "Il y a 2h", color: "#EC4899" },
    { user: "Mike_Retro", activity: "a ajouté", game: "Hollow Knight", time: "Il y a 4h", color: "#06B6D4" }
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PANDORA'S SHELF</Text>
        <TouchableOpacity style={styles.profileButton}>
          <User size={24} color="#8B5CF6" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#6B7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un jeu..."
            placeholderTextColor="#6B7280"
          />
        </View>

        {/* Recent Releases */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dernières sorties</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gamesContainer}>
            {recentReleases.map((game, index) => (
              <GameCard key={index} title={game.title} year={game.year} />
            ))}
          </ScrollView>
        </View>

        {/* Friends Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Activité des amis</Text>
          <View style={styles.activityContainer}>
            {friendsActivity.map((activity, index) => (
              <ActivityItem
                key={index}
                user={activity.user}
                activity={activity.activity}
                game={activity.game}
                time={activity.time}
                color={activity.color}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <BottomTab icon={Home} label="HOME" active={true} />
        <BottomTab icon={BookOpen} label="LIBRARY" />
        <BottomTab icon={Users} label="FRIENDS" />
        <BottomTab icon={UserCircle} label="PROFILE" />
      </View>
    </SafeAreaView>
  );
}

// ----- Styles -----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },
  headerTitle: {
    fontSize: rfs(28),
    color: '#8B5CF6',
    letterSpacing: 1,
    fontFamily: 'Handjet-SemiBold',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginVertical: 20,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: '#F1F5F9',
    fontSize: rfs(18),
    fontFamily: 'Handjet-Regular',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: rfs(22),
    color: '#F1F5F9',
    marginBottom: 16,
    fontFamily: 'Handjet-SemiBold',
  },
  gamesContainer: {
    paddingLeft: 0,
  },
  gameCard: {
    width: 120,
    marginRight: 16,
  },
  gameCardContent: {
    width: 120,
    height: 160,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gameTitle: {
    color: '#F1F5F9',
    fontSize: rfs(16),
    marginBottom: 4,
    fontFamily: 'Handjet-Regular',
  },
  gameYear: {
    color: '#94A3B8',
    fontSize: rfs(14),
    fontFamily: 'Handjet-Regular',
  },
  activityContainer: {
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: rfs(18),
    fontFamily: 'Handjet-SemiBold',
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: rfs(16),
    marginBottom: 4,
    fontFamily: 'Handjet-Regular',
  },
  username: {
    color: '#10B981',
    fontFamily: 'Handjet-SemiBold',
  },
  activityAction: {
    color: '#F1F5F9',
    fontFamily: 'Handjet-Regular',
  },
  gameName: {
    color: '#8B5CF6',
    fontFamily: 'Handjet-SemiBold',
  },
  activityTime: {
    color: '#94A3B8',
    fontSize: rfs(14),
    fontFamily: 'Handjet-Regular',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    color: '#6B7280',
    fontSize: rfs(12),
    marginTop: 4,
    letterSpacing: 0.5,
    fontFamily: 'Handjet-Regular',
  },
  tabLabelActive: {
    color: '#10B981',
  },
});
