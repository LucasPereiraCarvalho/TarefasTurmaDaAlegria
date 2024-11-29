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
        setTasks((prevState) => [...prevState, task]);
    }

    function orderTasks() {
        return tasks.sort((a, b) => (a.done as any) - (b.done as any));
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

    return (
        <SafeAreaView style={styles.container}>
            <FormInput onAddNewTask={addNewTask} tasks={tasks} />
            <FlatList
                data={orderTasks()}
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
