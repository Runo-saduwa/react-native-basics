import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import TaskList from './src/components/TaskList';
import uuid from 'uuid/v1'


const App = () => {
  const [ state, setState ] = useState([]);
  const [input, setInput] = useState('');

  handleSubmit = () => {
    let todos = [...state, {id: uuid(), todo: input}];
    setState(todos);
  }

  handleDelete = (id) => {
     let todos = [...state];

     let newTodos = todos.filter((todo) => todo.id !== id );

     setState(newTodos)
  }

  handleUpdate = (id) => {
    let todos = [...state];

    let todo = todos.filter((todo) => todo.id === id );

    setInput(todo[0].todo);
  }
	return (
 		<View style={styles.container}>
			<View style={styles.appTitleContainer}>
				<Text style={styles.appTitle}>Todo App</Text>
			</View>

      <View style={styles.inputContainer}>

      <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={(text) => setInput(text)}
          value={input}
        />
      <TouchableHighlight style={styles.button}  underlayColor="white" onPress={handleSubmit}>
          <View>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
      </TouchableHighlight>

      </View>
			<ScrollView style={styles.taskContainer}>
      <TaskList todos={state} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
  inputContainer : {
    margin: "3% 2%",
  },
  input : {
    backgroundColor: "#fff",
    fontSize: 20,
    padding: '3%',
    borderRadius: 10
  },
  button: {
    backgroundColor: "#5DADE2",
    alignItems: 'center',
    marginTop: '2%',
    padding: '3%',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight:"700"
  },
	container: {
		backgroundColor: '#1B2331',
		flex: 1
	},
	appTitleContainer: {
		alignItems: 'center',
		flexDirection: 'column',
    backgroundColor: '#3498DB',
    height: 70,
    justifyContent: "center"
	},
	appTitle: {
		fontSize: 40,
		color: '#fff'
  },
  taskContainer : {
    // marginTop: "2%"
    // backgroundColor: "red"
  }
});

export default App;
