import { useState } from "react";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import plus from "../../../assets/images/plus.png";

import { TaskProps } from "@/src/interfaces/task.interface";
import { styles } from "./styles";

interface FormInputProps {
    onAddNewTask: (task: TaskProps) => void;
}

export function FormInput({ onAddNewTask }: FormInputProps) {
    // Input Focus Style
    const [focus, setFocus] = useState(false);
    const customStyle = focus ? styles.textInputFocus : styles.textInput;

    // New Task Creation
    const [newTask, setNewTask] = useState("");

    function handleCreateNewTask() {
        if (!newTask.trim()) {
            Alert.alert("Nome inválido", "Por favor, informe um nome válido!");
        } else {
            const newCreatedTask: TaskProps = {
                id: 1, // gerar um id unico
                task: newTask,
                done: false,
            };
            onAddNewTask(newCreatedTask);
            setNewTask("");
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={customStyle}
                placeholder="Add New Task"
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
