import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  const values = [
    {
      title: "Integrity",
      desc: "We deliver what we promise",
      icon: "🤝",
    },
    {
      title: "Innovation",
      desc: "We create with purpose",
      icon: "💡",
    },
    {
      title: "Collaboration",
      desc: "We grow better together",
      icon: "👥",
    },
    {
      title: "Empowerment",
      desc: "We help people thrive through technology",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-teal text-white py-20 px-6 h-[60vh] pt-40">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Who We Are
          </h1>
          <p className="text-xl max-w-3xl">
            Jaytech9 was founded to help solve real-world problems <br />using the
            power of technology.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green">Our Mission</h3>
            <p>
              To provide smart, scalable, and human-centered tech solutions that
              drive real growth.
            </p>
          </div>
          <div className="bg-gray-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green">Our Vision</h3>
            <p>
              To be a leading African tech company known for impact, simplicity,
              and sustainable innovation.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
