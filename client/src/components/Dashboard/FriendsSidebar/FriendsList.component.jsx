import { styled } from "@mui/system"; 
import FriendsListItem from "./FriendListItem.component";

const DUMMY_FRIENDS = [
    {
        id: 1,
        userName: "Mark",
        isOnline: true
    },
    {
        id: 2,
        userName: "Julie",
        isOnline: false
    },
    {
        id: 3,
        userName: "Peace",
        isOnline: true
    }
]

const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%"
})

const FriendsList = () => {
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map((f) => (
                <FriendsListItem 
                key={f.id} 
                id={f.id}
                userName={f.userName}
                isOnline={f.isOnline}
                />
            ))}
        </MainContainer>
    )
}
export default FriendsList