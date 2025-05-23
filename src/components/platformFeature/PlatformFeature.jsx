
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PlatformFeature = () => {

  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch('https://brain-buddies-server.vercel.app/feature')
      .then(res => res.json())
    .then(data=>setFeatures(data))
  },[])
// console.log(features);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
      {
        features.map(feature=>  <div key={feature._id} className="border p-6 rounded-lg shadow-lg space-y-3">
          <h3 className="text-xl font-semibold  mb-4">{ feature?.icon}{ feature?.title}</h3>
            <p className="">
             {feature?.description.slice(0,80)}...
              </p>
              <Link to={`/feature/details/${feature._id}`} className="flex  place-content-center"><button type='button' className='btn btn-neutral '>See More</button></Link>
          </div>)
      }
    </div>
  );
};

export default PlatformFeature;