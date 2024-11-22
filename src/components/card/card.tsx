import { Text, TouchableHighlight, View } from "react-native";

import { TaskProps } from "@/src/interfaces/task.interface";
import Checkbox from "expo-checkbox";
import { useState } from "react";
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

            <Text style={task.done ? styles.completedText : styles.text}>
                {task.task}
            </Text>
        </View>
    );
}
