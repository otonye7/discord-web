import { styled } from "@mui/system"; 
import FriendsListItem from "./FriendListItem.component";
import {  useSelector } from "react-redux";

const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%"
})

const FriendsList = () => {
    const DUMMY_FRIENDS = useSelector((state) => state.friends)
    return (
        <MainContainer>
             {DUMMY_FRIENDS ? DUMMY_FRIENDS.map((f) => (
                <FriendsListItem 
                  key={f.id}
                  id={f.id}
                  username={f.username}
                />
            )) : null } 
        </MainContainer>
    )
}
export default FriendsList