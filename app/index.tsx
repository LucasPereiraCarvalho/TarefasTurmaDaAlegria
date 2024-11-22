
// export default function App() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Ola, mundo!</Text>
//         </View>
//     );
// }

import { Home } from "@/src/screens/home";
import { StatusBar } from "react-native";

export default function App() {
  return (
      <>
          <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
          />
          <Home />
      </>
  );
}