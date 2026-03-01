import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

type RootStackParamList = {
  Login: undefined;
  UserDashboard: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const { width } = Dimensions.get('window');
const isMobile = width < 768;

const LoginPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [activeTab, setActiveTab] =
    useState<'login' | 'signup'>('login');
  const [idnumber, setIDNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const features: string[] = [
    'Secure Payment Verification',
    'Real-time Transaction Monitoring',
    'Automated Receipt Processing',
  ];

  const handleSubmit = () => {
    if (activeTab === 'login') {
      navigation.replace('UserDashboard');
    } else {
      Alert.alert('Success', 'Account created for: ' + idnumber);
      setActiveTab('login');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.page,
        { flexDirection: isMobile ? 'column' : 'row' },
      ]}
    >
      {/* LEFT SIDE (Hidden on Mobile) */}
      {!isMobile && (
        <View style={styles.left}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>PTA SYSTEM</Text>
          </View>

          <Text style={styles.leftTitle}>VERIPTA</Text>
          <Text style={styles.desc}>
            PTA Payment Verification System
          </Text>

          <Text style={styles.listTitle}>FEATURES</Text>

          {features.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.check}>✓</Text>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      )}

      {/* RIGHT SIDE */}
      <SafeAreaView style={styles.right}>
        <View style={styles.box}>

          {/* HEADER (Desktop only) */}
          {(
            <View style={styles.header}>
              <Text style={styles.headerTitle}>VERIPTA</Text>
              <Text style={styles.headerText}>
                PTA Payment Verification System
              </Text>
              <Text style={styles.headerText}>
                USTP - CDO Campus
              </Text>
            </View>
          )}

          {/* TABS */}
          <View style={styles.tabs}>
            <Pressable
              style={[
                styles.tabButton,
                activeTab === 'login' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('login')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'login' &&
                    styles.activeTabText,
                ]}
              >
                Login
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.tabButton,
                activeTab === 'signup' && styles.activeTab,
              ]}
              onPress={() => setActiveTab('signup')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'signup' &&
                    styles.activeTabText,
                ]}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>

          {/* FORM */}
          <View style={styles.form}>
            <View style={styles.group}>
              <Text style={styles.label}>ID Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter ID Number"
                value={idnumber}
                onChangeText={setIDNumber}
              />
            </View>

            {activeTab === 'signup' && (
              <View style={styles.group}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
              </View>
            )}

            <View style={styles.group}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder={
                  activeTab === 'login'
                    ? 'Enter Password'
                    : 'Create Password'
                }
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <Pressable
              style={styles.btn}
              onPress={handleSubmit}
            >
              <Text style={styles.btnText}>
                {activeTab === 'login'
                  ? 'Login'
                  : 'Sign Up'}
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    flexDirection: 'row',
  },

  left: {
    flex: 1,
    backgroundColor: '#16163F',
    paddingVertical: 50,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },

  tag: {
    backgroundColor: 'rgba(251,191,36,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(251,191,36,0.5)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  tagText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#fbbf24',
  },

  leftTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: 'white',
  },

  desc: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    color: 'white',
  },

  listTitle: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#fbbf24',
    marginBottom: 15,
  },

  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },

  check: {
    color: '#fbbf24',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 12,
  },

  itemText: {
    color: 'white',
    flex: 1,
  },

  right: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  box: {
    backgroundColor: 'white',
    borderRadius: 16,
    width: '100%',
    maxWidth: 500,
    paddingBottom: 30,
    elevation: 5,
  },

  header: {
    backgroundColor: '#16163F',
    padding: 30,
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
  },

  headerText: {
    fontSize: 14,
    color: 'white',
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    margin: 20,
    borderRadius: 10,
    padding: 4,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6b7280',
  },

  activeTab: {
    backgroundColor: 'white',
    elevation: 2,
  },

  activeTabText: {
    color: '#1e3a8a',
  },

  form: {
    paddingHorizontal: 30,
  },

  group: {
    marginBottom: 18,
  },

  label: {
    fontWeight: '600',
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    fontSize: 15,
  },

  btn: {
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#f59e0b',
    alignItems: 'center',
    marginTop: 10,
  },

  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});