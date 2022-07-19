import React from "react";
import BlogList from "../Components/BlogList";
import Down from "../Components/Down";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="container flex justify-center mx-auto my-8">
        <section className="basis-4/6 ">
          <BlogList />
        </section>
      </section>
      <section className="container flex justify-center mx-auto my-16">
        <section className="basis-4/6 ">
          <Footer />
        </section>
      </section>
      <section>
        <Down />
      </section>
    </div>
  );
};

export default Home;
