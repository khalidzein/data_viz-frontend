import React from "react";
import "./App.scss";
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebars from "./components/Sidebar/Sidebars";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <>
            <Router>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <div className="App">
                            <Sidebars />
                            <main className="content">
                                <Navbar />
                                <Switch>
                                    <Route
                                        path="/"
                                        exact
                                        component={Dashboard}
                                    ></Route>
                                    <Route></Route>
                                    <Route></Route>
                                    <Route></Route>
                                    <Route></Route>
                                    <Route></Route>
                                </Switch>
                            </main>
                        </div>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </Router>
        </>
    );
}

export default App;
