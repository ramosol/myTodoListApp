import React, { useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import TaskInputField from "./components/TaskInputField";
import TaskItem from "./components/TaskItem";
import ICON from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    console.log(task);
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    Keyboard.dismiss();
  };

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  function updateTask(task) {
    setTasks(tasks.map((t) => (t.id == task.id ? task : t)));
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#ffff" }}>
          Tâches à faire (Todo List)
        </Text>
        <ICON name="delete" size={25} color="white" />
      </View>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
                updateTask={updateTask}
              />
            </View>
          );
        })}
      </ScrollView>
      <TaskInputField addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A0F7",
  },
  heading: {
    marginTop: 40,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 60,
    height: 60,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
