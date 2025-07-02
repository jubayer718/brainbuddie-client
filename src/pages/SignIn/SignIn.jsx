import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import LottieLogin from "../../assets/lottie/login.json"
import Lottie from "lottie-react";
import {easeIn, easeInOut, motion} from "motion/react"

const SignIn = () => {
  const navigate=useNavigate()
const {handleSignIn,setUser,loginWithGoogle}=useContext(AuthContext)
  const emailRef = useRef();
  const passRef = useRef()
  const location=useLocation()
  const from = location?.state||'/'
  
  const [valid,setValid]=useState("")
  const passValid = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!passValid.test(password)) {
      return setValid("Password must contain at least 6 characters, including one uppercase and one lowercase letter.")
      // sed data to backend
    }
    handleSignIn(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        navigate(from)
        toast.success('login successful');
      }).catch(error => {
        // console.log(error)
        Swal.fire('invalid email')
    })
  }
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(res => {
   navigate(from)
    toast.success('login successful')
    
     })
}
  const handleForgetPass = () => {
    
  }
  return (
     <div>
     <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center  mt-20'>
      
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{x:0 , opacity:1, transition:{duration:1.5, ease: easeInOut}}}
          
          className="text-center lg:text-left  w-96">
          <Lottie animationData={LottieLogin}> 
            
     </Lottie>
          </motion.div>
        <motion.div
           initial={{ x: 50, opacity: 0 }}
           animate={{x:0 , opacity:1, transition:{duration:1.5, ease: easeInOut}}}
          className="card bg-base-100 w-full max-w-lg border rounded-lg shrink-0  p-10 ">
          <h2 className="text-4xl text-center font-bold mt-4">Welcome to login</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef}
             name='email' placeholder="enter your email" className="border-none bg-neutral rounded-none border  input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
              <input ref={passRef} type="password" name='password' placeholder="enter your password" className="border-none rounded-none bg-neutral  input input-bordered" required />
                {
                valid && <p className="text-red-500">{ valid}</p>
          }
              {/* {
                error.login && <label className="label text-sm text-red-600">
         {   error.login}
          </label>
              } */}
          <label className="label">
            <button onClick={handleForgetPass}  className="label-text-alt link link-hover">Forget password?</button>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
          </form>
          


        <h3 className='text-center font-semibold'>Don't have an account? <Link to="/signUp"  className='text-red-500'>Register</Link></h3>
        <button onClick={handleLoginWithGoogle} className="w-full btn font-bold text-xl my-3"><FaGoogle></FaGoogle> Login with google</button>
        </motion.div>
    </div>
    </div>
  );
};

export default SignIn;