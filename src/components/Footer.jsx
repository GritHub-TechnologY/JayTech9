// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "@/assets/images/logo.png";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   const companyLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Our Products", path: "/products" },
//     { name: "Services", path: "/products" },
//     { name: "Testimonials", path: "/testimonials" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const productLinks = [
//     { name: "Asaase Aduane", path: "/products" },
//     { name: "Organic Fertilizer", path: "/products" },
//     { name: "Soil Amendment", path: "/products" },
//     { name: "Natural Pesticide", path: "/products" },
//   ];

//   return (
//     <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-2">
//               <img src={logo} alt="JAASGROW" className="h-12 w-12" />
//               <div>
//                 <h3 className="text-xl font-bold">
//                   Jaas<span className="text-green-300">GROW</span> Limited
//                   Company
//                 </h3>
//               </div>
//             </div>
//             <p className="text-white text-sm leading-relaxed">
//               Nurture the Earth, Empower Farmers, Promote Environmentally
//               Sustainable Agriculture, and a Genuine and Safe Food System for
//               the Future.
//             </p>

//             <div className="flex space-x-4">
//               <Link to="https://www.facebook.com/jaasgrowltd">
//                 <FaFacebook className="text-green-200 text-xl" />
//               </Link>
//               <Link to="https://www.instagram.com/jaasgrowltd/">
//                 <FaInstagram className="text-green-200 text-xl" />
//               </Link>
//               <Link
//                 to="https://www.linkedin.com/company/jaasgrowltd/
// "
//               >
//                 <FaLinkedin className="text-green-200 text-xl" />
//               </Link>
//               <Link
//                 to="https://twitter.com/jaasgrowltd
// "
//               >
//                 <FaXTwitter className="text-green-200 text-xl" />
//               </Link>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 flex items-center text-green-200">
//               Company
//             </h4>
//             <ul className="space-y-3">
//               {companyLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-white hover:text-green-400 transition-colors duration-200 text-sm flex items-center"
//                   >
//                     <span className="mr-2">›</span>
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Products */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 flex items-center text-green-200">
//               Products
//             </h4>
//             <ul className="space-y-3">
//               {productLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-white hover:text-green-400 transition-colors duration-200 text-sm flex items-center"
//                   >
//                     <span className="mr-2">›</span>
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-6 flex items-center text-green-200">
//               Contact Us
//             </h4>
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   to="https://www.google.com/maps/search/university+of+cape+coast+Akotokyer+00023/@5.1106051,-1.2902553,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDMwMi4wIKXMDSoASAFQAw%3D%3D"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-start space-x-3 text-white hover:text-green-400 transition-colors duration-200"
//                 >
//                   <FaMapMarkerAlt className="mt-1" />
//                   <span className="text-sm">
//                     UCC, Cape Coast, Akotokyer 00023, GH
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="tel:+233246887818"
//                   className="flex items-center space-x-3 text-white hover:text-green-400 transition-colors duration-200"
//                 >
//                   <FaPhone />
//                   <span className="text-sm">
//                     +233 246 887 818, +233 553 115 662
//                   </span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="mailto:jaasgrowcompanyltd@gmail.com"
//                   className="flex items-center space-x-3 text-white hover:text-green-400 transition-colors duration-200"
//                 >
//                   <FaEnvelope />
//                   <span className="text-sm">jaasgrowcompanyltd@gmail.com</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-green-800">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//             <p>
//               © {new Date().getFullYear()} JAASGROW LIMITED COMPANY. All rights
//               reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link
//                 to="/#"
//                 className="hover:text-green-400 transition-colors duration-200"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="/"
//                 className="hover:text-green-400 transition-colors duration-200"
//               >
//                 Terms of Service
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Jaytech9</h3>
          <p>Empowering growth with smart tech solutions.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green">Home</a></li>
            <li><a href="/services" className="hover:text-green">Services</a></li>
            <li><a href="/portfolio" className="hover:text-green">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p>info@jaytech9.com</p>
          <p>+234 XXX XXX XXXX</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green">Twitter</a>
            <a href="#" className="hover:text-green">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Jaytech9. All rights reserved.</p>
      </div>
    </footer>
  );
}