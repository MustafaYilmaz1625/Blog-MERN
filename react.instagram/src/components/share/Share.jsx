import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import "./share.css";

const Share = ({ open, handleClose }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose} className="modal">
        <Box className="modal-box">
          <div className="modal-head">
            <Typography variant="span">Create New Post</Typography>
          </div>
        </Box>
      </Modal>
      <Button onClick={handleClose}>Close modal</Button>
    </>
  );
};

export default Share;
