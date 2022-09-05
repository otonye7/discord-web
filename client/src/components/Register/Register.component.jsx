import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography } from "@mui/material";
import AuthBox from "../AuthBox/AuthBox.component";
import RegisterInput from "./RegisterInput.component";
import RegisterFooter from "./RegisterFooter.component";
import { validateRegisterForm } from "../utils/Validators";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [mail, setMail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ mail, username, password }))
    }, [mail, username, password, setIsFormValid])

    const handleRegister = async () => {
        try {
            let res = await axios.post(`http://localhost:7000/api/register`, {
                mail,
                username,
                password
            })
            if(res.data){
                navigate("/login");
                toast("Registeration successul")
                window.location.reload();
            }
        } catch (err) {
            console.log(err)
            if(err.response.status === 400) toast(err.response.data)
        }
    } 

    return (
        <AuthBox>
            <Typography variant="h5" sx={{ color: "white" }}>
                Create an account
            </Typography>
            <RegisterInput 
             mail={mail}
             setMail={setMail}
             username={username}
             setUsername={setUsername}
             password={password}
             setPassword={setPassword}
            />
            <RegisterFooter 
              handleRegister={handleRegister}
              isFormValid={isFormValid}
            />
           <ToastContainer />
        </AuthBox>
    )
}
export default Register