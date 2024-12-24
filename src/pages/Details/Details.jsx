import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosSecure } from '../../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const Details = () => {

  const { id } = useParams();
  const [assignment, setAssignment] = useState({});
 
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


  return (
    <div>
      <h2 className="text-4xl">{ assignment?.title}</h2>
    </div>
  );
};

export default Details;