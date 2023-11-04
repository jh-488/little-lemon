import React from "react";
import "./Footer.css";
import { footer } from "../data/Data";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // handle item click in footer
  const handleItemClick = (link, openInNewTab) => {
    if (openInNewTab) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <footer className="mtop">
        <div className="container grid3">
          <div>
            <img src="/assets/logo.png" alt="Little Lemon Logo"/>
          </div>
          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index2) => (
                  <li
                    key={index2}
                    onClick={() => {
                      if (items.page) {
                        handleItemClick(items.page, false);
                      } else if (items.url) {
                        handleItemClick(items.url, true);
                      }
                    }}
                  >
                    {items.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="copyright">
        <span>© 2023 Little Lemon. Created by <i>JH</i>.</span>
      </div>
    </>
  );
};

export default Footer;
