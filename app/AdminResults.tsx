import React, { useState } from "react";
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AdminHeader from "../components/AdminHeader";

const mockData = [
  { id: "563485874365", name: "Carlos, Diwata", ref: "4654565476457", amount: "300.00", date: "12-23-25", status: "confirmed" },
  { id: "565765876876", name: "Bituin, Luningning", ref: "5475467658887", amount: "300.00", date: "12-23-25", status: "pending" },
  { id: "98798709809", name: "Ligaya, Bayani", ref: "576586787698", amount: "300.00", date: "12-23-25", status: "unconfirmed" },
];

const AdminResults = () => {
  const [filter, setFilter] = useState("confirmed");
  const [printOpen, setPrintOpen] = useState(false);

  const filteredData = filter === "all" ? mockData : mockData.filter(item => item.status === filter);

  return (
    <SafeAreaView style={styles.safeArea}>
      <AdminHeader title="Verification Results" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Top Controls */}
        <View style={styles.controls}>
          <View style={styles.statusButtons}>
            {["confirmed", "pending", "unconfirmed"].map(status => (
              <TouchableOpacity
                key={status}
                style={[styles.statusButton, filter === status && styles.activeButton]}
                onPress={() => setFilter(status)}
              >
                <Text style={[styles.statusButtonText, filter === status && styles.activeButtonText]}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Print Button */}
          <TouchableOpacity style={styles.printButton} onPress={() => setPrintOpen(true)}>
            <Text style={styles.printButtonText}>Print ▾</Text>
          </TouchableOpacity>

          {/* Dropdown Modal */}
          <Modal
            visible={printOpen}
            transparent
            animationType="fade"
            onRequestClose={() => setPrintOpen(false)}
          >
            <TouchableWithoutFeedback onPress={() => setPrintOpen(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.printMenu}>
                  {["confirmed", "pending", "unconfirmed", "all"].map(item => (
                    <TouchableOpacity
                      key={item}
                      style={styles.printMenuItem}
                      onPress={() => setPrintOpen(false)}
                    >
                      <Text>{`Print ${item.charAt(0).toUpperCase() + item.slice(1)}`}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>

        {/* Results List */}
        <View style={styles.tableCard}>
          {filteredData.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}><Text style={styles.bold}>ID:</Text> {item.id}</Text>
              <Text style={styles.cell}><Text style={styles.bold}>Student:</Text> {item.name}</Text>
              <Text style={styles.cell}><Text style={styles.bold}>Ref:</Text> {item.ref}</Text>
              <Text style={styles.cell}><Text style={styles.bold}>Amount:</Text> {item.amount}</Text>
              <Text style={styles.cell}><Text style={styles.bold}>Date:</Text> {item.date}</Text>
              <Text style={[styles.statusBadge, styles[item.status as keyof typeof styles]]}>{item.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f9fafb" },
  container: { padding: 20 },

  // Controls
  controls: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20, alignItems: "center" },
  statusButtons: { flexDirection: "row" },
  statusButton: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, backgroundColor: "#e5e7eb", marginRight: 10 },
  activeButton: { backgroundColor: "#16163F" },
  statusButtonText: { fontWeight: "500", color: "#000" },
  activeButtonText: { color: "#fff" },

  // Print
  printButton: { paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, backgroundColor: "#16163F" },
  printButtonText: { color: "#fff" },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.1)", justifyContent: "flex-start", paddingTop: 100, alignItems: "flex-end", paddingRight: 20 },
  printMenu: { backgroundColor: "#fff", borderRadius: 8, width: 180, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 5 },
  printMenuItem: { padding: 12, borderBottomWidth: 0.5, borderColor: "#eee" },

  // Table
  tableCard: { backgroundColor: "#fff", borderRadius: 12, padding: 16, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.07, shadowRadius: 4, elevation: 3 },
  row: { marginBottom: 16, borderBottomWidth: 1, borderColor: "#eee", paddingBottom: 8 },
  cell: { marginBottom: 4 },
  bold: { fontWeight: "600" },

  // Status badges
  statusBadge: { alignSelf: "flex-start", paddingVertical: 4, paddingHorizontal: 10, borderRadius: 20, fontSize: 12, textTransform: "capitalize", fontWeight: "500" },
  confirmed: { backgroundColor: "#d1fae5", color: "#065f46" },
  pending: { backgroundColor: "#fef3c7", color: "#92400e" },
  unconfirmed: { backgroundColor: "#fee2e2", color: "#991b1b" },
});

export default AdminResults;