
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DatePicker from 'react-datepicker';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Loading from '../../components/Loading/Loading';
import { axiosSecure } from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
  
  const { user, loading } = useAuth();
  const {id}=useParams()
  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>
  }
  const loadedData = useLoaderData();


    const [assignment, setAssignment] = useState({
      title: loadedData?.title,
      
    description: loadedData?.description,
    marks: loadedData?.marks,
    thumbnail:loadedData?.thumbnail,
    difficulty: loadedData?.difficulty,
      dueDate: loadedData?.dueDate, 
      email: user?.email, //current user email
    });
  
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setAssignment((prev) => ({ ...prev, dueDate: date }));
  };



  const handleSubmit =async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await axiosSecure.patch(`/assignment/${id}?email=${user?.email}`, assignment);

    if (data.modifiedCount > 0) {
      toast.success('update successful!!!', {
        autoClose: 2000,

       })
          navigate('/all-assignment')
    }
    } catch (error) {
      toast.error(error.response.data)
    }
     
      

  };
  return (
    <div>
         <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome to Update Assignment </h1>
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
          <h2 className="text-2xl font-bold mb-4">Update Assignment</h2>
    
          {/* Title */}
          <label className="block mb-2 font-semibold">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={loadedData?.title}
            onChange={handleChange}
            className="input input-bordered w-full mb-4"
            placeholder="Enter assignment title"
            required
          />
    
          {/* Description */}
          <label className="block mb-2 font-semibold">Description:</label>
          <textarea
            name="description"
            defaultValue={loadedData?.description}
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
            defaultValue={loadedData?.marks}
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
            defaultValue={loadedData?.thumbnail}
            onChange={handleChange}
            className="input input-bordered w-full mb-4"
            placeholder="Enter image URL"
            required
          />
    
          {/* Difficulty Level */}
          <label className="block mb-2 font-semibold">Difficulty Level:</label>
          <select
            name="difficulty"
            defaultValue={loadedData?.difficulty}
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
            selected={loadedData?.dueDate}
            onChange={handleDateChange}
            className="input input-bordered w-full mb-4"
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            required
          />
    
          {/* Submit Button */}
          <button  type="submit" className="btn bg-indigo-400 w-full">
            Update Assignment
          </button>
        </form>
        </div>
      </div>
    </div>
        </div>
  );
};

export default UpdateAssignment;