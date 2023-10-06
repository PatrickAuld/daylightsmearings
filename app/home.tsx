// pages/index.tsx
import Header from '../components/Header';

function Home() {
  return (
    <div className="relative">
      {/* Header overlayed on splash image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/splash.jpg" alt="Splash Image" className="object-cover w-full h-full" />
      </div>
      <Header />

      {/* Section 1: Slow Time Change */}
      <section className="flex flex-col md:flex-row items-center my-16">
        <img src="/time-change.jpg" alt="Time Change" className="md:w-1/2 w-full object-cover" />
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Slowly Changing The Time</h2>
          <p>
            Explain how today's technology can enable a gradual adjustment of time...
          </p>
        </div>
      </section>

      {/* Section 2: Health Benefits */}
      <section className="flex flex-col md:flex-row-reverse items-center my-16">
        <img src="/health-benefits.jpg" alt="Health Benefits" className="md:w-1/2 w-full object-cover" />
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Health Benefits</h2>
          <p>
            Discuss the health benefits of slowly adjusting the time...
          </p>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="flex flex-col md:flex-row items-center my-16">
        <img src="/call-to-action.jpg" alt="Call to Action" className="md:w-1/2 w-full object-cover" />
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Take Action</h2>
          <p>
            Encourage visitors to sign up for a mailing list and contact their representatives...
          </p>
          {/* Mailing List Signup Form (Placeholder) */}
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded mb-2 w-full"
            />
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
