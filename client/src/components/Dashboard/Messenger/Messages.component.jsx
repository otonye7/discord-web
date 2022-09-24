import { useRef, useEffect } from "react";
import { styled } from "@mui/system";
import MessageHeader from "./MessagesHeader.component";
import {  useSelector } from "react-redux";

const MainContainer = styled("div")({
    height: "calc(100% - 60px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

const Messages = () => {
    const chosenName = useSelector((state) => state.chat);
    // const messages = useSelector((state) => state.message)
    return (
        <MainContainer>
            <MessageHeader name={chosenName?.username} />
        </MainContainer>
    )
}
export default Messages;