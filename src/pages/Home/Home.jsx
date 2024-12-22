import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      

      <div className=' h-96 my-12'>
          {/* Banner */}
        <div className='bg-[url(https://i.ibb.co.com/gVpYQMg/book-5174879-1920.jpg)] h-full  w-full  bg-cover bg-center flex items-center flex-col space-y-4 justify-center'>
          <h1 className="text-4xl text flex flex-col justify-center items-center text-center text-white "><span>Let's Learn</span><strong> For Your Bright future</strong></h1>
          <p className='w-2/6 mx-auto text-white text-center '>Unlock the power of teamwork—create assignments, share knowledge, and grade each other’s efforts</p>
       </div>
  
      </div>


      {/* Features section */}
       <section className="py-12 px-6 my-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Platform Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Feature 1: Create and Share Assignment */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">1. Create and Share Assignments</h3>
            <p className="text-gray-600">
              Creating assignments is now easier! Create and share them with your friends.
            </p>
          </div>

          {/* Feature 2: Grade Friend's Assignment */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">2. Grade Friend's Assignments</h3>
            <p className="text-gray-600">
              Evaluate each assignment and provide constructive feedback. This helps in improvement.
            </p>
          </div>

          {/* Feature 3: Real-Time Group Chat */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">3. Real-Time Group Chat</h3>
            <p className="text-gray-600">
              Keep your team connected during study sessions with group chat and instant discussions.
            </p>
          </div>

          {/* Feature 4: Deadline Reminder and Notifications */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">4. Deadline Reminders and Notifications</h3>
            <p className="text-gray-600">
              Never miss a deadline! Stay updated with important notifications.
            </p>
          </div>

          {/* Feature 5: Personal Profile and Progress Tracker */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">5. Personal Profile and Track Achievements</h3>
            <p className="text-gray-600">
              Track your assignment submissions and grades and stay ready for improvement.
            </p>
          </div>

          {/* Feature 6: Fun and Learn with Friends */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">6. Have Fun and Learn with Friends</h3>
            <p className="text-gray-600">
              Learning becomes more enjoyable with group study, sharing, and evaluation.
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;