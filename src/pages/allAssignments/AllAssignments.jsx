import { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import AssignmentCard from "../../components/cards/AssignmentCard";


const AllAssignments = () => {
  const [assignment, setAssignment] = useState([]);
  useEffect(() => {
    allAssData();

  },[])
  const allAssData = async () => {
    const { data } = await axiosSecure.get('/all-ass');
    setAssignment(data||[])
  }
  return (
    <div className="w-11/12 mx-auto my-12">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 ">
        {assignment.map(ass =><AssignmentCard
          key={ass?._id} ass={ass}
          assignment={assignment}
          setAssignment={setAssignment}
          allAssData={allAssData}
        ></AssignmentCard>)}
    </div>
    </div>
  );
};

export default AllAssignments;