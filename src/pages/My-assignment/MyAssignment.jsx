import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { Link } from 'react-router-dom';

const MyAssignment = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [assignments, setAssignment] = useState([]);
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>
  }
  // console.log(assignments);
  useEffect(() => {
    const myAssignment = async() => {
      try {
        const { data } = await axiosSecure.get(`/assignment/${user?.email}`);
        setAssignment(data)
      }catch(error){toast.error(error.message)}
    }
    myAssignment()

  },[user])


  return (
    <div className='w-11/12 mx-auto my-20'>
  <h1 className="text-2xl font-bold mb-4">My Submitted Assignments</h1>

  {/* 👇 Scroll wrapper added here */}
  <div className="overflow-x-auto rounded-md border">
    <table className="min-w-full text-sm text-left">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="py-2 px-4 border">Title</th>
          <th className="py-2 px-4 border">Status</th>
          <th className="py-2 px-4 border">Total Marks</th>
          <th className="py-2 px-4 border">Obtained Marks</th>
          <th className="py-2 px-4 border">Feedback</th>
        </tr>
      </thead>
      <tbody>
        {assignments.map((assignment) => (
          <tr key={assignment._id} className="hover:bg-indigo-100 hover:text-black">
            <td className="py-2 px-4 border">{assignment.title}</td>
            <td className="py-2 px-4 border">{assignment.status}</td>
            <td className="py-2 px-4 border">{assignment.marks}</td>
            <td className="py-2 px-4 border">
              {assignment.obtainedMarks || "Not Graded"}
            </td>
            <td className="py-2 px-4 border">{assignment.feedback || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default MyAssignment;