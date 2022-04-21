import "./App.css";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}></ThemeProvider>
    </div>
  );
}

export default App;
