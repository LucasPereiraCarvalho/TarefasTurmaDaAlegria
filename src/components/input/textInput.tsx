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
    const [error, setError] = useState(false);

    const [task, setNewTask] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    const customStyleInput = focus ? styles.textInputFocus : styles.textInput;

    function handleCreateNewTask() {
        if (!task || !location || !date) {
            Alert.alert(
                "Error",
                "Por favor, preencha todos os campos da tarefa"
            );
            setError(true);
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
        inittialState();
    }

    function inittialState() {
        setNewTask("");
        setLocation("");
        setDate("");
        setError(false);
    }

    function showNotShowError() {
        if (!task || !location || !date) return;
        setError(false);
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
                onChange={() => showNotShowError()}
            />

            <Text style={styles.label}>Local:</Text>
            <TextInput
                style={customStyleInput}
                placeholder="Digite o local"
                placeholderTextColor="#808080"
                onChangeText={setLocation}
                value={location}
                onFocus={() => setFocus(true)}
                onChange={() => showNotShowError()}
            />

            <Text style={styles.label}>Data:</Text>
            <TextInput
                style={customStyleInput}
                placeholder="Digite a data (ex: 30/11/2024)"
                placeholderTextColor="#808080"
                onChangeText={setDate}
                value={date}
                onFocus={() => setFocus(true)}
                onChange={() => showNotShowError()}
            />

            <TouchableOpacity
                style={!error ? styles.button : styles.buttonError}
                onPress={handleCreateNewTask}
                onFocus={() => setFocus(false)}
            >
                <Image source={plus} style={styles.plus} />
                <Text style={styles.label}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    );
}
