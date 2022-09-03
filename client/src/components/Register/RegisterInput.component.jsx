import { useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel.component";

const RegisterInput = ({ mail, setMail, password, setPassword, username, setUsername }) => {
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
           value={username}
           setValue={setUsername}
           label="Username"
           type="text"
           placeholder="Enter Username"
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
export default RegisterInput;