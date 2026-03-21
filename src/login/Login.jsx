import "./login.css";
import Logins from '../images/Logins.jpg'
import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 export default function Login() 
{
    const navigate=useNavigate()
    const unameRef=useRef(null)
    const pwdRef=useRef(null)
    const roleRef=useRef(null) 

  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState("");

const handleCaptcha = (token) => {
    setCaptchaToken(token);
    setError("");
  };
  
    const handleRoleChange = () => {
  unameRef.current.value = ""
  pwdRef.current.value = ""
}
const handleSubmit=()=>{
   
     const uname=unameRef.current.value        
     const pwd=pwdRef.current.value
     const role=roleRef.current.value

      if (!captchaToken) {
      setError("Please complete the CAPTCHA");
      return;
    }


     if(role=="Student"){
      if(uname=="student" && pwd=="student" )
     {
       sessionStorage.setItem("username", uname)
       sessionStorage.setItem("role", role)
         toast("Login Successfully");
         navigate("/nav")
         
     }else{
        toast("Invalid credentials");
     }   
     }
     else if(role=="Faculty"){
        if(uname=="faculty" && pwd=="faculty" )
     {
       sessionStorage.setItem("username", uname)
       sessionStorage.setItem("role", role)
        toast("Login Successfully");
         navigate("/navers")
     }else{
         toast("Invalid credentials");
      
     }   
    }
     else if(role=="Parent"){
        if(uname=="parent" && pwd=="parent" )
     {
        sessionStorage.setItem("username", uname)
        sessionStorage.setItem("role", role)
        toast("Login Successfully");
         navigate("/navs")
     }else{
         toast("Invalid Credentials");
     }   
     }
      else{
        if(uname=="admin" && pwd=="admin" )
     {
          sessionStorage.setItem("username", uname)
          sessionStorage.setItem("role", role)
       toast("Login Successfully");
         navigate("/naver")
     }else{
          toast("Invalid Credentials");
     }   
     }
} 
  return (
    <div className="mainContainer">
      <div className="image">
        <img src={Logins} alt="login"/>
      </div>
      <div className="formSection">
        <div className="loginCard">
          <h1 className="text-3xl font-bold  mb-5pxl">UniEdu@KLU Portal</h1>
          <div></div>
          <div>
          <h2 className="text-2xl font-bold">Login</h2>
          </div>
        <form >
            <select ref={roleRef} onClick={handleRoleChange}>
                <option>Select Role</option>
                <option >Student</option>
                <option >Faculty</option>
                <option >Parent</option>
                <option >Admin</option>
            </select>
            <br/>
            <input type="text" placeholder='Enter UserName' ref={unameRef}/><br/>            
            <input type="password" placeholder='Enter Password' ref={pwdRef}/><br/>   
        </form>

 <div className="recaptcha">
          <ReCAPTCHA
      sitekey="6LeTh44sAAAAAB_9sWvEef204YGvLSfvs2eUQgWG"
      onChange={handleCaptcha}
    /></div>

          <button className="loginBtn" type="button"  onClick={handleSubmit}>Login</button>
             <ToastContainer autoClose={5000} />
        </div>
      </div>

    </div>
  )
}

