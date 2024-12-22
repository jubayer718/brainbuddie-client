import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className=''>
      

      <div className='w-11/12 mx-auto h-96 my-12'>
          {/* Banner */}
        <div className='bg-[url(https://i.ibb.co.com/gVpYQMg/book-5174879-1920.jpg)] h-full  w-full  bg-cover bg-center flex items-center flex-col space-y-4 justify-center'>
          <h1 className="text-4xl text flex flex-col justify-center items-center text-center text-white "><span>Let's Learn</span><strong> For Your Bright future</strong></h1>
          <p className='w-2/6 mx-auto text-white text-center '>Unlock the power of teamwork—create assignments, share knowledge, and grade each other’s efforts</p>
       </div>
  
      </div>
    </div>
  );
};

export default Home;