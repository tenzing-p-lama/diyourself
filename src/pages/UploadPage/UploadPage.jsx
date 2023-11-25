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
      <div className="upload-header">Contribute Your Project</div>
      <form className="upload-form" onSubmit={handleFormSubmit}>
        <h1 className="upload-title">Project Form</h1>
        <section className="upload-project">
          <div className="upload-project__category">
            <label htmlFor="category">
              <h3>Category</h3>
            </label>
            <select name="category" id="category">
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

          <div className="upload-project__item">
            <label htmlFor="title">
              <h3 className="upload-project__title">Title</h3>
            </label>
            <input type="text" name="title" id="title" required />
          </div>

          <div className="upload-project__item">
            <label htmlFor="description">
              <h3 className="upload-project__description">Description</h3>
            </label>
            <input type="text" name="description" id="description" required />
          </div>

          <div className="upload-project__item">
            <label htmlFor="materials">
              <h3 className="upload-project__materials">Materials Used</h3>
            </label>
            <input type="text" name="materials" id="materials" required />
          </div>

          <div className="upload-project__item">
            <label htmlFor="tools">
              <h3 className="upload-project__tools">Tools Required</h3>
            </label>
            <input type="text" name="tools" id="tools" required />
          </div>

          <div className="upload-project__item">
            <label htmlFor="cut-list">
              <h3 className="upload-project__cutlist">Cut List</h3>
            </label>
            <input type="text" name="cut-list" id="cut-list" required />
          </div>

          <div className="upload-project__item">
            <label>
              <h3 className="upload-project__image">Upload Finished Photo</h3>
            </label>
          </div>
        </section>

        <div className="upload__cancel-btn">
          <input className="upload__cancel" type="button" value="CANCEL" />
        </div>
      </form>
    </div>
  );
}

export default UploadPage;
