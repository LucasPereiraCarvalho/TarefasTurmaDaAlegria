import { StyleSheet } from "react-native";

const baseStylesTextInput = StyleSheet.create({
    input: {
        flex: 1,
        height: 52,
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: "#0D0D0D",
        borderRadius: 6,
        color: "#F2F2F2",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
});

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 12,
    },
    textInput: {
        ...baseStylesTextInput.input,
        borderColor: "#0D0D0D",
    },
    textInputFocus: {
        ...baseStylesTextInput.input,
        borderColor: "#5E60CE",
    },
    button: {
        width: 52,
        height: 52,
        borderRadius: 6,
        backgroundColor: "#1E6F9F",
        alignItems: "center",
        justifyContent: "center",
    },
    plus: {
        width: 32,
        height: 32,
    },
});
