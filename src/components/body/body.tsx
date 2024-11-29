import { useState } from "react";
import { Alert, FlatList, SafeAreaView } from "react-native";

import { TaskProps } from "@/src/interfaces/task.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskCard } from "../card/card";
import { TaskCardEmpty } from "../cardEmpty/cardEmpty";
import { FormInput } from "../input/textInput";
import { styles } from "./styles";

export function Body() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const changeStorage = async () => {
        try {
            const listTasksJson = JSON.stringify(tasks);
            await AsyncStorage.setItem("@tasks", listTasksJson);
        } catch (error) {
            console.log("Erro ao salvar no storage:", error);
        }
    };

    const getStorage = async () => {
        try {
            const listTasksJson = await AsyncStorage.getItem("@tasks");
            if (listTasksJson !== null) setTasks(JSON.parse(listTasksJson));
        } catch (error) {
            console.log("Erro ao carregar lista do storage:", error);
        }
    };

    function getTasks() {
        getStorage();
        const tasksSorted = tasks.sort(
            (a, b) => (a.done as any) - (b.done as any)
        );
        return tasks ? tasksSorted : [];
    }

    function addNewTask(task: TaskProps) {
        setTasks((prevState) => [...prevState, task]);
        changeStorage();
    }

    function changeStatusTask(id: number) {
        const updatedTask = tasks.map((task) =>
            task.id === id
                ? {
                      ...task,
                      done: !task.done,
                  }
                : task
        );

        setTasks(updatedTask);
        changeStorage();
    }

    function removeTask(id: number) {
        const tasksFiltered = tasks.filter((task) => task.id !== id);

        Alert.alert("Remover tarefa", "Deseja remover essa tarefa?", [
            {
                text: "Sim",
                onPress: () => {
                    setTasks(tasksFiltered);
                    changeStorage();
                },
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FormInput onAddNewTask={addNewTask} tasks={tasks} />
            <FlatList
                data={getTasks()}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TaskCard
                            task={item}
                            doneTask={changeStatusTask}
                            onRemoveTask={removeTask}
                        />
                    );
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => {
                    return <TaskCardEmpty />;
                }}
            />
        </SafeAreaView>
    );
}
