import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton.component";
import FriendsTitle from "./FriendsTitle.component";
import FriendsList from "./FriendsList.component";
import PendingInvitationList from "./PendingInvitationList.component";

const MainContainer = styled("div")({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136"
})

const FriendsSideBar = () => {
    return (
        <MainContainer>
            <AddFriendButton />
            <FriendsTitle title="Private Message"/>
            <FriendsList />
            <FriendsTitle title="Invitations" />
            <PendingInvitationList />
        </MainContainer>
    )
}
export default FriendsSideBar