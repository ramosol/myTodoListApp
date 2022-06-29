import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Input } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { icon } from "react-native-vector-icons/MaterialIcons";

export default TaskItem = (props) => {
  const [text, setText] = useState(props.task.text);

  const handleSubmit = () => {
    props.updateTasks({ ...task, text });
  };

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Input value={text} onchange={setText} onsubmitEditing={handleSubmit} />
        <Text style={styles.index}>{props.index}</Text>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.task}>{props.task}</Text>
        <TouchableOpacity onPress={(e) => props.updateTask(props.tasks)}>
          <MaterialIcons
            style={styles.edit}
            name="edit"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.deleteTask()}>
          <MaterialIcons
            style={styles.delete}
            name="delete"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: "#338AFF",
    borderRadius: 12,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
  },
  index: {
    color: "#fff",
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: "#338AFF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    borderColor: "#fff",
    borderWidth: 1,
  },
  task: {
    color: "#fff",
    width: "65%",
    fontSize: 16,
  },
  edit: {
    marginLeft: 50,
  },

  delete: {
    marginLeft: 10,
  },
});
