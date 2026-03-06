import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserHeader from "../components/UserHeader";

const mockData = [
  { date: "2026-02-23", ref: "4654565476457", amount: "400.00", status: "pending" },
  { date: "2025-12-10", ref: "5475467658027", amount: "200.00", status: "confirmed" },
  { date: "2024-08-18", ref: "4179463656790", amount: "200.00", status: "confirmed" },
];

const UserViewSubHistory = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <UserHeader title="Submission History" />

      <View style={styles.container}>
        <Text style={styles.pageTitle}>My Submissions</Text>

        <View style={styles.tableCard}>
          {mockData.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>
                <Text style={styles.bold}>Date:</Text> {item.date}
              </Text>

              <Text style={styles.cell}>
                <Text style={styles.bold}>Ref:</Text> {item.ref}
              </Text>

              <Text style={styles.cell}>
                <Text style={styles.bold}>Amount:</Text> {item.amount}
              </Text>

              {/* Status Badge Below Amount */}
              <Text
                style={[
                  styles.statusBadge,
                  item.status === "confirmed"
                    ? styles.confirmed
                    : styles.pending,
                ]}
              >
                {item.status}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f9fafb" },
  container: { padding: 20 },

  pageTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },

  tableCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },

  row: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 12,
  },

  cell: { marginBottom: 4 },

  bold: { fontWeight: "600" },

  statusBadge: {
    marginTop: 6,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "600",
  },

  confirmed: {
    backgroundColor: "#d1fae5",
    color: "#065f46",
  },

  pending: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
  },
});

export default UserViewSubHistory;