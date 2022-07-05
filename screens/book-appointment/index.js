import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BookAppointmentScreen = (params) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>Book Appointment Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  headingTxt: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 2,
  }
});

export default BookAppointmentScreen;
