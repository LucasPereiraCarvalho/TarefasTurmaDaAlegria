import { Text, TouchableHighlight, View } from "react-native";

import { TaskProps } from "@/src/interfaces/task.interface";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { styles } from "./styles";

interface CardProps {
    task: TaskProps;
    doneTask: (id: number) => void;
    //   onRemoveTask: (id: number) => void
}

export function TaskCard({
    task,
    doneTask,
}: // onRemoveTask,
CardProps) {
    // Toggle do Checkbox
    const [isChecked, setChecked] = useState(false);

    // Mudança de cor ao clicar no botão da lixeira
    const [buttonPressed, setButtonPressed] = useState(false);

    function handleToggleTask(task: TaskProps) {
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
                    onValueChange={() => handleToggleTask(task)}
                    color={isChecked ? "#5E60CE" : "#4EA8DE"}
                />
            </TouchableHighlight>

            <Text style={task.done ? styles.completedText : styles.text}>
                {task.task}
            </Text>

            {/* <TouchableHighlight
                underlayColor="#333333"
                onShowUnderlay={() => setButtonPressed(true)}
                onHideUnderlay={() => setButtonPressed(false)}
                onPress={() => onRemoveTask(task.id)}
            >
                <Trash size={21} color={buttonPressed ? '#E25858' : '#808080'} />
            </TouchableHighlight> */}
        </View>
    );
}
