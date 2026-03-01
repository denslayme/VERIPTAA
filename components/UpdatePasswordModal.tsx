import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const UpdatePasswordModal: React.FC<Props> = ({ visible, onClose }) => {
  const [form, setForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!form.current || !form.newPass || !form.confirm) {
      setMessage("All fields are required.");
      return;
    }

    if (form.newPass !== form.confirm) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Password updated successfully.");
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Change Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry
            value={form.current}
            onChangeText={(text) => setForm({ ...form, current: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={form.newPass}
            onChangeText={(text) => setForm({ ...form, newPass: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry
            value={form.confirm}
            onChangeText={(text) => setForm({ ...form, confirm: text })}
          />

          {message && <Text style={styles.message}>{message}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UpdatePasswordModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  message: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#16163F",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  close: {
    textAlign: "center",
    color: "gray",
  },
});