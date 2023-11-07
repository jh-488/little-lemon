import React from "react";
import "./ConfirmationPage.css";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigateToReservationPage = () => {
        navigate("/reservations")
    }

  return (
    <>
      <section className="confirmation">
        <div className="container mtop">
          <div>
            <i className="fa fa-circle-check"></i>
          </div>
          <div className="text">
            <p>You have successfully reserved a table!</p>
            <div>
                <h4>{location.state.date}</h4>
                <h4>{location.state.time}</h4>
            </div>
            <p>Thank you and see you by then.</p>
          </div>
          <button onClick={navigateToReservationPage}>
            Make another reservation
          </button>
        </div>
      </section>
    </>
  );
};

export default ConfirmationPage;
