import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      feedback:
        "This platform has completely changed the way I study! The group chat and assignment tracking are fantastic.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Mark Smith",
      feedback:
        "The real-time collaboration and assignment grading system are top-notch. Highly recommended!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      feedback:
        "I love how easy it is to track my progress and receive feedback on my assignments.",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">💬 What Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
