import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskList from './src/components/TaskList';


const App = () => {
	const [ state, setState ] = useState([]);

	return (
		<View style={styles.container}>
			<View style={styles.appTitleContainer}>
				<Text style={styles.appTitle}>Todo App</Text>
			</View>
			<ScrollView style={styles.taskContainer}>
			<View>
        <TaskList />
      </View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1B2331',
		flex: 1
	},
	appTitleContainer: {
		alignItems: 'center',
		flexDirection: 'column',
    backgroundColor: '#3498DB',
    height: 60,
    justifyContent: "center"
	},
	appTitle: {
		fontSize: 40,
		color: '#fff'
  },
  taskContainer : {
    // marginTop: "2%"
    backgroundColor: "red"
  }
});

export default App;
