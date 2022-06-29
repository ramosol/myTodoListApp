import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ICON from "react-native-vector-icons/MaterialIcons";

export default TaskInputField = (props) => {
  const [task, setTask] = useState();

  const handleAddTask = (value) => {
    props.addTask({ text: value, ...props.task });
    setTask("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder={"AJOUTER UNE TÂCHE"}
        placeholderTextColor={"#fff"}
      />
      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View style={styles.button}>
          <ICON name="add" size={30} />
          {/* <MaterialIcons name="keyboard-arrow-right" size={24} color="black" /> */}
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    backgroundColor: "#338AFF",
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 20,
  },
  inputField: {
    color: "#fff",
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
