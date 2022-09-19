import Avatar from "../../Avatar/Avatar.component";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator.component";

const FriendsListItem = ({ id, username, isOnline }) => {
    return (
        <div>
            <Button style={{
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