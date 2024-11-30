import { Image, Text, View } from "react-native";
import icon_logo from "../../../assets/images/icon_logo.png";
import { styles } from "./styles";

export function Header() {
    return (
        <View style={styles.header}>
            <Image source={icon_logo} style={styles.logo} />
            <Text style={styles.text}>Turma Da Alegria</Text>
        </View>
    );
}
