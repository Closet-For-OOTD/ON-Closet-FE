import React from "react";
import { Box, Modal } from "@mui/material";
import OutfitModal from "./OutfitModal";
import ClosetModal from "./ClosetModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function MyModal({
  modalvalue,
  isopen,
  closemodal,
  id,
  type,
  image,
}) {
  return (
    <div>
      <Modal open={isopen} onClose={closemodal}>
        <Box sx={{ ...style, width: 400 }}>
          {modalvalue === "outfit" ? (
            <div>
              <OutfitModal
                id={id}
                type={type}
                image={image}
                close={closemodal}
              />
            </div>
          ) : (
            <ClosetModal id={id} type={type} image={image} close={closemodal} />
          )}
        </Box>
      </Modal>
    </div>
  );
}
