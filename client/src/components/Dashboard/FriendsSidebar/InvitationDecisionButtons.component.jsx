import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, IconButton } from "@mui/material";

const InvitationDecisionButtons = ({ disabled, acceptInvitationHandler, id, rejectInvitationHandler }) => {

    return (
        <Box sx={{
            display:"flex"
        }}>
            <IconButton 
              style={{
                color:"white"
              }}
              disabled={disabled}
              onClick={() => acceptInvitationHandler(id)}
            >
                <CheckIcon />
            </IconButton>
            <IconButton 
              style={{
                color:"white"
              }}
              disabled={disabled}
              onClick={() => rejectInvitationHandler(id)}
            >
                <ClearIcon />
            </IconButton>
        </Box>
    )
}
export default InvitationDecisionButtons