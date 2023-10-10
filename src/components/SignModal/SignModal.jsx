/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SliderForm from "../SliderForm/SliderForm";

const ConfirmationModal = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{ onClick: handleCancel }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 450,
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <SliderForm />
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
