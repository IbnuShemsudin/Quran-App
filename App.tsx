import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/context/AppContext";
import Tabs from "./src/navigation/Tabs";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </AppProvider>
  );
}
