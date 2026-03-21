import "./login.css";
import Logins from "../images/Logins.jpg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const unameRef = useRef(null);
  const pwdRef = useRef(null);
  const roleRef = useRef(null);

  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState("");

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
    setError("");
  };

  const handleRoleChange = () => {
    unameRef.current.value = "";
    pwdRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const uname = unameRef.current.value;
    const pwd = pwdRef.current.value;
    const role = roleRef.current.value;


    if (role === "Select Role") {
      alert("Please select a role");
      return;
    }

  
    if (!captchaToken) {
      setError("Please complete the CAPTCHA");
      return;
    }

  
    if (role === "Student") {
      if (uname === "student" && pwd === "student") {
        sessionStorage.setItem("username", uname);
        sessionStorage.setItem("role", role);
        toast.success("Login Successfully");
        navigate("/nav");
      } else {
        toast.error("Invalid Credentials");
      }
    }

  
    else if (role === "Faculty") {
      if (uname === "faculty" && pwd === "faculty") {
        sessionStorage.setItem("username", uname);
        sessionStorage.setItem("role", role);
        toast.success("Login Successfully");
        navigate("/navers");
      } else {
        toast.error("Invalid Credentials");
      }
    }

    
    else if (role === "Parent") {
      if (uname === "parent" && pwd === "parent") {
        sessionStorage.setItem("username", uname);
        sessionStorage.setItem("role", role);
        toast.success("Login Successfully");
        navigate("/navs");
      } else {
        toast.error("Invalid Credentials");
      }
    }

    else if (role === "Admin") {
      if (uname === "admin" && pwd === "admin") {
        sessionStorage.setItem("username", uname);
        sessionStorage.setItem("role", role);
        toast.success("Login Successfully");
        navigate("/naver");
      } else {
        toast.error("Invalid Credentials");
      }
    }

    setCaptchaToken("");
  };

  return (
    <div className="mainContainer">
      <div className="image">
        <img src={Logins} alt="login" />
      </div>

      <div className="formSection">
        <div className="loginCard">
          <h1 className="text-3xl font-bold mb-5pxl">
            UniEdu@KLU Portal
          </h1>

          <h2 className="text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit}>
       
            <select ref={roleRef} onChange={handleRoleChange}>
              <option>Select Role</option>
              <option>Student</option>
              <option>Faculty</option>
              <option>Parent</option>
              <option>Admin</option>
            </select>

            <br />

      
            <input
              type="text"
              placeholder="Enter UserName"
              ref={unameRef}
            />

            <br />

            <input
              type="password"
              placeholder="Enter Password"
              ref={pwdRef}
            />

            <br />

            <div className="recaptcha">
              <ReCAPTCHA
                sitekey="6LeTh44sAAAAAB_9sWvEef204YGvLSfvs2eUQgWG"
                onChange={handleCaptcha}
              />
            </div>

        
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {error}
              </p>
            )}

            <button className="loginBtn" type="submit">
              Login
            </button>
          </form>

          <ToastContainer autoClose={5000} />
        </div>
      </div>
    </div>
  );
}