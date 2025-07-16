import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Personal Training</h2>
            <p>Get one-on-one coaching with certified trainers tailored to your goals.</p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Group Classes</h2>
            <p>Join group workout sessions for motivation and fun with a fitness community.</p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Nutrition Guidance</h2>
            <p>Customized diet plans to support your fitness journey and lifestyle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services;
