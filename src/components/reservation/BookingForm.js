import React from "react";
import { useFormik } from "formik";
import { formSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

const BookingForm = ({availableTimes, submitForm}) => {
  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: {
      name: "",
      date: "",
      time: "",
      guests: 1,
      occasion: ""
    },
    validationSchema: formSchema,
    onSubmit: (values, actions) => {
      submitForm(values);
      actions.resetForm();
      navigate("/confirmation", {state:{date:values.date,time:values.time}})
    },
  })


  return (
    <>
      <div className="form">
        <form className="shadow" onSubmit={handleSubmit}>
          <fieldset>
            <div className="field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
              />
              {errors.name && touched.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="field grid2">
              <div>
                <label htmlFor="date">Choose a date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.date && touched.date ? "input-error" : ""}
                />
                {errors.date && touched.date && <p className="error">{errors.date}</p>}
              </div>
              <div>
                <label htmlFor="time">Choose a time:</label>
                <select
                  id="time"
                  name="time"
                  value={values.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.time && touched.time ? "input-error" : ""}
                >
                  <option value="">-- Please choose a time</option>
                  {availableTimes.map(aTime => <option key={aTime}>{aTime}</option>)}
                </select>
                {errors.time && touched.time && <p className="error">{errors.time}</p>}
              </div>
            </div>
            <div className="field">
              <label htmlFor="guests">Number of guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={values.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.guests && touched.guests ? "input-error" : ""}
              />
              {errors.guests && touched.guests && <p className="error">{errors.guests}</p>}
            </div>
            <div className="field">
              <label htmlFor="occasion">
                Occasion: <span>(optional)</span>
              </label>
              <select
                id="occasion"
                name="occasion"
                value={values.occasion}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.occasion && touched.occasion ? "input-error" : ""}
              >
                <option value="">-- What's the occasion</option>
                <option value="birthday">Birthday</option>
                <option value="event">Event</option>
              </select>
              {errors.occasion && touched.occasion && <p className="error">{errors.occasion}</p>}
            </div>
            <button
              type="submit"
              disabled={!values.name || !values.date || !values.time}
              className={(!values.name || !values.date || !values.time) ? "btn-disabled" : ""}
              id="submit-btn"
            >
              Make a reservation
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
