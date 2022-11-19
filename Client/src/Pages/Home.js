import React, { useEffect } from "react";
import BlogList from "../Components/BlogList";
import Down from "../Components/Down";
import Footer from "../Components/Footer";
import Hero1 from "../Components/Hero1";
import Navbar from "../Components/Navbar";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Navbar />
      <Hero1 />
      <section className="container flex justify-center mx-auto my-8">
        <section className="lg:basis-4/6">
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
