import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import { appRoutes } from "./routes/appRoutes";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar></NavigationBar>
                <Routes>
                    {appRoutes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.component}
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
