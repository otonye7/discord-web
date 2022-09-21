import { styled } from "@mui/system";
import {  useSelector } from "react-redux";
import PendingInvitationListItem from "./PendingInvitationListItem.component";

const MainContainer = styled("div")({
    width: "100%",
    height: "22%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto"
})

const PendingInvitationList = () => {
    const pendingFriends = useSelector((state) => state.pendingFriends)
    return (
        <MainContainer>
            {pendingFriends ? pendingFriends.map((invitation) => (
                <PendingInvitationListItem 
                  key={invitation._id}
                  id={invitation._id}
                  username={invitation.senderId.username}
                  mail={invitation.senderId.mail}
                />
            )) : null }  
        </MainContainer>
    )
}
export default PendingInvitationList