import { StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
    input: {
        // flex: 1,
        // height: 52,
        // backgroundColor: "#262626",
        // borderWidth: 1,
        // borderColor: "#0D0D0D",
        // borderRadius: 6,
        // color: "#F2F2F2",
        // padding: 16,
        // fontSize: 16,

        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: "#F2F2F2",
    },
    button: {
        // padding: 16,
        marginTop: 14,
        height: 52,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 10,
    },
});

export const styles = StyleSheet.create({
    container: {
        marginTop: -30,
        paddingBottom: 26,
    },
    textInput: {
        ...baseStyles.input,
        borderColor: "#0D0D0D",
    },
    textInputFocus: {
        ...baseStyles.input,
        borderColor: "#3498db",
    },
    button: {
        ...baseStyles.button,
        backgroundColor: "#1E6F9F",
    },
    buttonError: {
        ...baseStyles.button,
        backgroundColor: "#992020",
    },
    plus: {
        width: 32,
        height: 32,
        marginTop: 4,
    },
    label: {
        ...baseStyles.label,
        color: "#F2F2F2",
    },
});
