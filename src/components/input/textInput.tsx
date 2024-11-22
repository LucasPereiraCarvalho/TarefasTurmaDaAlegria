import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import plus from "../../../assets/images/plus.png";

import { TaskProps } from "@/src/interfaces/task.interface";
import { styles } from "./styles";

interface FormInputProps {
    onAddNewTask: (task: TaskProps) => void;
    tasks: TaskProps[];
}

export function FormInput({ onAddNewTask, tasks }: FormInputProps) {
    const [focus, setFocus] = useState(false);
    const customStyleInput = focus ? styles.textInputFocus : styles.textInput;

    const [newTask, setNewTask] = useState("");

    function handleCreateNewTask() {
        const task: TaskProps = {
            id: tasks.length + 1,
            task: newTask,
            done: false,
        };
        onAddNewTask(task);
        setNewTask("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={customStyleInput}
                placeholder="Task"
                placeholderTextColor="#808080"
                onFocus={() => setFocus(true)}
                onChangeText={setNewTask}
                value={newTask}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleCreateNewTask}
            >
                <Image source={plus} style={styles.plus} />
            </TouchableOpacity>
        </View>
    );
}
