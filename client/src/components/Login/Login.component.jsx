import { useState } from "react";
import AuthBox from "../AuthBox/AuthBox.component";
import LoginFooter from "./LoginFooter.component";
import LoginHeader from "./LoginHeader/LoginHeader.component";
import LoginInput from "./LoginInput.component";

const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const handleLogin = () => {
        console.log("login in")
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