import { fireEvent, render, screen } from "@testing-library/react";
import { updateTimes } from "../Pages";
import Reservation from "../reservation/Reservation";
import { BrowserRouter as Router } from "react-router-dom";
import { fetchAPI } from "../api/Api";

describe("Reservation", () => {
  test("Submit button will be disabled if no name was entered", () => {
    // a mock 'availableTimes' prop to render the component
    const availableTimes = ["17:00", "17:30"];
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

  test(`initializeTimes returns an array of times eg.: ["17:00", "17:30", "19:00", "22:30", "23:00", "23:30"]`, () => {
    const initializeTimes = fetchAPI(new Date());

    expect(Array.isArray(initializeTimes)).toBe(true);
    expect(initializeTimes.length).toBeGreaterThan(0);
    expect(initializeTimes).toContain("17:00");
  });

  test(`updateTimes(state, action) updates the availableTimes when called with an argument action = {type: "updateTimes", payload: "17:00"}`, () => {
    const state = ["17:00", "17:30", "19:00", "22:30", "23:00", "23:30"];
    const action = { type: "updateTimes", payload: "17:00" };
    const result = updateTimes(state, action);

    expect(result).not.toContain("17:00");
  });
});
