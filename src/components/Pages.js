import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import About from "./about/About";
import Menu from "./menu/Menu";
import Reservation from "./reservation/Reservation";
import { fetchAPI, submitAPI } from "../components/api/Api";
import ConfirmationPage from "./confirmation/ConfirmationPage";
import ScrollToTop from "./helpers/ScrollToTop";

// Update the availableTimes afer the user chooses one
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "updateTimes":
      return state.filter((aTime) => aTime !== action.payload);
    default:
      return state;
  }
};

// Initial state of the available times (["17:00", "17:30", "19:00", "22:30", "23:00", "23:30"])
const initializeTimes =  fetchAPI(new Date());

const Pages = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  // Check if form is submitted then update the availableTimes
  const submitForm = (formData) => {
    const reservationSuccess = submitAPI(formData);

    if (reservationSuccess) {
      dispatch({ type: "updateTimes", payload: formData.time });
    }
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route
            path="/reservations"
            element={<Reservation availableTimes={availableTimes} submitForm={submitForm}/>} 
          ></Route>
          <Route path="/confirmation" Component={ConfirmationPage}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
