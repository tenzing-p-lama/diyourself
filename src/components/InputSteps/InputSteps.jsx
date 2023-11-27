import React, { useState } from "react";
import "./InputSteps.scss";

function InputSteps() {
  return (
    <>
      {steps.map((step, index) => (
        <div key={index}>
          <label htmlFor={`stepNumber${index}`}>Step Number:</label>
          <input
            type="text"
            id={`stepNumber${index}`}
            value={step.stepNumber}
            onChange={(e) =>
              handleStepChange(index, "stepNumber", e.target.value)
            }
          />

          <label htmlFor={`stepTitle${index}`}>Step Title:</label>
          <input
            type="text"
            id={`stepTitle${index}`}
            value={step.stepTitle}
            onChange={(e) =>
              handleStepChange(index, "stepTitle", e.target.value)
            }
          />

          <label htmlFor={`detail${index}`}>Detail:</label>
          <textarea
            id={`detail${index}`}
            value={step.detail}
            onChange={(e) => handleStepChange(index, "detail", e.target.value)}
          />

          <label htmlFor={`images${index}`}>Images:</label>
          <input
            type="text"
            id={`images${index}`}
            value={step.images}
            onChange={(e) => handleStepChange(index, "images", e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddStep}>
        Add Step
      </button>
    </>
  );
}

export default InputSteps;
