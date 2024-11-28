import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const AboutScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.textBody}>ToD0 List</Text>
        <Text style={styles.textBody}>By Dallas Huppie</Text>
        <Text style={styles.textBody}>About Screen</Text>
        <Text style={styles.textBody}>Current Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textBody: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AboutScreen;