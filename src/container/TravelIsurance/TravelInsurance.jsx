import React, { useEffect, useState } from "react";
import InsuranceModal from "./InsuranceModal";
import { Modal, Box } from "@mui/material";

const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 500,
minHeight:'90vh',
bgcolor: 'background.paper',
border: '0px solid #000',
boxShadow: 24,
p: 4,
borderRadius:'15px'
};

export const TravelInsurance = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <>
      <div>TravelInsurance</div>
      <Modal
        open={isOpen}
        onClose={()=> setIsOpen(false)}
        hideBackdrop={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <InsuranceModal/>
        </Box>
      </Modal>
    </>
  );
};
