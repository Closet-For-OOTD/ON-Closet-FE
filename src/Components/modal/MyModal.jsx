import React from "react";
import { useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import OutfitModal from "./OutfitModal";
import ClosetModal from "./ClosetModal";
import "./MyModal.css";

export default function MyModal({ modalvalue, id, type, image }) {
  const modalState = useSelector((state) => state.modalReducer);

  return (
    <div>
      <Modal open={modalState.modal_open}>
        <Box className="box-style">
          {modalvalue === "outfit" ? (
            <OutfitModal id={id} type={type} image={image} />
          ) : (
            <ClosetModal id={id} type={type} image={image} />
          )}
        </Box>
      </Modal>
    </div>
  );
}
