import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AdminHeader from "../components/AdminHeader";

type RootStackParamList = {
  AdminDashboard: undefined;
  AdminTransactionUpload: undefined;
  AdminResults: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AdminTransactionUpload"
>;

const AdminTransactionUpload: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedFile, setSelectedFile] = useState<DocumentPicker.DocumentPickerResult | null>(null);
  const [error, setError] = useState("");

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: "application/pdf" });

      if (result.canceled) return;

      setSelectedFile(result);
      setError("");
    } catch (err) {
      console.error(err);
      setError("An error occurred while picking the file.");
    }
  };

  const handleSubmit = () => {
    /*if (!selectedFile) {
      setError("Please upload a transaction history PDF.");
      return;
    }*/

    // Mock submit: just navigate to AdminResults
    navigation.navigate("AdminResults");
  };

  return (
    <SafeAreaView style={styles.container}>
      <AdminHeader title="Transaction History Submission" />

      <View style={styles.uploadContainer}>
        <Text style={styles.pageTitle}>Transaction History Submission</Text>
        <Text style={styles.pageSubtitle}>
          Upload official bank transaction history (PDF format).
        </Text>

        <TouchableOpacity style={styles.uploadBox} onPress={handleFilePick}>
          <Text style={styles.uploadIcon}>📄</Text>
          {selectedFile ? (
            <Text style={styles.fileName}></Text>
          ) : (
            <>
              <Text>Select your file or click to upload</Text>
              <Text style={styles.fileInfo}>PDF up to 500MB</Text>
            </>
          )}
        </TouchableOpacity>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitBtnText}>Submit Transaction History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AdminTransactionUpload;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  uploadContainer: { flex: 1, margin: 20, padding: 20, alignItems: "center" },
  pageTitle: { fontSize: 28, fontWeight: "600", marginBottom: 8 },
  pageSubtitle: { color: "#666", marginBottom: 30, textAlign: "center" },
  uploadBox: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  uploadIcon: { fontSize: 40, marginBottom: 10 },
  fileName: { fontWeight: "500", color: "#16163F" },
  fileInfo: { color: "#888", marginTop: 5 },
  errorText: { color: "#e74c3c", marginBottom: 15, textAlign: "center" },
  submitBtn: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#16163F",
    alignItems: "center",
  },
  submitBtnText: { color: "#fff", fontSize: 16, fontWeight: "500" },
});