import { useEffect, useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const AssignmentCard = ({ass,assignment,setAssignment,allAssData}) => {
  const {_id, title,thumbnail,marks,dueDate,difficulty,description} = ass

  
 

    useEffect(() => {

      handleDelete();
  allAssData()
    }, [])
  
  const handleDelete =async(_id) => {
    const { data } = await axiosSecure.delete(`/ass-delete/${_id}`);
    console.log(data);
    
  }
  
//   const handleDelete = (_id) => {
//     console.log(_id)
    


// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) {


    

//      fetch(`https://coffee-store-server-coral-alpha.vercel.app/coffee/${_id}`, {
//       method:"DELETE",
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         if(data.deletedCount>0
//         ) {
      
//            Swal.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });

//           {
//             const remaining = assignment.filter(ass => ass._id !== _id);
//             setAssignment(remaining)
// }

// }
    // })




   
//   }
// });
    
   

// }

  // const handleUpdate = (_id) => {
  //   console.log(_id)

    

  // }
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