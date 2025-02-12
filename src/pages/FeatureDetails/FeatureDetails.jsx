import { useLoaderData, useNavigate } from "react-router-dom";

const FeatureDetails = () => {
  const navigate = useNavigate();
  const feature = useLoaderData();
  console.log(feature);


  return (
    <div className=" my-20">
      <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-2">
        <span className="text-5xl">{feature.icon}</span> {feature.title}
      </h2>
      <p className="text-gray-600 mt-4">{feature.description}</p>

      <button
        className="mt-6 bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition-all"
        onClick={() => navigate("/")}
      >
        ⬅ Back to Features
      </button>
    </div>
    </div>
  );
};

export default FeatureDetails;