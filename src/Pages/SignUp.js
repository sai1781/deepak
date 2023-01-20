import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import { Stack } from '@mui/system';
// import { faPaste } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRef } from 'react'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { setvalue1 } from '../slice';
import { setvalue2 } from '../slice';
// import { setvalue3 } from '../slice';
// import { setvalue2 } from '../slice';
// import { setvalue3 } from '../slice.js';

const SignUp = _ => {

    // const data3 = useSelector(state => state.image)
    // console.log(data3)

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const password_ref = useRef();
    const icon1_ref = useRef();
    const icon2_ref = useRef();
    const check_ref = useRef();
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [file, setFile] = useState("");
    const numbers1 = "0123456789"
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const specialCharacters = "!'^+%&/()-?_#$%{[]}|;:>+`<.*-@";
    const [iscopied, setCopy] = useState(false);
    const successfully = "copied successfully"



    useEffect(
        (_) => {
            if (iscopied) {
                copiedSucess(successfully)
                setTimeout((_) => {
                    setCopy(false);
                    setPassword("");
                }, 6000);
            }
        },
        [iscopied]
    );
    const copiedSucess = (e) => {
        toast.success((e), {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

    const passwordCall = (e) => {
        if (e.target.checked === true) {
            generatePassword()
        }

    }

    const generatePassword = _ => {
        var characterList = '';
        characterList = characterList + numbers1;
        characterList = characterList + specialCharacters;
        characterList = characterList + lowerCaseLetters;
        characterList = characterList + upperCaseLetters;
        console.log(characterList);
        setPassword(createPassword(characterList));

    }
    const createPassword = (characterList) => {
        let password = '';
        const characterListLength = characterList.length / 9;
        console.log(characterListLength)
        for (let i = 0; i <= characterListLength; i++) {
            const characterIndex = Math.round(Math.random() * characterList.length);

            password = password + characterList.charAt(characterIndex);
        }
        copiedSucess("Password Genereated")
        password_ref.current.value = password
        console.log(password_ref.current.value)
        return password;
    }
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
        // if(file === ""){
        //     alert("please upload your image")
        //     return
        // }
        if(username === ""){
            alert("please enter your username")
            return
        }
        if(email === ""){
            alert("please enter your valid email")
            return
        }
        if(password === ""){
            alert("please enter your password")
            return
        }
        if (username !== "" && email !== "" && password !== "") {
            navigate("/SignIn")
            alert("Details submitted successfully")
            dispatch(setvalue1(username));
            dispatch(setvalue2(password));
        }
    }

        //     console.log("sai222")
        //     console.log(username);
        //     console.log(email);
        //     console.log(password);
        //     console.log(file)

        //     let formData = new FormData();
        //     formData.append("name", username)
        //     formData.append("email", email)
        //     formData.append("password", password)
        //     formData.append("image", file)
        //     fetch("http://localhost:4000/api/v1/register",
        //         {
        //             body: formData,
        //             method: "post"
        //         }
        //     ).then(res => res.json()).then(data => {
        //         console.log(data)
        //         console.log(data.user.avatar.url);
        //         if (data.success === true) {
        //             dispatch(setvalue1(data.user.name));
        //             // dispatch(setvalue3(data.user.avatar.url))
        //             navigate("/SignIn")
        //             alert("Details submitted successfully")
        //         }
        //     });

        // }
    // }
    // function handleChange(e) {
    //     setFile(e.target.files[0])
    // }
    return (

        <div className='register1'>
            <div className='register1container'>
                {/* <div>
                    <input type="file" required style={{ border: "none" }} onChange={handleChange} />
                </div> */}

                <div>
                    <label>name*</label>
                    <input type="text" required placeholder="enter your name" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label>Enter email*</label>

                    <input type="email" required placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Enter password*</label>
                    <FontAwesomeIcon className='eyeIcon' style={{ display: "block" }} onClick={Icon1} ref={icon1_ref} icon={faEye} />
                    <FontAwesomeIcon className='eyeIcon' style={{ display: "none" }} onClick={Icon2} ref={icon2_ref} icon={faEyeSlash} />
                    <input type="password" required placeholder="enter your password" ref={password_ref} onChange={(e) => {

                        setPassword(e.target.value)
                    }
                    } />
                    <div className='check'>
                        <p className='check'>
                            <input className='checkbox' ref={check_ref} onChange={passwordCall} type="checkbox"></input>
                            <span>Generatepassword</span>
                        </p>
                    </div>
                </div>
                <div className='button'>
                    <button onClick={register} >SIGN UP</button>
                </div>

            </div>

            <ToastContainer className="toast"
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div >
    )
}

export default SignUp;
