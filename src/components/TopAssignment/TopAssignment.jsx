import React from "react";

const FeaturedAssignments = () => {
  const assignments = [
    {
      id: 1,
      title: "Advanced Mathematics",
      marks: 100,
      difficulty: "Hard",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Physics Experiment",
      marks: 80,
      difficulty: "Medium",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Creative Writing",
      marks: 90,
      difficulty: "Easy",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-r from-gray-500 to-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">🔥 Featured Assignments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={assignment.thumbnail}
                alt={assignment.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{assignment.title}</h3>
                <p className="text-gray-600">
                  <strong>Marks:</strong> {assignment.marks}
                </p>
                <p className="text-gray-600">
                  <strong>Difficulty:</strong> {assignment.difficulty}
                </p>
                <button className="btn btn-primary mt-4 w-full">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAssignments;
