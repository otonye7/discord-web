import { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages.component";
import NewMessageInput from "./NewMessageInput.component";
import { getDirectChatHistory } from "../../RealtimeCommunication/socketConnection";

const Wrapper = styled("div")({
    flexGrow: 1
})

const MessengerContent = ({ chosenName }) => {

    useEffect(() => {
        getDirectChatHistory({
            receiverUserId: chosenName.id
        })
    }, [chosenName])

    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}
export default MessengerContent;