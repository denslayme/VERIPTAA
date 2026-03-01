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

const UpdatePhoneModal: React.FC<Props> = ({ visible, onClose }) => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!phone) {
      setMessage("Phone number is required.");
      return;
    }

    // Simple validation example
    if (phone.length < 10) {
      setMessage("Enter a valid phone number.");
      return;
    }

    // TODO: Replace with real API call
    setMessage("Phone number updated successfully.");
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Update Phone Number</Text>

          <TextInput
            style={styles.input}
            placeholder="e.g. 09xxxxxxxxx"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
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

export default UpdatePhoneModal;

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