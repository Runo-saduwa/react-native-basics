import React from 'react';
import {View, FlatList} from 'react-native';
import Task from './Task';

const TaskList = ({todos, handleDelete, handleUpdate}) => {
  return (
    <View>
         <FlatList
          data={todos}
          renderItem={({item}) => { 
          return (
            <View key={item.id}>

            <Task todo={item.todo} handleDelete={handleDelete} id={item.id} handleUpdate={handleUpdate}/>
           </View>
          )
         }}
        />
    </View>
  )
}


export default TaskList;