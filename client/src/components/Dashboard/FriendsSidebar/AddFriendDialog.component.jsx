import { Dialog, DialogTitle, Typography, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useState, useEffect } from "react";
import { validateMail } from "../../utils/Validators";
import InputWithLabel from "../../InputWithLabel/InputWithLabel.component";
import CustomButton from "../../button/button.component";


const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendIvitation = () => {} }) => {
    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState("");
 
    const handleSendFriendInvitation = () => {

    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail("");
    }

    useEffect(() => {
       setIsFormValid(validateMail(mail))
    }, [mail, setIsFormValid])

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>Enter email address of the friend you want to invite</Typography>
                    </DialogContentText>
                    <InputWithLabel 
                         label="Mail"
                         type="text"
                         value={mail}
                         setValue={setMail}
                         placeholder="Enter mail address"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomButton 
                      onClick={handleSendFriendInvitation}
                      disabled={!isFormValid}
                      label="Send"
                      additionalStyles={{
                        marginLeft:"15px",
                        marginRight:"15px",
                        marginBottom:"10px"
                      }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddFriendDialog;