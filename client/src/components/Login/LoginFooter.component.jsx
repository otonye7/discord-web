import CustomButton from "../button/button.component";

const LoginFooter = ({ handleLogin, isFormValid }) => {
    return (
        <div>
            <CustomButton 
              label="Login"
              additionalStyles={{ marginTop: "30px" }}
              disabled={!isFormValid}
              onClick={handleLogin}
            />
        </div>
    )
}
export default LoginFooter;