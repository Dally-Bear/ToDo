import React from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native';
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout'; 

export default function HomeScreen({ navigation }) { 

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <View>
          <Text>Home Screen</Text> 
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask} tasks={tasks} />
          <View style={styles.buttonContainer}>
            <Button
             title="Go to About"
             onPress={() => navigation.navigate('About')}
            />
          </View>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    marginTop: 30,
    alignSelf: 'center',
  },
});

