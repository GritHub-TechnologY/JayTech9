// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./layout/RootLayout";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// // import About from "./pages/Products";
// import Hero from "./pages/Hero";
// import AboutServices from "./pages/AboutServices";
// // import AboutOwner from "./pages/AboutOwner";
// import Products from "./pages/Products";
// import Testimonials from "./components/Testimonials";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />, 
//     children: [
//       { index: true, element: <Home /> }, 
//       { path: "hero", element: <Hero /> },
//       { path: "about", element: <AboutServices /> },
//       { path: "contact", element: <Contact /> },
//       // { path: "owner", element: <AboutOwner /> },
//       { path: "products", element: <Products /> },
//       { path: "testimonials", element: <Testimonials /> },
     
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}