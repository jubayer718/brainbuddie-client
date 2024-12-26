import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CreateAssignment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
    const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    marks: "",
    thumbnail: "",
    difficulty: "easy", // Default value
      dueDate: new Date(), // Default to today
      email: user?.email, //current user email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
       // Validate description length
    if (name === "description" && value.length < 20) {
      alert("Description must be at least 20 characters long.");
      return;
    }

    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setAssignment((prev) => ({ ...prev, dueDate: date }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
  
    if (assignment.description.length < 20) {
      toast.error("Description must be at least 20 characters long.");
      return;
    }
    try {
      // create a assignment
      await axiosSecure.post(`/assignment`, assignment)
      
    toast.success("Assignment created successfully!");
    } catch (error) {
      console.log(error);
}
   
    // console.log("Assignment Details:", assignment);

  };
  return (
    <div>
     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Welcome to Create Assignment </h1>
      <p className="py-6">
             Experience a new way of learning together with your friends.
Here, you can create assignments, share them, and evaluate each other's work.
Join us to learn in a more fun and effective way. We are here to support you in achieving your goals.

Start today and make your learning journey more enriching! 🚀
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Create New Assignment</h2>

      {/* Title */}
      <label className="block mb-2 font-semibold">Title:</label>
      <input
        type="text"
        name="title"
        value={assignment?.title}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
        placeholder="Enter assignment title"
        required
      />

      {/* Description */}
      <label className="block mb-2 font-semibold">Description:</label>
      <textarea
        name="description"
        value={assignment?.description}
        onChange={handleChange}
        className="textarea textarea-bordered w-full mb-4"
        placeholder="Enter assignment description"
        required
      ></textarea>

      {/* Marks */}
      <label className="block mb-2 font-semibold">Marks:</label>
      <input
        type="number"
        name="marks"
        value={assignment?.marks}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
        placeholder="Enter marks"
        min="0"
        required
      />

      {/* Thumbnail Image URL */}
      <label className="block mb-2 font-semibold">Thumbnail Image URL:</label>
      <input
        type="url"
        name="thumbnail"
        value={assignment?.thumbnail}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
        placeholder="Enter image URL"
        required
      />

      {/* Difficulty Level */}
      <label className="block mb-2 font-semibold">Difficulty Level:</label>
      <select
        name="difficulty"
        value={assignment?.difficulty}
        onChange={handleChange}
        className="select select-bordered w-full mb-4"
        required
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* Due Date */}
      <label className="block mb-2 font-semibold">Due Date:</label>
      <DatePicker
        selected={assignment?.dueDate}
        onChange={handleDateChange}
        className="input input-bordered w-full mb-4"
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        required
      />

      {/* Submit Button */}
      <button type="submit" className="btn bg-indigo-400 w-full">
        Create Assignment
      </button>
    </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default CreateAssignment;