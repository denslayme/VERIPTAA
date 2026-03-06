import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path, Polyline } from "react-native-svg";

// Define your stack params
type RootStackParamList = {
  UserDashboard: undefined;
  UserImageUpload: undefined;
  UserViewSubHistory: undefined;
};

type UserHeaderNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "UserDashboard" // can also be the current screen if needed
>;

interface UserHeaderProps {
  title: string;
}

const UserHeader: React.FC<UserHeaderProps> = ({ title }) => {
  const navigation = useNavigation<UserHeaderNavigationProp>();

  return (
    <View style={styles.headerContainer}>

      {/* Left: Back Button */}
      <View style={styles.leftSection}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.goBack()}
        >
          <Svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={1.8}
          >
            <Polyline points="15 18 9 12 15 6" />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* Center: Title */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Right: Home Button */}
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => navigation.navigate("UserDashboard")}
      >
        <Svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={1.8}
        >
          <Path d="M3 10.5L12 3l9 7.5" />
          <Path d="M5 10v10h14V10" />
        </Svg>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#16163F",
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f5a",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
  iconBtn: {
    padding: 6,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserHeader;