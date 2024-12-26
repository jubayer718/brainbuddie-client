import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const PendingAssignment = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const modalRef = useRef(null); // Reference for the modal
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // Fetch pending assignments
  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/pending-assignments?email=${user?.email}`
        );
        setAssignments(data);
      } catch (error) {
        console.error("Error fetching pending assignments:", error);
      }
    };

    fetchAssignments();
  }, [user.email]);

  // Handle mark submission
  const handleMarkSubmit = async (event) => {
    event.preventDefault();
    const marks = event.target.marks.value;
    const feedback = event.target.feedback.value;

    try {
      const { data } = await axiosSecure.put(
        `/mark-assignment/${selectedAssignment._id}`,
        { marks, feedback }
      );
      if (data.modifiedCount > 0) {
        toast.success("Assignment marked successfully!");
        setAssignments(assignments.filter((a) => a._id !== selectedAssignment._id)); // Update list
        setSelectedAssignment(null); // Close modal
        modalRef.current.close(); // Explicitly close the modal
      }
    } catch (error) {
      console.error("Error marking assignment:", error);
      toast.error("Failed to mark assignment!");
    }
  };

  // Open the modal
  const handleOpenModal = (assignment) => {
    setSelectedAssignment(assignment);
    modalRef.current.showModal(); // Open the modal
  };

  return (
    <div className="w-11/12 mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Pending Assignments</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-indigo-300 text-left">
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Marks</th>
            <th className="py-2 px-4 border">Examinee</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments?.map?.((assignment) => (
            <tr key={assignment?._id} className="hover:bg-indigo-100">
              <td className="py-2 px-4 border">{assignment?.title}</td>
              <td className="py-2 px-4 border">{assignment?.marks}</td>
              <td className="py-2 px-4 border">{assignment?.email}</td>
              <td className="py-2 px-4 border">
                <button
                  className="btn bg-indigo-400"
                  onClick={() => handleOpenModal(assignment)}
                >
                  Give Mark
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
   <dialog ref={modalRef} className="modal">
  {selectedAssignment && (
    <div className="modal-box">
      <h2 className="text-xl font-bold mb-4">Mark Assignment</h2>

      {/* assignment title */}
      <p>
        <strong>Title:</strong> {selectedAssignment.title}
      </p>

      {/* google doc link */}
      <p>
        <strong>Google Doc Link:</strong>{" "}
        <a
          href={selectedAssignment.link}
          target="_blank" // new tab open the link
          rel="noopener noreferrer" // ensure safe browsing
          className="text-blue-500 underline hover:text-blue-700"
        >
          Open Document
        </a>
      </p>

      {/* show not */}
      <div className="mt-4">
        <strong>Note:</strong>
        <div className="p-3 bg-gray-100 border rounded-lg">
          {selectedAssignment.note || "No notes provided."}
        </div>
      </div>

      {/* given mark and feedback form*/}
      <form onSubmit={handleMarkSubmit} className="mt-6">
        <label className="block mb-2 font-semibold">Marks:</label>
        <input
          type="number"
          name="marks"
          className="w-full rounded-lg border-2 p-2 mb-4"
          placeholder="Enter marks"
          required
        />

        <label className="block mb-2 font-semibold">Feedback:</label>
        <textarea
          name="feedback"
          className="w-full rounded-lg border-2 p-2 mb-4"
          rows="4"
          placeholder="Enter feedback"
          required
        ></textarea>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )}
</dialog>

    </div>
  );
};

export default PendingAssignment;
