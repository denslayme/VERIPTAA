import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import UserHeader from "../components/UserHeader";

type RootStackParamList = {
    UserDashboard: undefined;
    UserImageUpload: undefined;
    UserViewSubHistory: undefined;
};

type NavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "UserImageUpload"
>;

const UserImageUpload: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    const [selectedImage, setSelectedImage] = useState<ImagePicker.ImagePickerAsset | null>(null);
    const [error, setError] = useState("");

    const handleImagePick = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            quality: 1,
        });

        if (result.canceled) return;

        const image = result.assets[0];
        setSelectedImage(image);
        setError("");
    } catch (err) {
        console.error(err);
        setError("An error occurred while picking the file.");
    }
};

    const [reference, setReference] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = () => {
        navigation.navigate("UserViewSubHistory");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <UserHeader title="Proof of Payment Submission" />

            <ScrollView contentContainerStyle={styles.uploadContainer}>
                <Text style={styles.pageTitle}>Proof of Payment Submission</Text>
                <Text style={styles.pageSubtitle}>
                    Upload payment receipt (PNG/JPEG format).
                </Text>

                <TouchableOpacity style={styles.uploadBox} onPress={handleImagePick}>
                    <Text style={styles.uploadIcon}>📤</Text>

                    {selectedImage ? (
                        <Text style={styles.fileName}>
                            {selectedImage.fileName || "Image selected"}
                        </Text>
                    ) : (
                        <>
                            <Text>Select your image or tap to upload</Text>
                            <Text style={styles.fileInfo}>PNG/JPEG up to 50MB</Text>
                        </>
                    )}
                </TouchableOpacity>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Payment Details</Text>
                    <Text style={styles.subTitle}>
                        Please review the extracted payment details carefully and make sure all the information is correct.
                    </Text>

                    <Text>Reference Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Edit reference number"
                        keyboardType="numeric"
                        value={reference}
                        onChangeText={setReference}
                    />

                    <Text>Amount Paid</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Edit amount"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />

                    <Text>Date of Payment</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter date"
                        value={date}
                        onChangeText={setDate}
                    />
                </View>

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                    <Text style={styles.submitBtnText}>Submit Proof of Payment</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserImageUpload;

const styles = StyleSheet.create({
    uploadContainer: {
        flexGrow: 1,
        margin: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    pageTitle: {
        fontSize: 28,
        fontWeight: "600",
        marginBottom: 8,
    },

    pageSubtitle: {
        color: "#666",
        marginBottom: 20,
        textAlign: "left",
    },

    uploadBox: {
        width: "100%",
        minHeight: 220,
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },

    uploadIcon: {
        fontSize: 40,
        marginBottom: 10,
    },

    fileName: {
        fontWeight: "500",
        color: "#16163F",
    },

    fileInfo: {
        color: "#888",
        marginTop: 5,
    },

    errorText: {
        color: "#e74c3c",
        marginBottom: 15,
        textAlign: "center",
    },

    detailsContainer: {
        width: "100%",
        marginTop: 8,
        marginBottom: 10,
    },

    detailsTitle: {
        fontSize: 20,
        fontWeight: "600",
    },

    subTitle: {
        color: "#666",
        marginBottom: 10,
    },

    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        backgroundColor: "#fff",
    },

    submitBtn: {
        width: "100%",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#16163F",
        alignItems: "center",
    },

    submitBtnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
});