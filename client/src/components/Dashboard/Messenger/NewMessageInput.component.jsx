import { useState } from "react";
import {  useSelector } from "react-redux";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const Input = styled("input")({
    backgroundColor: "#2f3136",
    width: "98%",
    height: "44px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "0 10px"
})

const NewMessageInput = () => {
    const [message, setMessage] = useState("");
    const chosenName = useSelector((state) => state.chat);

    const handleMessageValueChange = (e) => {
        setMessage(e.target.value)
    }

    const handleKeyPressed = (event) => {
        if(event.key === "Enter"){
            handleSendMessage()
        }
    }

    const handleSendMessage = () => {
        console.log("Sending Message to Server");
        setMessage("")
    }

    return (
        <MainContainer>
            <Input 
              placeholder={`Write message to ${chosenName.username}`}
              value={message}
              onChange={handleMessageValueChange}
              onKeyDown={handleKeyPressed}
            />
        </MainContainer>
    )
}
export default NewMessageInput;