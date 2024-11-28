import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Button,
    Alert
  } from 'react-native';

  
function ToDoForm({ addTask, tasks }) {

  const [task, setTask] = React.useState('');

  const handleAddTask = () => {
    if(!tasks.includes(task)) {
      //console.log('Adding task:', task);
      addTask(task);
      setTask('');
    }
    else {
      //Debugging
      //console.log('Task already exists:', task);

      Alert.alert('Duplicate Task','Task already exists');

      //For web
      //window.alert('Task already exists');
      
      
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTask(text)}
          value={task}
          
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;