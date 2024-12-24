import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { axiosSecure } from '../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const MyAssignment = () => {
  const { user } = useAuth();
  const [assignments, setAssignment] = useState([]);
  console.log(assignments);
  useEffect(() => {
    myAssignment()

  },[user])

  const myAssignment = async() => {
    try {
      const { data } = await axiosSecure.get(`/assignment/${user?.email}`);
      setAssignment(data)
    }catch(error){toast.error(error.message)}
  }

  return (
    <div className='w-11/12 mx-auto my-12'>
      <h4 className='text-2xl'>my assignment: {assignments.length}</h4>
       <h1 className="text-2xl font-bold mb-4">My Submitted Assignments</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-indigo-200 text-left">
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Total Marks</th>
            <th className="py-2 px-4 border">Obtained Marks</th>
            <th className="py-2 px-4 border">Feedback</th>
            {/* <th className="py-2 px-4 border">Link</th> */}
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment._id} className="hover:bg-indigo-100">
              <td className="py-2 px-4 border">{assignment.title}</td>
              <td className="py-2 px-4 border">{assignment.status}</td>
              <td className="py-2 px-4 border">{assignment.marks}</td>
              <td className="py-2 px-4 border">
                {assignment.obtainedMarks || "Not Graded"}
              </td>
              <td className="py-2 px-4 border">{assignment.feedback || "N/A"}</td>
              {/* <td className="py-2 px-4 border">
                <Link
                  to={`/assignment/details/${assignment._id}`}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Submission
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default MyAssignment;