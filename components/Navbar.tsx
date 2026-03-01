import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal, StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

type Variant = "user" | "admin";
type ModalName = "password" | "email" | "phone";

interface NavbarProps {
  variant?: Variant;
  onLogout?: () => void;
  onOpenModal?: (modalName: ModalName) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  variant = "user",
  onLogout,
  onOpenModal,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownItem = (modalName: ModalName) => {
    setDropdownOpen(false);
    onOpenModal?.(modalName);
  };

  return (
    <View style={styles.navbar}>
      
      {/* LEFT SIDE */}
      <View>
        <Text style={styles.headerTitle}>VERIPTA</Text>
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.actions}>
        {variant === "user" && (
          <View>
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => setDropdownOpen((prev) => !prev)}
            >
              <Feather name="user" size={20} color="white" />
            </TouchableOpacity>

            {dropdownOpen && (
              <Modal transparent animationType="fade">
                <TouchableOpacity
                  style={{
                    flex: 1,
                  }}
                  onPress={() => setDropdownOpen(false)} // close if clicking outside
                >
                  <View
                    style={styles.dropdown}
                  >
                    <TouchableOpacity
                      onPress={() => handleDropdownItem("password")}
                      style={styles.dropdownRow}
                    >
                      <Feather name="lock" size={16} color="#333" style={{ marginRight: 10 }}/>
                      <Text>Change Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDropdownItem("email")}
                      style={styles.dropdownRow}
                    >
                      <Feather name="mail" size={16} color="#333" style={{ marginRight: 10 }}/>
                      <Text>Update Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDropdownItem("phone")}
                      style={styles.dropdownRow}
                    >
                      <Feather name="phone" size={16} color="#333" style={{ marginRight: 10 }}/>
                      <Text>Update Phone</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Modal>
            )}
          </View>
        )}

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={onLogout}
        >
          <Feather name="log-out" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: "#16163F",
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "white",
  },

  headerText: {
    fontSize: 13,
    color: "#d1d5db",
    marginTop: 2,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  iconBtn: {
    padding: 8,
  },

  icon: {
    fontSize: 20,
    color: "white",
  },

  dropdown: {
    position: "absolute",
    top: 80, // adjust according to navbar height
    right: 24,
    backgroundColor: "white",
    borderRadius: 10,
    width: 200,
    paddingVertical: 8,
  },

  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  dropdownText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 10,
  },

  dropdownRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});