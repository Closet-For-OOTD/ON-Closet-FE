import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import { ChooseModal } from "../makeCloset/PrivateCloset";
import OutfitModal from "./OutfitModal";
import ClosetModal from "./ClosetModal";
import "./MyModal.css";

export default function MyModal({ id, type, image }) {
  const modalState = useSelector((state) => state.modalReducer);
  const modalContext = useContext(ChooseModal);

  return (
    <div>
      <Modal open={modalState.modal_open}>
        <Box className="box-style">
          {modalContext === "closet-modal" ? (
            <ClosetModal id={id} type={type} image={image} />
          ) : (
            <OutfitModal id={id} type={type} image={image} />
          )}
        </Box>
      </Modal>
    </div>
  );
}
