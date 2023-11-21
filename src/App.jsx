import { useState } from "react";
import projectsJSON from "./data/projects.json";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  const [projectsList, setProjectsList] = useState(projectsJSON);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects"
            element={<ProjectsPage projectsList={projectsList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
