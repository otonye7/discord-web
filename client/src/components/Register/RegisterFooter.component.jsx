import CustomButton from "../button/button.component";
import RedirectInfo from "../Redirect/RedirectInfo.component";
import { useNavigate } from "react-router";
import { Tooltip } from "@mui/material";

const RegisterFooter = ({ handleRegister, isFormValid }) => {

    const getFormNotValidMessage = () => {
        return "Please enter email, username and password"
    }

    const getFormValidMessage = () => {
        return "Press to Register"
    }

    const navigate = useNavigate()

    const handlePushToLoginPage = () => {
        navigate("/login")
    }

    return (
        <>
        <Tooltip
         title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomButton 
              label="Register"
              additionalStyles={{ marginTop: "30px" }}
              disabled={!isFormValid}
              onClick={handleRegister}
            />
        </div>
        </Tooltip>
        <RedirectInfo 
          text="Already have an account ? "
          redirectText="Go to login page"
          additionalStyles={{ marginTop: "5px" }}
          redirectHandler={handlePushToLoginPage}
        />
        </>
    )
}
export default RegisterFooter;