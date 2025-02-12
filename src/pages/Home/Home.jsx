import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import Font Awesome icons
import FeaturedAssignments from '../../components/TopAssignment/TopAssignment';
import Testimonials from '../../components/Testimonials/Testimonials';
import PlatformFeature from '../../components/platformFeature/PlatformFeature';

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className='w-11/12 mx-auto'>
      

      <div className=' h-96 mt-20 mb-12'>
          {/* Banner */}
        <div className='bg-[url(https://i.ibb.co.com/gVpYQMg/book-5174879-1920.jpg)] h-full  w-full  bg-cover bg-center flex items-center flex-col space-y-4 justify-center'>
          <h1 className="text-4xl text flex flex-col justify-center items-center text-center text-white "><span>Let's Learn</span><strong> For Your Bright future</strong></h1>
          <p className='w-2/6 mx-auto text-white text-center '>Unlock the power of teamwork—create assignments, share knowledge, and grade each other’s efforts</p>
       </div>
  
      </div>


      {/* Features section */}
       <PlatformFeature></PlatformFeature>
      
      {/* top assignment section*/}
      <FeaturedAssignments></FeaturedAssignments>
      {/* testimonials section */}
      <Testimonials></Testimonials>

      {/* FAQ section */}


 <section className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(0)}
              className="w-full text-left text-xl font-semibold text-gray-700 mb-4 flex items-center justify-between focus:outline-none"
            >
              1. How can I create and share assignments with my friends?
              {/* Arrow icon that changes based on the FAQ state */}
              {activeIndex === 0 ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === 0 && (
              <p className="text-gray-600">
                You can easily create assignments through the platform, and then share them with your friends using the built-in sharing options.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(1)}
              className="w-full text-left text-xl font-semibold text-gray-700 mb-4 flex items-center justify-between focus:outline-none"
            >
              2. How do I grade my friends' assignments?
              {activeIndex === 1 ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === 1 && (
              <p className="text-gray-600">
                You can grade your friends' assignments by clicking on the assignment link. You'll be able to provide feedback and assign a grade based on their work.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(2)}
              className="w-full text-left text-xl font-semibold text-gray-700 mb-4 flex items-center justify-between focus:outline-none"
            >
              3. How does the real-time group chat work?
              {activeIndex === 2 ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === 2 && (
              <p className="text-gray-600">
                The real-time group chat allows you and your study group to discuss topics instantly, share resources, and collaborate during study sessions.
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(3)}
              className="w-full text-left text-xl font-semibold text-gray-700 mb-4 flex items-center justify-between focus:outline-none"
            >
              4. Will I be reminded of assignment deadlines?
              {activeIndex === 3 ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === 3 && (
              <p className="text-gray-600">
                Yes, the platform has built-in reminders that will notify you about approaching deadlines, so you never miss an important submission.
              </p>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(4)}
              className="w-full text-left text-xl font-semibold text-gray-700 mb-4 flex items-center justify-between focus:outline-none"
            >
              5. How can I track my progress and achievements?
              {activeIndex === 4 ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === 4 && (
              <p className="text-gray-600">
                You can track your progress through your personal profile, which shows your assignment submissions, grades, and achievements.
              </p>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(5)}
              className="w-full text-left text-xl font-semibold text-gray-700 mb-4 flex items-center justify-between focus:outline-none"
            >
              6. Can I have fun while studying with friends?
              {activeIndex === 5 ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {activeIndex === 5 && (
              <p className="text-gray-600">
                Absolutely! The platform encourages fun and engaging learning through group study sessions, sharing assignments, and providing constructive feedback.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;