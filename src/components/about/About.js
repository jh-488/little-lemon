import React from "react";
import "./About.css";
import Heading from "../heading/Heading";

const About = () => {
  return (
    <>
      <section className="about">
        <Heading
          title="About Us"
          subtitle="Who we are ?"
          image="/assets/mario-adrian.jpg"
        />
        <div className="container grid2 mtop">
          <div className="left">
            <p>
              Welcome to Little Lemon, a warm and inviting Mediterranean
              restaurant that has been a labor of love for our family for
              generations. Nestled in the heart of Chicago, we take immense
              pride in bringing the rich flavors of the Mediterranean to your
              plate, with a contemporary twist that makes dining with us a truly
              unique and unforgettable experience.
            </p>
            <h4>
              <i className="fa fa-circle-check"></i>Our Family Heritage
            </h4>
            <p>
              At Little Lemon, we draw inspiration from our deep-rooted
              Mediterranean heritage, where culinary traditions have been passed
              down from one generation to the next. Our family's passion for
              food and a love for bringing people together around the table is
              the driving force behind our restaurant. Our recipes have been
              carefully guarded and perfected over time, and we're delighted to
              share these authentic flavors with you.
            </p>
            <h4>
              <i className="fa fa-circle-check"></i>Traditional Recipes, Modern
              Twist
            </h4>
            <p>
              We believe in honoring the authenticity of Mediterranean cuisine,
              while also infusing it with a modern twist that excites the
              palate. Our chefs are masters of their craft, using the finest and
              freshest ingredients to create dishes that pay homage to
              traditional recipes, yet with a contemporary flair that keeps our
              menu exciting and innovative.
            </p>
            <h4>
              <i className="fa fa-circle-check"></i>A Culinary Journey
            </h4>
            <p>
              Step inside Little Lemon and embark on a culinary journey that
              takes you through the vibrant streets of the Mediterranean. From
              the savory aroma of freshly baked pita to the sizzle of kebabs on
              the grill, our menu offers a wide array of dishes that cater to
              all tastes. Whether you're a fan of our succulent lamb shawarma,
              crave the freshness of our Greek salad, or are intrigued by our
              fusion creations, you'll find something to delight your senses.
            </p>
            <h4>
              <i className="fa fa-circle-check"></i>Warm Hospitality
            </h4>
            <p>
              At Little Lemon, we treat our guests like an extension of our own
              family. We are dedicated to providing exceptional service,
              ensuring that your dining experience is memorable and filled with
              genuine warmth and hospitality. Our inviting atmosphere, adorned
              with Mediterranean accents and soothing music, sets the stage for
              a truly immersive journey.
            </p>
            <h4>
              <i className="fa fa-circle-check"></i>Local and Sustainable
              Ingredients
            </h4>
            <p>
              We take our commitment to quality seriously. That's why we source
              our ingredients locally whenever possible, supporting our
              community and ensuring that our dishes are made with the freshest
              and most sustainable produce available.
            </p>
            <h4>
              <i className="fa fa-circle-check"></i>Come Join Us
            </h4>
            <p>
              Whether you're looking for a casual dinner with friends, a
              romantic evening, or a place to celebrate life's special moments,
              Little Lemon is the perfect destination. Our family welcomes your
              family, and we can't wait to share our passion for Mediterranean
              cuisine with you.
            </p>
          </div>
          <div className="right">
            <img src="/assets/restaurant.jpg" alt="restaurant Chef" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
