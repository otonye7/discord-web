import Avatar from "../../Avatar/Avatar.component";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator.component";
import { useDispatch } from "react-redux";
import { chosenChat } from "../../../redux/chatSlice";
import { chatType } from "../../../redux/chatTypeSlice";

const FriendsListItem = ({ id, username, isOnline }) => {
    const dispatch = useDispatch();

    const handleChoseActiveConversation = () => {
        dispatch(chosenChat({
            id,
            username
        }))
        dispatch(chatType({
            type:"DIRECT"
        }))
    }

    return (
        <div>
            <Button onClick={handleChoseActiveConversation} style={{
                width:"100%",
                height: "42px",
                marginTop: "10px",
                display: "flex",
                alignItems:"center",
                justifyContent:"flex-start",
                textTransform:"none",
                color:"black",
                position:"relative"
            }}>
                <Avatar userName={username} />
                <Typography sx={{
                    marginLeft:"7px",
                    fontWeight: 700,
                    color:"#8e9297"
                }} variant="subtitle1" align="left">
                    {username}
                </Typography>
                {isOnline && <OnlineIndicator />}
            </Button>
        </div>
    )
}
export default FriendsListItem;