import React from "react";
import BlogList from "../Components/BlogList";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="container mx-5 flex gap-x-2 my-8">
        <section className="basis-1/6"></section>
        <section className="basis-4/6 ">
          <BlogList />
        </section>
        <article className="basis-1/6"></article>
      </section>
    </div>
  );
};

export default Home;
