import { styled } from "@mui/system";
import Avatar from "../../Avatar/Avatar.component";
import { Typography } from "@mui/material";

const MainContainer = styled("div")({
    width: "98%",
    display: "column",
    marginTop: "10px"
})

const MessageHeader = ({ name }) => {
    return (
        <MainContainer>
            <Avatar large userName={name} />
            <Typography variant="h4" sx={{
                fontWeight: "bold",
                color: "white",
                marginLeft: "5px",
                marginRight: "5px"
            }}>
                {name}
            </Typography>
            <Typography sx={{
                color: "b9bbbe",
                marginLeft: "5px",
                marginRight: "5px"
            }}>
                This is the beginning of your conversation with {name}
            </Typography>
        </MainContainer>
    )
}
export default MessageHeader;