// import { useState } from "react";
import { useMode, ColorModeContext } from "./theme";
import { ThemeProvider, CssBaseline } from "@emotion/react";

function App() {
  const [theme, colorMode] = useMode(true);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app"></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
