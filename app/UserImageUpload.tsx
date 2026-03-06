import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
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
    const [loading, setLoading] = useState(false);

    const [reference, setReference] = useState("");
    const [amount, setAmount] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    const onChangeDate = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);

        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleSubmit = () => {
        if (!reference) {
            setError("Reference is required");
            return;
        }

        if (!amount) {
            setError("Amount is required");
            return;
        }

        if (!selectedImage) {
            setError("Please upload a payment receipt");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigation.navigate("UserViewSubHistory");
        }, 1500);
    };

    const handleImagePick = async () => {
        const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            setError("Permission to access photos is required.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            quality: 1,
            allowsMultipleSelection: false,
        });

        if (result.canceled) return;

        const image = result.assets[0];

        if (
            !image.mimeType?.includes("jpeg") &&
            !image.mimeType?.includes("png")
        ) {
            setError("Only PNG and JPEG images are allowed.");
            return;
        }

        setSelectedImage(image);
        setError("");
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

                {/* PAYMENT DETAILS */}

                <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>Payment Details</Text>
                    <Text style={styles.subTitle}>Please review the extracted payment details carefully and make sure all the information is correct.</Text>

                    <Text>Reference Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Edit"
                        keyboardType="numeric"
                        value={reference}
                        onChangeText={setReference}
                    />

                    <Text>Amount Paid</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Edit"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />

                    <Text>Date of Payment</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.input}>
                            {date.toLocaleDateString()}
                        </Text>
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}

                </View>

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.submitBtnText}>Submit Proof of Payment</Text>
                    )}
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );

    interface RequiredTextInputProps extends TextInputProps {
        required?: boolean;
    }

    function RequiredTextInput(props: RequiredTextInputProps) {
        const { required, ...rest } = props;
        return <TextInput {...rest} />;
    }
};

export default UserImageUpload;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f5f5f5" },

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
        marginBottom: 0,
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