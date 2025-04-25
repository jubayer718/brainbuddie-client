import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Lottie from "lottie-react";
import createAss from '../../assets/lottie/createAssignment.json'

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
    // if (name === "description" && value.length < 20) {
    //   toast.error("Description must be at least 20 characters long.");
    //   return;
    // }

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
      // console.log(error);
}
   
    // console.log("Assignment Details:", assignment);

  };
  return (
    <div>
     <div className="hero bg-base-200 min-h-screen py-20">
  <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <Lottie animationData={createAss}></Lottie>
   </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto  shadow-lg p-6 rounded-md"
    >
       <h1 className="text-xl my-5 text-center font-bold">Welcome to Create Assignment </h1>

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
      <button type="submit" className="btn  w-full">
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