import React, { useContext, useState } from 'react';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';
import registerLottieData from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';

const SignUp = () => {
  const navigate=useNavigate()
  const { handleCreateNewUser,loginWithGoogle, setUser,updateUserProfile } = useContext(AuthContext)
  const [valid,setValid]=useState("")
  const [error, setError] = useState({})

  const passValid= /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  
const [showPassword,setShowPassword]=useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value

    const photo =form.photo.value
    const email = form.email.value
    const password = form.password.value
    // console.log(name,photo,email,password)
    if (!passValid.test(password)) {
     return setValid("Password must contain at least 6 characters, including one uppercase and one lowercase letter.")
    
    }
    handleCreateNewUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);


        toast.success('successfully registered', {
          position: "top-center",
          theme: "colored",
          autoClose: 3000,
          
        })

         updateUserProfile({displayName:name, photoURL: photo })
          .then((result) => {
          navigate("/")
          }).catch(error => {
          // console.log(error)
        })
        
  
      }).catch(err => {
        const errorCode = err.code;
      // console.log(errorCode)
        setError({...error,errorCode})
      })
      
    }
    const handleLoginWithGoogle = () => {
      loginWithGoogle()
        .then(result => {
         navigate('/')
       }).catch(err => {
        const errorCode = err.code;
      // console.log(errorCode)
        
      })
    }
  return (
    <div>
      <div className='min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center '>

         <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}> 
            
     </Lottie>
    </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0  border rounded-lg   p-8">
        <h3 className='font-bold text-2xl text-center'>Register your account</h3>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
              <input type="text" name="name" placeholder="Enter your  Name" className=" border-none rounded-none  input input-border " required />
              {/* {
                error.name&&  <label className="label text-xs text-red-600">
          {error.name}
          </label>
              } */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter your Photo URL" className="border-none rounded-none  input input-border border" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email" className="border-none rounded-none  input input-border border" required />
            {

               error.errorCode && <p className="text-red-600 "> {error.errorCode}</p>
            }
            </div>

             
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
              <input type={showPassword?'text':'password'} name="password" placeholder="password" className=" border-none rounded-none input input-bordered" required />
              <button or borderick={()=>setShowPassword(!showPassword)} className=" absolute top-14 right-4"><FaEye></FaEye></button>
              {
                valid && <p className="text-red-500">{ valid}</p>
          }
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-neutral rounded-none">Register</button>
        </div>
        </form>
          <button className='text-center font-semibold'><Link to="/signIn"  className='text-red-500'>Login</Link></button>
          
           <button onClick={handleLoginWithGoogle} className="w-full btn font-bold text-xl my-3"><FaGoogle></FaGoogle> Login with google</button>
    </div>
    </div>

    </div>
  );
};

export default SignUp;