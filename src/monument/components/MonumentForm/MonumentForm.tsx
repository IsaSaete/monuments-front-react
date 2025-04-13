import React from "react";
import "./MonumentForm.css";

const MonumentForm: React.FC = () => {
  return (
    <div className="form-container">
      <h2 className="form__title">Add a new monument</h2>
      <form className="form">
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name:
          </label>
          <input type="text" id="name" className="form__input" required />
        </div>
        <div className="form__group">
          <label htmlFor="imageURL" className="form__label">
            Image URL:
          </label>
          <input type="url" id="imageURL" className="form__input" required />
        </div>
        <div className="form__group">
          <label htmlFor="city" className="form__label">
            City:
          </label>
          <input type="text" id="city" className="form__input" required />
          <label htmlFor="country" className="form__label">
            Country:
          </label>
          <input type="text" id="country" className="form__input" required />
        </div>
        <div className="form__group">
          <label htmlFor="description" className="form__label">
            Description:
          </label>
          <textarea id="description" className="form__textarea" required />
        </div>
        <button className="form__button" type="submit">
          Add monument
        </button>
      </form>
    </div>
  );
};

export default MonumentForm;
