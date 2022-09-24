import { styled } from "@mui/system";
import {  useSelector } from "react-redux";
import WelcomeMessage from "./WelcomeMessage.component";
import MessengerContent from "./MessengerContent.component";

const MainContainer = styled("div")({
    flexGrow: 1,
    backgroundColor: "#36393f",
    marginTop: "48px",
    display: "flex"
})

const Messenger = () => {
    const chosenName = useSelector((state) => state.chat)
    return (
        <MainContainer>
            {!chosenName ? (<WelcomeMessage />) : <MessengerContent chosenName={chosenName} /> }
        </MainContainer>
    )
}
export default Messenger