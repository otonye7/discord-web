import { useState } from "react";
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

    const handleAcceptFriendInvitation = () => {
        acceptInvitation({ id })
        setButtonDisabled(true)
    }

    const handleRejectFriendInvitation = () => {
        rejectInvitation({ id })
        setButtonDisabled(true)
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
                  acceptInvitationHandler={handleAcceptFriendInvitation}
                  rejectInvitationHandler={handleRejectFriendInvitation}
                />
                </Box>
            </div>
        </Tooltip>
    )
}
export default PendingInvitationListItem