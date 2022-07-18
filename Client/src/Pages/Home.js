import React from "react";
import BlogList from "../Components/BlogList";
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
        <Footer/>
        </section>
      </section>
      <section>
        <Down/>
      </section>
    </div>
  );
};

export default Home;


const Down = () =>{
return(
  <div className="bg-black flex flex-col items-center justify-center text-white h-28">
            <div class="">
                <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center justify-center">
                <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-2xl">
                    <ion-icon name="logo-instagram"></ion-icon>
                </p>
                <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-2xl">
                    <ion-icon name="logo-twitter"></ion-icon>
                </p>
                <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-2xl">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </p>
                </ul>
            </div>
            <p>© 2022 by <span className="text-blue-500 capitalize">Joshua clifford</span> Proudly created by Me</p>
        </div>
)
}