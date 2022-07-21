import React from "react";
import Down from "../Components/Down";
import Navbar from "../Components/Navbar";
import Joshua from "../Components/Joshua";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <section className="">
        <Joshua />
      </section>

      <section>
        <Down />
      </section>
    </div>
  );
};

export default AboutMe;
