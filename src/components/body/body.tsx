import { useState } from "react";
import { Alert, FlatList, SafeAreaView } from "react-native";

import { TaskProps } from "@/src/interfaces/task.interface";
import { TaskCard } from "../card/card";
import { TaskCardEmpty } from "../cardEmpty/cardEmpty";
import { FormInput } from "../input/textInput";
import { styles } from "./styles";

export function Body() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    function addNewTask(task: TaskProps) {
        console.log("task ", task);
        setTasks((prevState) => [...prevState, task]);
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
    }

    function removeTask(id: number) {
        const tasksFiltered = tasks.filter((task) => task.id !== id);
        console.log('id ',id);
        
        Alert.alert("Remover tarefa", "Deseja remover essa tarefa?", [
            {
                text: "Sim",
                onPress: () => setTasks(tasksFiltered),
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    }

    // Contagem de Tarefas e de Tarefas Completadas
    const tasksCreatedCounter = tasks.length;

    const completedTasks = tasks.reduce((acc, task) => {
        return task.done ? acc + 1 : acc;
    }, 0);

    return (
        <SafeAreaView style={styles.container}>
            <FormInput onAddNewTask={addNewTask} tasks={tasks} />
            <FlatList
                data={tasks}
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
