import "./UploadPage.scss";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function UploadPage() {
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5050/projects`, {
        title: event.target.title.value,
        // image: "./upload.jpg",
        description: event.target.description.value,
        category: event.target.category.value,
        materials: event.target.materials.value,
        toolsRequired: ["hammer", "drill", "screwdriver"],
        steps: [],
      });

      // alert("video uploaded!");
      navigate("/");
    } catch (err) {
      console.log("Video not uploaded");
    }
  };

  const categories = ["Table", "Dresser", "Electronics", "Health", "Gear"];

  return (
    <div className="upload">
      <div className="upload-header">
        <h1>Contribute Your Project</h1>
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
                    {categories.map((category, index) => (
                      <option
                        key={index}
                        value={category}
                        placeholder="Please select"
                      >
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
                  placeholder="Please list the materials used for your project"
                  className="upload-project__input"
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
                  placeholder="Please list the tools required for your project"
                  className="upload-project__input"
                  required
                />
              </td>
            </tr>

            <tr className="upload-project__item">
              <th className="upload-project__item-th">
                <label htmlFor="cut-list" className="upload-project__label">
                  <h3>Cut List</h3>
                  <span>cut list required for project</span>
                </label>
              </th>

              <td className="upload-project__item-td">
                <textarea
                  name="cut-list"
                  id="cut-list"
                  cols="30"
                  rows="10"
                  placeholder="Please list the cut list for your project"
                  className="upload-project__input"
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

              <td>
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
