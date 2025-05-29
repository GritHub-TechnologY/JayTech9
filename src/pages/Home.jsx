// import React from "react";
// import Hero from "./Hero";

// import Contact from "./Contact";

// import AboutOwner from "./AboutOwner";
// import Products from "./Products";
// import AboutServices from "./AboutServices";
// import Testimonials from "../components/Testimonials";

// const Home = () => {
//   return (
//     <div>
//       <Hero />
//       <AboutServices />
//       {/* <AboutOwner /> */}
//       <Products />
//       <Testimonials />
//       <Contact />

//     </div>
//   );
// };

// export default Home;

import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  const services = [
    {
      title: "Web & App Development",
      desc: "Modern, mobile-friendly websites and apps to launch your business.",
      icon: "💻",
    },
    // Add other services...
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with background image */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
