import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

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
      }).catch(error => {
        // console.log(error)
        Swal.fire('invalid email')
    })
  }
  const handleLoginWithGoogle = () => {
  
}
  const handleForgetPass = () => {
    
  }
  return (
     <div>
     <div className='min-h-screen flex items-center justify-center '>
      
      <div className="card bg-base-100 w-full max-w-lg border rounded-lg shrink-0  p-10">
        <h3 className='font-bold text-2xl text-center'>Login your account</h3>
      <form onSubmit={handleSubmit} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef}
             name='email' placeholder="email" className="border-none rounded-none bg-gray-100  input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
              <input ref={passRef} type="password" name='password' placeholder="password" className="border-none rounded-none bg-gray-100  input input-bordered" required />
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
        <button onClick={loginWithGoogle} className="w-full btn font-bold text-xl my-3"><FaGoogle></FaGoogle> Login with google</button>
        </div>
    </div>
    </div>
  );
};

export default SignIn;