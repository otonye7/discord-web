import { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages.component";
import NewMessageInput from "./NewMessageInput.component";

const Wrapper = styled("div")({
    flexGrow: 1
})

const MessengerContent = ({ chosenName }) => {

    useEffect(() => {

    }, [chosenName])

    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}
export default MessengerContent;