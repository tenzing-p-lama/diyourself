import "./UploadPage.scss";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
import projectsJSON from "../../data/projects.json";
import { v4 as uuidv4 } from "uuid";

import upload from "../../assets/images/upload.jpg";
import stepimg from "../../assets/images/planning.jpg";

function UploadPage() {
  const navigate = useNavigate();
  const [projectsJSON, setProjectsJSON] = useState([]);

  // steps
  const [steps, setSteps] = useState([
    {
      id: "1",
      stepNumber: "1",
      stepTitle: "",
      detail: "",
      images: "/images/upload.jpg",
    },
  ]);
  const [idCounter, setIdCounter] = useState(2);
  const handleAddStep = () => {
    setSteps((prevSteps) => [
      ...prevSteps,
      {
        id: idCounter.toString(),
        stepNumber: idCounter.toString(),
        stepTitle: "",
        detail: "",
        images: "/images/upload.jpg",
      },
    ]);
    setIdCounter((prevCounter) => prevCounter + 1);
  };
  const handleStepChange = (index, field, value) => {
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[index][field] = value;
      return newSteps;
    });
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   const updatedSteps = steps.map((step) => ({
  //     ...step,
  //     stepNumber: `Step ${step.stepNumber}:`,
  //   }));

  //   try {
  //     const response = await axios.post(
  //       `https://diyourself-986a58a2ea07.herokuapp.com/projects`,
  //       {
  //         title: event.target.title.value,
  //         image: ["/images/upload.jpg"],
  //         description: event.target.description.value,
  //         category: event.target.category.value,
  //         materials: event.target.materials.value
  //           .split(",")
  //           .map((item) => item.trim()),
  //         toolsRequired: event.target.tools.value
  //           .split(",")
  //           .map((item) => item.trim()),
  //         cutList: event.target.cutlist.value
  //           .split(",")
  //           .map((item) => item.trim()),
  //         steps:
  //           updatedSteps.length > 0 ? updatedSteps.slice(0) : steps.slice(0),
  //       }
  //     );
  //     navigate("/projects");
  //   } catch (err) {
  //     console.log("Project not uploaded", err);
  //   }
  // };

  //use projectsJSON instead of making axios request
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updatedSteps = steps.map((step) => ({
      ...step,
      stepNumber: `Step ${step.stepNumber}:`,
    }));

    // Generate a unique ID for the new project
    const projectId = uuidv4().toString();

    // Update the local JSON file
    const newProject = {
      id: projectId,
      title: event.target.title.value,
      image: ["/images/upload.jpg"],
      description: event.target.description.value,
      category: event.target.category.value,
      materials: event.target.materials.value
        .split(",")
        .map((item) => item.trim()),
      toolsRequired: event.target.tools.value
        .split(",")
        .map((item) => item.trim()),
      cutList: event.target.cutlist.value.split(",").map((item) => item.trim()),
      steps: updatedSteps.length > 0 ? updatedSteps.slice(0) : steps.slice(0),
    };

    // Retrieve existing projects from localStorage
    const storedProjectsJSON =
      JSON.parse(localStorage.getItem("projectsJSON")) || [];
    // Update the local JSON data
    const updatedProjects = [...storedProjectsJSON, newProject];

    localStorage.setItem("projectsJSON", JSON.stringify(updatedProjects));

    // Update state with existing projects
    setProjectsJSON(updatedProjects);

    navigate("/projects");
  };

  useEffect(() => {
    // Retrieve projects from localStorage when the component mounts
    const storedProjectsJSON =
      JSON.parse(localStorage.getItem("projectsJSON")) || [];

    // Update state with existing projects
    setProjectsJSON(storedProjectsJSON);
  }, []);

  const categories = ["Table", "Dresser", "Vanity", "Cabinet", "Bench"];
  const predefinedValues = {
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    tools: [
      "Hammer",
      "Screwdriver",
      "Saw",
      "Drill",
      "Sander",
      "Router",
      "Tape Measure",
    ],
    materials: [
      "1 Plywood Sheet",
      "1 Birch Plywood",
      "1 Oak Plywood",
      "Nails",
      "Paint",
      "Screws",
      "Stain/Finish",
    ],
    cutlist: ["Board 1", "Board 2", "Panel A", "Panel B", "Bracket C"],
  };
  const [values, setValues] = useState({
    description: "",
    tools: "",
    materials: "",
    cutlist: "",
  });
  const handleAutoFill = (name) => {
    const valueText = predefinedValues[name].join(", ");
    setValues((prevValues) => ({ ...prevValues, [name]: valueText }));
  };

  return (
    <div className="upload">
      <div className="upload-header">
        <h1>Add Your Project</h1>
      </div>

      <form className="upload-form" onSubmit={handleFormSubmit}>
        <h2 className="upload-title">Project Details</h2>

        <table className="upload-project">
          <tbody>
            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label
                  htmlFor="category"
                  className="upload-project__label category"
                >
                  <h3>Category</h3>
                  <span>category of your project</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <div className="dropdown">
                  <select
                    name="category"
                    id="category"
                    className="upload-project__input upload-project__input-dropdown"
                  >
                    <option value="" disabled selected>
                      --
                    </option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </td>
            </tr>

            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label htmlFor="title" className="upload-project__label">
                  <h3>Title</h3>
                  <span>project title</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Please enter your project title"
                  className="upload-project__input upload-project__input-text"
                  required
                />
              </td>
            </tr>

            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label htmlFor="description" className="upload-project__label">
                  <h3>Description</h3>
                  <span>project description</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="Please enter a short project description"
                  className="upload-project__input"
                  defaultValue={values.description}
                  onFocus={() => handleAutoFill("description")}
                  required
                />
              </td>
            </tr>

            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label htmlFor="materials" className="upload-project__label">
                  <h3>Materials</h3>
                  <span>materials used for project</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <textarea
                  name="materials"
                  id="materials"
                  cols="30"
                  rows="10"
                  placeholder="Please list the materials used for your project - separated by commas"
                  className="upload-project__input"
                  defaultValue={values.materials}
                  onFocus={() => handleAutoFill("materials")}
                  required
                />
              </td>
            </tr>

            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label htmlFor="tools" className="upload-project__label">
                  <h3>Tools</h3>
                  <span>tools required for project</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <textarea
                  name="tools"
                  id="tools"
                  cols="30"
                  rows="10"
                  placeholder="Please list the tools required for your project - separated by commas"
                  className="upload-project__input"
                  defaultValue={values.tools}
                  onFocus={() => handleAutoFill("tools")}
                  required
                />
              </td>
            </tr>

            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label htmlFor="cutlist" className="upload-project__label">
                  <h3>Cut List</h3>
                  <span>cut list required for project</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <textarea
                  name="cutlist"
                  id="cutlist"
                  cols="30"
                  rows="10"
                  placeholder="Please list the cut list for your project - separated by commas"
                  className="upload-project__input"
                  defaultValue={values.cutlist}
                  onFocus={() => handleAutoFill("cutlist")}
                  required
                />
              </td>
            </tr>

            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label className="upload-project__label">
                  <h3>Photos</h3>
                  <span>upload photos of finished projects</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <img
                  className="upload-project__img"
                  src={upload}
                  alt="project-complete"
                />
              </td>
            </tr>

            <tr className="upload-project__item steps">
              <th className="upload-project__item-th">
                <label htmlFor="steps" className="upload-project__label">
                  <h3>Steps</h3>
                  <span>list of steps to follow</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                {steps.map((step, index) => (
                  <div key={index} className="upload-project__step">
                    <section className="upload-project__step-list">
                      <label
                        htmlFor={`stepNumber${index}`}
                        className="upload-project__step-item"
                      >
                        <h4>Step Number:</h4>
                      </label>
                      <h4
                        id={`stepNumber${index}`}
                        className="upload-project__input"
                        value={step.stepNumber}
                        onChange={(e) =>
                          handleStepChange(index, "stepNumber", e.target.value)
                        }
                      >
                        {step.stepNumber}
                      </h4>
                    </section>

                    <section className="upload-project__step-list">
                      <label
                        htmlFor={`stepTitle${index}`}
                        className="upload-project__step-item"
                      >
                        <h4>Step Title:</h4>
                      </label>
                      <input
                        type="text"
                        id={`stepTitle${index}`}
                        value={step.stepTitle}
                        placeholder="Please enter a title for each step"
                        className="upload-project__input"
                        onChange={(e) =>
                          handleStepChange(index, "stepTitle", e.target.value)
                        }
                      />
                    </section>

                    <section className="upload-project__step-list">
                      <label
                        htmlFor={`detail${index}`}
                        className="upload-project__step-item"
                      >
                        <h4>Detail:</h4>
                      </label>
                      <textarea
                        id={`detail${index}`}
                        value={step.detail}
                        placeholder="Please enter the details to follow for each step"
                        className="upload-project__input"
                        onChange={(e) =>
                          handleStepChange(index, "detail", e.target.value)
                        }
                      />
                    </section>

                    <section className="upload-project__step-list">
                      <label
                        htmlFor={`images${index}`}
                        className="upload-project__step-item"
                      >
                        <h4>Photo:</h4>
                      </label>
                      <img
                        src={stepimg}
                        alt="step plan"
                        className="upload-project__step-img"
                        onChange={(e) =>
                          handleStepChange(index, "images", e.target.value)
                        }
                      />
                    </section>

                    <button
                      type="button"
                      className="btn-two"
                      onClick={handleAddStep}
                    >
                      <h4>ADD STEP</h4>
                    </button>
                  </div>
                ))}

                <div className="upload__buttons">
                  <input className="btn" type="submit" value="PUBLISH" />

                  <Link to="/projects">
                    <input className="btn" type="button" value="CANCEL" />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UploadPage;
