import React from "react";
import "./App.scss";
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebars from "./components/Sidebar/Sidebars";
import Teams from "./pages/Teams/Teams";
import Calender from "./pages/Calendar/Calender";
import Bar from "./pages/Bar/Bar";
import Pie from "./pages/Pie/Pie";
import Line from "./pages/Line/Line";
import Geo from "./pages/Geo/Geo";

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
                                    <Route
                                        path="/teams"
                                        component={Teams}
                                    ></Route>
                                    <Route
                                        path="/calendar"
                                        component={Calender}
                                    ></Route>
                                    <Route
                                        path="/barchart"
                                        component={Bar}
                                    ></Route>
                                    <Route
                                        path="/piechart"
                                        component={Pie}
                                    ></Route>
                                    <Route
                                        path="/linechart"
                                        component={Line}
                                    ></Route>
                                    <Route
                                        path="/geochart"
                                        component={Geo}
                                    ></Route>
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
