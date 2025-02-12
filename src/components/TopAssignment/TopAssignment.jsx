import React from "react";

const FeaturedAssignments = () => {
 
  return (
   <section className="py-12 bg-gray-100 text-gray-900 px-6 my-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">🌟 Why Choose Our Platform?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Our platform makes online group study easier, more engaging, and highly effective. Here’s why students love using it:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <span className="text-5xl">📚</span>
            <h3 className="text-xl font-semibold mt-4">Easy Assignment Creation</h3>
            <p className="text-gray-600 mt-2">
              Quickly create and manage assignments with a user-friendly interface.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 ">
            <span className="text-5xl">💬</span>
            <h3 className="text-xl font-semibold mt-4">Real-Time Collaboration</h3>
            <p className="text-gray-600 mt-2">
              Engage in group discussions and exchange feedback instantly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <span className="text-5xl">⏰</span>
            <h3 className="text-xl font-semibold mt-4">Deadline Reminders</h3>
            <p className="text-gray-600 mt-2">
              Stay on track with automatic reminders for due dates.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <span className="text-5xl">🔍</span>
            <h3 className="text-xl font-semibold mt-4">Transparent Grading</h3>
            <p className="text-gray-600 mt-2">
              Receive and provide structured feedback to improve learning.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <span className="text-5xl">🏆</span>
            <h3 className="text-xl font-semibold mt-4">Track Your Progress</h3>
            <p className="text-gray-600 mt-2">
              Monitor your achievements and improve continuously.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <span className="text-5xl">🎉</span>
            <h3 className="text-xl font-semibold mt-4">Learn with Friends</h3>
            <p className="text-gray-600 mt-2">
              Enjoy an interactive and fun learning experience with peers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAssignments;
