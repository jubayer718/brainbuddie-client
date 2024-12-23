import { useEffect, useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loading from "../Loading/Loading";
import { createRoot } from "react-dom/client";
import { toast } from "react-toastify";
import {format} from 'date-fns'
const AssignmentCard = ({ ass, assignment, setAssignment, allAssData }) => {
  const { loading,user } = useAuth();
  if (loading) {
    return <Loading></Loading>
  }
  const {_id, title,thumbnail,marks,dueDate,difficulty,description} = ass
  


  
 const handleDelete = async (_id) => {
    console.log(_id);

    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
        try {
            const { data } = await axiosSecure.delete(`/assignment/${user?.email}`);

            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                allAssData(); // Refresh the data
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    }
};

  return (
    
    
  <div className="card card-side bg-[#F5F4F1] shadow-xl">
  <figure>
        <img 
          className=" h-64 w-full object-cover"
      src={thumbnail}
      alt="assignment photo" />
  </figure>
  <div className=" flex items-center justify-between w-full  p-5">
        <div className="space-y-3">
           <h2 className="card-title">Assignment Name: {title}</h2>
        <p><strong> Description: </strong>{description?.slice(0,80)}...</p>
        <p> <strong>Marks:</strong> {marks}</p>
          <p> <strong>Due Date:</strong>{ format(new Date(dueDate),'P')}</p>
        <p><strong>Assignment Difficulty: </strong>{difficulty }</p>
       
       </div>
    <div className="flex flex-col gap-3">
      <button className="btn bg-[#D2B48C] text-white"><FaEye></FaEye></button>
     <Link to={`updatedCoffee/${_id}`} className="btn bg-[#3C393B] text-white"><FaPen></FaPen></Link>
      <button onClick={()=>handleDelete(_id)} className="btn bg-[#EA4744] text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
    </div>
  </div>
</div>
  );
};

export default AssignmentCard;