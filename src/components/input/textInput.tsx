import { useState } from "react";
import {
    Alert,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
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

    const [task, setNewTask] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    function handleCreateNewTask() {
        if (!task || !location || !date) {
            Alert.alert(
                "Error",
                "Por favor, preencha todos os campos da tarefa"
            );
            return;
        }

        const newTask: TaskProps = {
            id: tasks.length + 1,
            task,
            location,
            date,
            done: false,
        };
        onAddNewTask(newTask);
        clearNewTask();
    }

    function clearNewTask() {
        setNewTask("");
        setLocation("");
        setDate("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Tarefa:</Text>
            <TextInput
                style={customStyleInput}
                placeholder="Digite a tarefa"
                placeholderTextColor="#808080"
                onFocus={() => setFocus(true)}
                onChangeText={setNewTask}
                value={task}
            />

            <Text style={styles.label}>Local:</Text>
            <TextInput
                style={customStyleInput}
                placeholder="Digite o local"
                placeholderTextColor="#808080"
                onChangeText={setLocation}
                value={location}
            />

            <Text style={styles.label}>Data:</Text>
            <TextInput
                style={customStyleInput}
                placeholder="Digite a data (ex: 30/11/2024)"
                placeholderTextColor="#808080"
                onChangeText={setDate}
                value={date}
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
