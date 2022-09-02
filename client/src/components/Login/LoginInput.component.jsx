import InputWithLabel from "../InputWithLabel/InputWithLabel.component";

const LoginInput = ({ mail, setMail, password, setPassword }) => {
    return (
       <>
         <InputWithLabel 
           value={mail}
           setValue={setMail}
           label="Email"
           type="text"
           placeholder="Enter Email Address"
         />
         <InputWithLabel 
           value={password}
           setValue={setPassword}
           label="Password"
           type="password"
           placeholder="Enter Password"
         />
       </>
    )
}
export default LoginInput;