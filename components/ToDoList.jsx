/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
 import {
    SafeAreaView,
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
  } from 'react-native';


function ToDoList({ tasks }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {tasks.map((tasks) => (
          <Pressable key={tasks}>
            <View style={styles.task}>
              <Text style={styles.taskText}>{tasks}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;