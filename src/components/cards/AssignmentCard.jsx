import { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { format } from "date-fns";
// import { axiosSecure } from "../../Hooks/useAxiosSecure";
// import axios from "axios";

const AssignmentCard = ({ ass, allAssData }) => {
  const axiosSecure = useAxiosSecure();
  const { loading, user } = useAuth();
  const [error, setError] = useState(null);

  if (loading) {
    return <Loading></Loading>;
  }

  const { _id, title, thumbnail, marks, dueDate, difficulty, description } = ass;

  const handleDelete = async (_id) => {
  if (error?.response?.data === "Permission not allowed") {
    return toast.error("Permission not allowed!");
  }

  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      // console.log("Swal confirmed. Sending delete request...");
      // console.log("Deleting assignment with ID:", _id, "and email:", user?.email);
      const { data } = await axiosSecure.delete(`/assignment/${_id}?email=${user?.email}`);
      // console.log(data);


      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your assignment has been deleted.",
          icon: "success",
        });
        allAssData(); // Refresh assignments after deletion
      } else {
        // console.error("No document deleted.");
      }
    }
  } catch (error) {
    // console.error("Error deleting assignment:", error);
    setError(error);

    if (error?.response?.data === "Permission not allowed") {
      return toast.error("Permission not allowed!");
    }
  }
};


  return (
    <div className="card card-side md:flex-row lg:flex-row flex-col bg-[#F5F4F1] shadow-xl">
      <figure>
        <img
          className="h-72 w-full rounded-xl lg:ml-3 object-cover"
          src={thumbnail || "/path-to-default-image.jpg"}
          alt="Assignment Thumbnail"
        />
      </figure>
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between w-full p-5">
        <div className="space-y-3">
          <h2 className="card-title">Assignment Name: {title}</h2>
          <p>
            <strong>Description: </strong>
            {description?.slice(0, 80)}...
          </p>
          <p>
            <strong>Marks:</strong> {marks}
          </p>
          <p>
            <strong>Due Date:</strong> {format(new Date(dueDate), "P")}
          </p>
          <p>
            <strong>Assignment Difficulty: </strong>
            {difficulty}
          </p>
        </div>
        <div className="flex gap-8 my-4  lg:justify-normal lg:flex-col md:flex-col lg:gap-3">
          <Link disabled={!user?.email} to={`/assignment/details/${_id}`} className={`${!user?.email?'disabled:hover:cursor-not-allowed':''} btn bg-[#D2B48C] text-white`}>
            <FaEye></FaEye>
          </Link>
          <Link    disabled={!user?.email} to={`/updateAssignment/${_id}`} className={`${!user?.email?'disabled:hover:cursor-not-allowed':''} btn bg-[#3C393B] text-white`}>
            <FaPen></FaPen>
          </Link>
          <button
            disabled={!user?.email}
            onClick={() => handleDelete(_id)}
            className={`${!user?.email?'disabled:hover:cursor-not-allowed':''} btn bg-[#EA4744] text-white`}
          >
            <RiDeleteBin6Line></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
