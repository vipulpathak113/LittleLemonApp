import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { check, PERMISSIONS, RESULTS } from "react-native-permissions";
import { PermissionsAndroid } from "react-native";

const requestPermission = async (permission) => {
  try {
    const granted = await PermissionsAndroid.request(permission, {
      title: "Cool Photo App Camera Permission",
      message:
        "Cool Photo App needs access to your camera " +
        "so you can take awesome pictures.",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK",
    });
    // rationale dialog or custom dialog will only be shown of user has denied the system permission
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Permission Granted");
    } else {
      console.log("Permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

export default function Settings() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.header}>Permissions</Text>

      <Pressable
        style={styles.buttonWrap}
        onPress={() => {
          requestPermission(PermissionsAndroid.PERMISSIONS.CAMERA);
        }}
      >
        <Text style={styles.buttonText}>Allow permission for Camera</Text>
      </Pressable>

      <Pressable
        style={styles.buttonWrap}
        onPress={() => {
          requestPermission(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
        }}
      >
        <Text style={styles.buttonText}>Allow permission for Contacts</Text>
      </Pressable>

      <Pressable
        style={styles.buttonWrap}
        onPress={() => {
          requestPermission(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        }}
      >
        <Text style={styles.buttonText}>Allow permission for Storage</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 20,
  },
  buttonWrap: {
    backgroundColor: "#495E57",
    width: 350,
    borderRadius: 5,
    margin: 20,
    padding: 15,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
