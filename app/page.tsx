// pages/index.tsx
import Image from 'next/image'

function Home() {
  return (
    <div className="relative">
      {/* Header overlayed on splash image */}

       <div className="relative h-screen flex items-center justify-center bg-cover bg-center"
                 style={{ backgroundImage: 'url(/splash.png)' }}>

                    <header className="p-4 text-white">
                          <div className="container mx-auto">
                            Daylight Smearings
                          </div>
                        </header>
      </div>


      {/* Section 1: Slow Time Change */}
      <section className="flex flex-col md:flex-row items-center my-16">
        <Image src="/time-change.png" alt="Time Change" className="md:w-1/2 w-full object-cover" />
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Ease into Change</h2>
          <p>
            Today&apos;s technology can softly guide you through a time change.
            Jarring clocks by 60 minutes in the middle of the night hurts people and communities.
            Clocks today can speed up or slow down by just 12 seconds an hour, for a month.
            You can wake up at nearly the same time everyday, gradually guiding you biological clock to the new time.
          </p>
        </div>
      </section>

      {/* Section 2: Health Benefits */}
      <section className="flex flex-col md:flex-row-reverse items-center my-16">
        <Image src="/health-benefits.png" alt="Health Benefits" className="md:w-1/2 w-full object-cover" />
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Walk, don&apos;t Jump</h2>
          <p>
            Gradually bring yourself into Daylight Savings with Daylight Smearings.
            No more groggy mornings and mixed up alarms.
            Don&apos;t wonder what time you have to get to work.
          </p>
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="flex flex-col md:flex-row items-center my-16">
        <Image src="/call-to-action.png" alt="Call to Action" className="md:w-1/2 w-full object-cover" />
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Take Action</h2>
          <p>
            Sign up to be notified of smearing progress and to get our mobile app with smearing alarms.
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
