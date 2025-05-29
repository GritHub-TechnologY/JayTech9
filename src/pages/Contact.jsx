import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-teal text-white py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have a project in mind or a problem to solve? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
                ></textarea>
                {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                className="bg-green hover:bg-green-600 text-white px-6 py-3 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p>info@jaytech9.com</p>
                <p>jaytech9.9@outlook.com</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Phone/WhatsApp</h3>
                <p>+234 111 111 111</p>
                <p>0203651974</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p>Accra, Ghana</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-teal hover:text-green">LinkedIn</a>
                  <a href="#" className="text-teal hover:text-green">Facebook</a>
                  <a href="#" className="text-teal hover:text-green">Instagram</a>
                  <a href="#" className="text-teal hover:text-green">TikTok</a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-8 h-64 bg-gray-300 rounded-lg">
              {/* Replace with actual Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755238724263!2d-0.2004309256869156!3d5.60337979439382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTIuMiJOIDDCsDEyJzAxLjgiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh" 
                className="w-full h-full border-0 rounded-lg" 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}