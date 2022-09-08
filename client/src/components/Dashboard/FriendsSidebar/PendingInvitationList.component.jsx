import { styled } from "@mui/system";
import PendingInvitationListItem from "./PendingInvitationListItem.component";

const DUMMY_INVITATIONS = [
    {
        _id: "1",
        senderId: {
            userName: "Mark",
            mail: "dummy@gmail.com"
        }
    },
    {
        _id: "2",
        senderId: {
            userName: "Jane",
            mail: "sender@gmail.com"
        }
    },
    {
        _id: "3",
        senderId: {
            userName: "Paul",
            mail: "my@gmail.com"
        }
    }
]

const MainContainer = styled("div")({
    width: "100%",
    height: "22%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto"
})

const PendingInvitationList = () => {
    return (
        <MainContainer>
            {DUMMY_INVITATIONS.map((invitation) => (
                <PendingInvitationListItem 
                  key={invitation._id}
                  id={invitation._id}
                  userName={invitation.senderId.userName}
                  mail={invitation.senderId.mail}
                />
            ))}
        </MainContainer>
    )
}
export default PendingInvitationList