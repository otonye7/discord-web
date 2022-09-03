import { useState, useEffect } from "react"
import { Typography } from "@mui/material"
import AuthBox from "../AuthBox/AuthBox.component"
import RegisterInput from "./RegisterInput.component";
import RegisterFooter from "./RegisterFooter.component";
import { validateRegisterForm } from "../utils/Validators";

const Register = () => {
    const [mail, setMail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ mail, username, password }))
    }, [mail, username, password, setIsFormValid])

    const handleRegister = () => {

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
        </AuthBox>
    )
}
export default Register