import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import "./WelcomeDialog.scss";

const WelcomeDialog = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
      className="hellooo"
      fullWidth
      sx={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        "& .MuiDialog-paper": {
          borderRadius: 0,
          height: "auto",
          margin: 0,
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        <div className="modal_welcome">
          <div className="modal-header">
            <span className="close" onClick={handleClose}>
              ×
            </span>
            <div className="text-center">
              <h2>Welcome To</h2>
            </div>
            <div className="text-center">
              <h2>JMD Sports11</h2>
            </div>
          </div>
          <div className="modal-body text-center">
            <p style={{ color: "#0000A0" }}>Stay Home Stay Safe.</p>
          </div>
          <div className="modal-footer">
            <div className="text-center">
              <h3>Thanks For Visiting Our Site</h3>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
