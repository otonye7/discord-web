import { useState, useEffect } from "react";
import axios from "axios";
import AuthBox from "../AuthBox/AuthBox.component";
import LoginFooter from "./LoginFooter.component";
import LoginHeader from "./LoginHeader/LoginHeader.component";
import LoginInput from "./LoginInput.component";
import { validateLoginForm } from "../utils/Validators";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";

const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      setIsFormValid(validateLoginForm({ mail, password }))
    }, [mail, password, setIsFormValid])

    const handleLogin = async () => {
        let res = await axios.post(`http://localhost:7000/api/login`, {
          mail,
          password
        })
        if(res.data){
          window.localStorage.setItem("discord", JSON.stringify(res.data))
          dispatch(loginUser({
            data: res.data
          }))
          navigate("/dashboard");
          window.location.reload()
        }
    }
    return (
        <AuthBox>
            <LoginHeader />
            <LoginInput 
              mail={mail}
              setMail={setMail}
              password={password}
              setPassword={setPassword}
            /> 
            <LoginFooter 
              isFormValid={isFormValid}
              handleLogin={handleLogin}

            />
        </AuthBox>
    )
}
export default Login;