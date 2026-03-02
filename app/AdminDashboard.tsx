import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Navbar from "../components/Navbar";

type RootStackParamList = {
  LoginPage: undefined;
  AdminDashboard: undefined;
  AdminTransactionUpload: undefined;
  AdminResults: undefined;
  Reports: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AdminDashboard"
>;

const { width } = Dimensions.get("window");
const MAX_WIDTH = 1100;

const mockStats = {
  totalSubmissions: 12,
  pendingReview: 15,
  verified: 250,
};

const AdminDashboard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogout = () => navigation.replace("index");

  return (
    <SafeAreaView style={styles.page}>
      <Navbar variant="admin" onLogout={handleLogout} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* ===== Welcome ===== */}
          <Text style={styles.sectionTitle}>Welcome, ADMIN!</Text>

          {/* ===== Stats Row ===== */}
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{mockStats.totalSubmissions}</Text>
              <Text style={styles.statLabel}>Total Submissions</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{mockStats.pendingReview}</Text>
              <Text style={styles.statLabel}>Pending Review</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{mockStats.verified}</Text>
              <Text style={styles.statLabel}>Verified</Text>
            </View>
          </View>

          {/* ===== Quick Actions ===== */}
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.quickActions}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("AdminTransactionUpload")}
            >
              <MaterialIcons name="file-upload" size={28} />
              <Text style={styles.cardLabel}>Upload Transaction History</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("AdminResults")}
            >
              <MaterialIcons name="fact-check" size={28} />
              <Text style={styles.cardLabel}>Review Submissions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Reports")}
            >
              <MaterialIcons name="bar-chart" size={28} />
              <Text style={styles.cardLabel}>View Reports</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminDashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#eef0f5",
  },
  scrollContainer: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  container: {
    width: "100%",
    maxWidth: MAX_WIDTH,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: width > 600 ? "row" : "column",
    justifyContent: "space-between",
    marginBottom: 40,
    gap: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#ecc45e",
    borderRadius: 14,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#1a1a2e",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 3,
  },
  statValue: {
    fontSize: 36,
    fontWeight: "800",
    color: "#000",
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: "#000",
  },
  quickActions: {
    flexDirection: width > 600 ? "row" : "column",
    gap: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#f59e0b",
    borderRadius: 14,
    padding: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1a1a2e",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 3,
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a2e",
    marginTop: 12,
    textAlign: "center",
  },
});