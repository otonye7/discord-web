import CustomButton from "../button/button.component";
import RedirectInfo from "../Redirect/RedirectInfo.component";
import { useNavigate } from "react-router";
import { Tooltip } from "@mui/material";

const LoginFooter = ({ handleLogin, isFormValid }) => {

    const getFormNotValidMessage = () => {
        return "Please enter correct email and password"
    }

    const getFormValidMessage = () => {
        return "Press to Login"
    }

    const navigate = useNavigate()

    const handlePushToRegisterPage = () => {
        navigate("/register")
    }

    return (
        <>
        <Tooltip
         title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomButton 
              label="Login"
              additionalStyles={{ marginTop: "30px" }}
              disabled={!isFormValid}
              onClick={handleLogin}
            />
        </div>
        </Tooltip>
        <RedirectInfo 
          text="Need an account ? "
          redirectText="Create an account"
          additionalStyles={{ marginTop: "5px" }}
          redirectHandler={handlePushToRegisterPage}
        />
        </>
    )
}
export default LoginFooter;