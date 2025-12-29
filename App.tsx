import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/context/AppContext";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import Tabs from "./src/navigation/BottomTabs";

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
    </AppProvider>
  );
}
