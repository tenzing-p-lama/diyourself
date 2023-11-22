import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import projectsJSON from "./data/projects.json";

import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage";

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
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
