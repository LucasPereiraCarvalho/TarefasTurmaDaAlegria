import { Body } from "@/src/components/body/body";
import { Header } from "@/src/components/header/header";
import { View } from "react-native";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Body />
        </View>
    );
}
