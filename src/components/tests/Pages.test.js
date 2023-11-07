import { updateTimes } from "../Pages";
import { fetchAPI } from "../api/Api";

describe("Reservation", () => {
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
