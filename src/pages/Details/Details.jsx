import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';

const Details = () => {
    const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const { id } = useParams();
  const [assignment, setAssignment] = useState({});
  // console.log(assignment);
 
  useEffect(() => {
    faceAllDate();
  },[id])
  const faceAllDate =async () => {
    try {
      const { data } = await axiosSecure.get(`/assignment/details/${id}`);
     
    setAssignment(data);
    } catch (error) {
      toast.error(error.message)
   }

}

 const handleSubmit = async(e) => {
  e.preventDefault(); // Prevent default form submission behavior
  const form = e.target; // Get the form element
  const link = form.link.value; // Access input field named 'link'
   const note = form.note.value; // Access textarea named 'note'
   const assignmentId = assignment?._id;
   const title = assignment?.title;
   const marks = assignment?.marks;

   const submitData = {
     link,
     note,
     status: "pending",
     email: user?.email,
     assignmentId,
     title,
     marks,
     


   }
  // console.log(submitData);
   try {
     await axiosSecure.post('/submit',submitData);
     toast.success('submit successful')
   } catch (error) {
     toast.error(error.message)
   }


    // Close the modal
  const modal = document.getElementById("my_modal_1");
  modal.close(); // This will close the modal

  // Clear form fields after submission (optional)
  form.reset();
};

  return (
    <div>
      <div className="flex flex-col lg:flex-row  items-center gap-5 bg-indigo-300 shadow-lg rounded-lg p-4 space-y-3 w-11/12 mx-auto my-12">
     
      <div>
        <img  src={assignment.thumbnail} alt="Thumbnail" className="lg:w-[300px] lg:h-[200px] object-cover" />
      </div>
      

         <div className='w-full overflow-hidden'>
         <h1><strong>Title:</strong> {assignment.title}</h1>
            <p className='break-words'><strong>Description:</strong>{assignment.description}</p>
            <p><strong>Marks:</strong> {assignment.marks}</p>
            <p><strong>Difficulty:</strong> {assignment.difficulty}</p>
            <p><strong>Due Date:</strong> {new Date(assignment.dueDate).toLocaleDateString()}</p>
            <button  onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn w-full bg-indigo-400">Take Assignment</button>
         </div>

      </div>
      
    {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit}>
      <label className="block mb-2 font-semibold">Google Doc Link: </label>
      <input
        className="w-full rounded-lg h-10 border-2 p-4"
        name="link"
        type="url"
        placeholder="Input your Google Doc link"
        required
      />

      <label className="block mb-2 font-semibold">Note: </label>
      <textarea
        className="w-full rounded-lg border-2 px-3 py-2"
        rows="5"
        name="note"
        placeholder="New note"
        required
      ></textarea>

      <button type="submit" className="btn bg-indigo-400 w-full mt-4">
        Submit
      </button>
    </form>
  </div>
</dialog>



   </div>
  );
};

export default Details;