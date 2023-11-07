import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Reservation from "../reservation/Reservation";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchAPI, submitAPI } from "../api/Api";

describe("Reservation", () => {
  test("Submit button will be disabled if no name was entered", () => {
    // a mock 'availableTimes' prop to render the component
    const availableTimes = fetchAPI(new Date());
    // added Router to avoid useNavigate error
    render(
      <Router>
        <Reservation availableTimes={availableTimes} />
      </Router>
    );

    const name = screen.getByLabelText(/Name:/);
    fireEvent.change(name, { target: { value: null } });

    const submitButton = document.querySelector("#submit-btn");
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute("disabled");
  });

  test("Submit the form successfully when all important fields(name, date, time) are filler", async () => {
    const availableTimes = fetchAPI(new Date());
    const handleSubmit = jest.fn();

    render(
      <Router>
        <Reservation
          availableTimes={availableTimes}
          submitForm={handleSubmit}
        />
      </Router>
    );
    

    const name = screen.getByLabelText(/Name:/);
    fireEvent.change(name, { target: { value: "JH" } });

    const date = screen.getByLabelText(/Choose a date:/);
    fireEvent.change(date, { target: { value: "2024-11-12" } });

    const time = screen.getByLabelText(/Choose a time:/);
    fireEvent.change(time, { target: { value: "17:00" } });

    const submitButton = document.querySelector("#submit-btn");
    fireEvent.click(submitButton);

    await waitFor(() => {expect(handleSubmit).toHaveBeenCalled()})
  });
});
