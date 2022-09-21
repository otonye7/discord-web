import { Typography } from "@mui/material";
import {  useSelector } from "react-redux";

const ChosenOptionLabel = () => {
    const chosenName = useSelector((state) => console.log(state))
    return (
         <Typography sx={{
            fontSize: "16px",
            color: "white",
            fontWeight: "bold"
         }}>
             {/* {`${chosenName.name ? chosenName.name : ""}`}  */}
         </Typography>
    )
}
export default ChosenOptionLabel;