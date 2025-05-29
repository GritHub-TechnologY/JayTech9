import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      title: "Web & App Development",
      desc: "We build custom websites and mobile apps that are fast, responsive, and user-friendly. Whether it's a business website, e-commerce store, or mobile application, we make your digital presence shine.",
      icon: "🌐"
    },
    {
      title: "Business Growth Tools",
      desc: "Automate your workflows, manage customers, analyze data, and scale your operations. We develop smart systems that save you time and increase revenue.",
      icon: "📈"
    },
    {
      title: "AgriTech Solutions",
      desc: "From simple crop tracking tools to full farm management systems, we help farmers embrace technology to improve productivity and reduce costs.",
      icon: "🚜"
    },
    {
      title: "Custom Tech Solutions",
      desc: "Have a unique problem? Let us help you design and build a custom solution from scratch.",
      icon: "🛠️"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-teal text-white py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Tailored solutions for businesses and farmers
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 container mx-auto">
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="text-8xl flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Need a custom solution?</h3>
          <button className="bg-green hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg">
            Get a Custom Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}