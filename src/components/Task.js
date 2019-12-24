import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Task = ({todo, id, handleDelete, handleUpdate}) => {
	const deleteBtn = (
		<Icon
            name="ban"
            size={25}
            color='red'
		/>
		
	);
	const completeBtn = (
		<Icon
            name="check"
            size={25}
            color='green'
		/>
	
	);
	return (
	<View style={styles.main}>
        	<View style={styles.taskBox}>
			<View>
    <Text style={styles.text}>{todo}</Text>
			</View>
			<View style={styles.btnContainer}>
				<View style={styles.btn}>
                    <TouchableHighlight onPress={() => handleDelete(id)}>
                    {deleteBtn}
                    </TouchableHighlight>
                </View>
				<View style={styles.btn}>
                    <TouchableHighlight onPress={() => handleUpdate(id)}>
                        {completeBtn}
                    </TouchableHighlight>
                </View>
			</View>
		</View>
    </View>
	);
};


const styles = StyleSheet.create({
    main: {
     margin: "3% 2%",
     backgroundColor: '#ccc',
     padding: '3%',
     borderRadius: 10
    },
    taskBox : {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    btnContainer : {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 60
    },
    text: {
        fontSize: 20
    }
})

export default Task;
