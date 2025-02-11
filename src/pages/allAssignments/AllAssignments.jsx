import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AssignmentCard from "../../components/cards/AssignmentCard";
import useAuth from "../../Hooks/useAuth";


const AllAssignments = () => {
  const { loading } = useAuth();
  
  const [assignment, setAssignment] = useState([]);
  // console.log(assignment);
  const axiosSecure = useAxiosSecure();
  const [difficulty, setDifficulty] = useState(''); // State for filter
  const [search, setSearch] = useState(''); // State for search query
 
  const allAssData = async () => {
    try {
      const { data } = await axiosSecure.get('/all-ass', {
        params: { difficulty, search } // Pass filters and search query
      });
      setAssignment(data || []);
    } catch (error) {
      // console.error("Error fetching assignments:", error);
    }
  };

  useEffect(() => {
    allAssData();
  }, [difficulty, search, axiosSecure]);

  const handleReset = () => {
    setDifficulty('');
    setSearch('');
  };

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="mb-4 flex gap-4">
        {/* Dropdown for difficulty filter */}
        <select
          className="border rounded-lg p-2"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search by title..."
          className="border rounded-lg p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleReset} className="btn btn-warning">Reset</button>
      </div>

      {loading?(<div className="flex items-center justify-center"><span className="loading loading-spinner text-error "></span></div>):assignment.length === 0 ? ( <h2 className="text-4xl text-center font-bold">No Available Data</h2>)  :  (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {assignment.map((ass) => (
            <AssignmentCard
              key={ass?._id}
              ass={ass}
              assignment={assignment}
              setAssignment={setAssignment}
              allAssData={allAssData} // Ensure the function reference is passed correctly
            ></AssignmentCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAssignments;