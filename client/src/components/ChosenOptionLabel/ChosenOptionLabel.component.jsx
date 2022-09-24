import { Typography } from "@mui/material";
import {  useSelector } from "react-redux";

const ChosenOptionLabel = () => {
    const chosenName = useSelector((state) => state.chat)
    return (
         <Typography sx={{
            fontSize: "16px",
            color: "white",
            fontWeight: "bold"
         }}>
            {chosenName === null ? "" : chosenName.username}
         </Typography>
    )
}
export default ChosenOptionLabel;