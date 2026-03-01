import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
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
import UpdateEmailModal from "../components/UpdateEmailModal";
import UpdatePasswordModal from "../components/UpdatePasswordModal";
import UpdatePhoneModal from "../components/UpdatePhoneModal";

/* ===== NAVIGATION TYPES ===== */

type RootStackParamList = {
  index: undefined;
  UserDashboard: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserDashboard"
>;

interface Payment {
  id: number;
  title: string;
  date: string;
  amount: string;
}

const { width } = Dimensions.get("window");
const MAX_WIDTH = 1100;

const UserDashboard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const user = {
    fullName: "Maria Santos",
    studentId: "2023-0001",
  };

  const payments: Payment[] = [
    {
      id: 1,
      title: "PTA Membership Fee",
      date: "Feb 20, 2026 • 2:30 PM",
      amount: "₱500.00",
    },
    {
      id: 2,
      title: "Event Contribution",
      date: "Jan 15, 2026 • 11:10 AM",
      amount: "₱300.00",
    },
  ];

  /* ===== MODAL STATE ===== */

  const [activeModal, setActiveModal] = useState<
    "password" | "email" | "phone" | null
  >(null);

  const closeModal = () => setActiveModal(null);

  return (
    <SafeAreaView style={styles.page}>
      <Navbar
        variant="user"
        onOpenModal={(modal) => setActiveModal(modal)}
        onLogout={() => navigation.replace("index")}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* ===== USER INFO ===== */}
          <View style={styles.infoRow}>
            <View>
              <Text style={styles.label}>Full Name</Text>
              <Text style={styles.value}>{user.fullName}</Text>
            </View>

            <View>
              <Text style={styles.label}>ID Number</Text>
              <Text style={styles.value}>{user.studentId}</Text>
            </View>
          </View>

          {/* ===== QUICK ACTIONS ===== */}
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardIcon}>📤</Text>
              <Text style={styles.cardLabel}>Upload Proof</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardIcon}>📄</Text>
              <Text style={styles.cardLabel}>View Payments</Text>
            </TouchableOpacity>
          </View>

          {/* ===== RECENT PAYMENTS ===== */}
          <Text style={styles.sectionTitle}>Recent Payments</Text>

          <View style={styles.paymentContainer}>
            {payments.map((payment) => (
              <View key={payment.id} style={styles.paymentItem}>
                <View>
                  <Text style={styles.paymentTitle}>
                    {payment.title}
                  </Text>
                  <Text style={styles.paymentDate}>
                    {payment.date}
                  </Text>
                </View>

                <Text style={styles.paymentAmount}>
                  {payment.amount}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* ===== MODALS ===== */}
      <UpdatePasswordModal
        visible={activeModal === "password"}
        onClose={closeModal}
      />

      <UpdateEmailModal
        visible={activeModal === "email"}
        onClose={closeModal}
      />

      <UpdatePhoneModal
        visible={activeModal === "phone"}
        onClose={closeModal}
      />
    </SafeAreaView>
  );
};

export default UserDashboard;

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

  /* ===== USER INFO ===== */

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  label: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
    fontWeight: "500",
  },

  value: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1a1a2e",
  },

  /* ===== SECTION TITLE ===== */

  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: 20,
  },

  /* ===== QUICK ACTIONS ===== */

  quickActions: {
    flexDirection: width > 600 ? "row" : "column",
    gap: 20,
    marginBottom: 40,
  },

  card: {
    flex: 1,
    backgroundColor: "#f59e0b",
    borderRadius: 14,
    padding: 28,
    marginBottom: width <= 600 ? 20 : 0,
    shadowColor: "#1a1a2e",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 3,
  },

  cardIcon: {
    fontSize: 28,
    marginBottom: 12,
  },

  cardLabel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a2e",
  },

  /* ===== PAYMENTS ===== */

  paymentContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingVertical: 10,
    shadowColor: "#1a1a2e",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 18,
    elevation: 3,
  },

  paymentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f1f5",
  },

  paymentTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a2e",
  },

  paymentDate: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
  },

  paymentAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#b02a2a",
  },
});