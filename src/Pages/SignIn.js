import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { register } from "../utils";
import './SignIn.css';
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
// import Calendar from "./Calendar";
import {useSelector} from 'react-redux';




const SignIn = _ => {
    const data1 = useSelector(state => state.username1)
    const data2 = useSelector(state => state.userpassword1)
   
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    // const [click, setClick] = useState(false);
    const password_ref = useRef();
    const icon1_ref = useRef();
    const icon2_ref = useRef();

    // useEffect(_ =>{
    //     (async _ =>{
    //         const response = await register.get(``)

    //     })
    // },[click])
    const Icon1 = (e) => {
        icon1_ref.current.ariaHidden = false;
        if (icon1_ref.current.ariaHidden === "false") {
            password_ref.current.type = "text"
            console.log(icon1_ref.current.style.display);
            icon1_ref.current.style.display = "none"
            icon2_ref.current.style.display = "block"
        }
    }

    const Icon2 = (e) => {
        password_ref.current.type = "password";
        icon1_ref.current.style.display = "block"
        icon2_ref.current.style.display = "none"
    }


    const register = () => {
        console.log(username);
        console.log(password);

        if(username !== undefined && password !== undefined){
            console.log(password);
            console.log(username);
            console.log(data1);
            console.log(data2);
            
            if(data1 === username && data2 === password){
            navigate("/Calendar")
            alert("Login successfully");
            }else{
                alert("Please check your username or password")

            }


        }

        // console.log(username);
        // console.log(password);
        // setClick(true);
        // const bodyData = {
        //     "email": username,
        //     "password": password,
        // }
        // fetch("http://localhost:4000/api/v1/login", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(bodyData)
        // }).then(res => res.json()).then(data => {
        //     console.log(data)
        //     if(data.success === true){
        //         navigate("/Home")
        //         alert("Login successfully")
        //     }else{
        //         alert("Check email or password")
        //     }

        // })
    }

    return (
        <div className="register2" >
            <h1>Welcome Back</h1>
            <div className="register2container">
                <div>
                    <label>Enter Your Name*</label>
                    <input type="text" placeholder="enter username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Enter Your password*</label>
                    <FontAwesomeIcon className='eyeIcon' style={{ display: "block" }} onClick={Icon1} ref={icon1_ref} icon={faEye} />
                    <FontAwesomeIcon className='eyeIcon' style={{ display: "none" }} onClick={Icon2} ref={icon2_ref} icon={faEyeSlash} />
                    <input type="password" placeholder="enter your password" ref={password_ref} onChange={(e) => {

                        setPassword(e.target.value)
                    }
                    } />
                </div>
                <div className="button">
                    <button onClick={register} >Sign-IN</button>
                </div>
            </div>
        </div>

    )
}

export default SignIn;