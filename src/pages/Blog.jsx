import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const posts = [
    {
      title: "5 Ways Tech is Changing Farming in Africa",
      excerpt: "Discover how technology is revolutionizing agriculture across the continent.",
      date: "May 15, 2023",
      category: "AgriTech"
    },
    {
      title: "Why Every Small Business Needs a Website",
      excerpt: "In today's digital age, an online presence is no longer optional for businesses.",
      date: "April 28, 2023",
      category: "Business"
    },
    {
      title: "How to Choose the Right Tools for Your Startup",
      excerpt: "A guide to selecting technology solutions that scale with your business.",
      date: "March 10, 2023",
      category: "Tech"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-teal text-white py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">Blog</h1>
          <p className="text-xl max-w-3xl">
            Insights, stories, and tech tips from our team
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 bg-gray-300"></div> {/* Placeholder for image */}
              <div className="p-6">
                <span className="text-green text-sm font-medium">{post.category}</span>
                <h3 className="text-xl font-bold my-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-teal hover:text-green font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gray-light rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Stay Updated</h3>
          <p className="text-center mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tech insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green"
            />
            <button className="bg-green hover:bg-green-600 text-white px-6 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}