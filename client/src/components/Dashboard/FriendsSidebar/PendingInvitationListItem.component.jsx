import { useState } from "react";
import axios from "axios";
import {  useSelector } from "react-redux";
import { Box, Tooltip, Typography } from "@mui/material";
import Avatar from "../../Avatar/Avatar.component";
import InvitationDecisionButtons from "./InvitationDecisionButtons.component";

const PendingInvitationListItem = ({ 
    id,
    username,
    mail,
    acceptInvitation = () => {},
    rejectInvitation = () => {}
 }) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const user = useSelector((state) => state.user.userDetails.token);

    const handleAcceptFriendInvitation = (id) => {
        let res = axios.post(`http://localhost:7000/api/friend-invitation/accept`, {
            id
        }, {
            headers: {
                Authorization: `Bearer ${user}`
            }
        })
        console.log(`${id} has been clicked`)
    }

    const handleRejectFriendInvitation = (id) => {
        let res = axios.post(`http://localhost:7000/api/friend-invitation/reject`, {
            id
        }, {
            headers: {
                Authorization: `Bearer ${user}`
            }
        })
        window.location.reload();
        console.log(`${id} has been rejected`)
    }

    return (
        <Tooltip title={mail}>
            <div style={{width:"100%"}}>
                <Box sx={{
                    width:"100%",
                    height:"42px",
                    marginTop:"10px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
                    <Avatar userName={username} />
                    <Typography sx={{
                        marginLeft:"7px",
                        fontWeight: 700,
                        color: "#8e9297",
                        flexGrow: 1
                    }}
                     variant="subtitle1"
                    >
                        {username}
                    </Typography>
                 <InvitationDecisionButtons 
                  buttonDisabled={buttonDisabled} 
                  id={id}
                  acceptInvitationHandler={handleAcceptFriendInvitation}
                  rejectInvitationHandler={handleRejectFriendInvitation}
                />
                </Box>
            </div>
        </Tooltip>
    )
}
export default PendingInvitationListItem