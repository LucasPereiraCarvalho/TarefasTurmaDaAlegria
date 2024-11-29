import { Image, Text, TouchableHighlight, View } from "react-native";

import { TaskProps } from "@/src/interfaces/task.interface";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import recycling from "../../../assets/images/recycling.png";
import { styles } from "./styles";

interface CardProps {
    task: TaskProps;
    doneTask: (id: number) => void;
    onRemoveTask: (id: number) => void;
}

export function TaskCard({ task, doneTask, onRemoveTask }: CardProps) {
    const [isChecked, setChecked] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);

    function changeStatusTask(task: TaskProps) {
        setChecked(!isChecked);
        doneTask(task.id);
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight>
                <Checkbox
                    style={
                        isChecked ? styles.checkbox : styles.checkboxUnchecked
                    }
                    value={isChecked}
                    onValueChange={() => changeStatusTask(task)}
                    color={isChecked ? "#5E60CE" : "#4EA8DE"}
                />
            </TouchableHighlight>

            <View style={styles.textContainer}>
                <Text style={task.done ? styles.completedText : styles.text}>
                    <Text style={styles.boldText}>Tarefa: </Text>
                    {task.task}
                </Text>
                <Text style={task.done ? styles.completedText : styles.text}>
                    <Text style={styles.boldText}>Local: </Text>

                    {task.location}
                </Text>
                <Text style={task.done ? styles.completedText : styles.text}>
                    <Text style={styles.boldText}>Data: </Text>
                    {task.date}
                </Text>
            </View>

            <TouchableHighlight
                underlayColor="#333333"
                onShowUnderlay={() => setButtonPressed(true)}
                onHideUnderlay={() => setButtonPressed(false)}
                onPress={() => onRemoveTask(task.id)}
            >
                <Image source={recycling} style={styles.remove} />
            </TouchableHighlight>
        </View>
    );
}
