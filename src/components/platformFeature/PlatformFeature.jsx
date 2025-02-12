
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PlatformFeature = () => {

  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9000/feature')
      .then(res => res.json())
    .then(data=>setFeatures(data))
  },[])
// console.log(features);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
      {
        features.map(feature=>  <div key={feature._id} className="bg-white p-6 rounded-lg shadow-lg space-y-3">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">{ feature?.icon}{ feature?.title}</h3>
            <p className="text-gray-600">
             {feature?.description.slice(0,80)}...
              </p>
              <Link to={`/feature/details/${feature._id}`} className="flex  place-content-center"><button type='button' className='btn btn-neutral '>See More</button></Link>
          </div>)
      }
    </div>
  );
};

export default PlatformFeature;