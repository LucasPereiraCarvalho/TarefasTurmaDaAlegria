import { useState } from "react";
import { Alert, FlatList, SafeAreaView } from "react-native";

import { TaskProps } from "@/src/interfaces/task.interface";
import { FormInput } from "../textInput/textInput";
import { styles } from "./styles";

export function Body() {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    function addNewTask(task: TaskProps) {
        console.log("task ", task);
        setTasks((prevState) => [...prevState, task]);
    }

    // Alteração do State de uma Tarefa
    function handleToggleTask(id: string) {
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

    // Removendo uma Tarefa
    function removeTask(id: string) {
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

    // Contagem de Tarefas e de Tarefas Completadas
    const tasksCreatedCounter = tasks.length;

    const completedTasks = tasks.reduce((acc, task) => {
        return task.done ? acc + 1 : acc;
    }, 0);

    return (
        <SafeAreaView style={styles.container}>
            <FormInput onAddNewTask={addNewTask} tasks={tasks} />
            TaskCounter
            {/* <TaskCounter
        tasksCreatedCounter={tasksCreatedCounter}
        completedTasks={completedTasks}
      /> */}
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <>TaskCard</>
                        // <TaskCard
                        //   task={item}
                        //   onToggleCheckedTask={handleToggleTask}
                        //   onRemoveTask={removeTask}
                        // />
                    );
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => {
                    return <>TaskCardEmpty</>;
                    //   <TaskCardEmpty />
                }}
            />
        </SafeAreaView>
    );
}
