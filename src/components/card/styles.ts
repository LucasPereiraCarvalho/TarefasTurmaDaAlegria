import { StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
    text: {
        flex: 1,
        color: "#F2F2F2",
    },
});

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 8,
        gap: 8,
        marginBottom: 8,
        elevation: 1,
    },
    checkbox: {
        width: 20,
        height: 20,
        padding: 1,
        borderRadius: 999,
        borderWidth: 4,
        marginRight: 5,
    },
    checkboxUnchecked: {
        width: 20,
        height: 20,
        padding: 1,
        borderRadius: 999,
        borderWidth: 2,
        marginRight: 5,
    },
    text: {
        ...baseStyles.text,
    },
    completedText: {
        ...baseStyles.text,
        textDecorationLine: "line-through",
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    remove: {
        width: 32,
        height: 32,
    },
    textContainer: {
        flex: 1,
        gap:6,
    },
});
