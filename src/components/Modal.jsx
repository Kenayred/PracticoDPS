"use Client";

import { useState } from "react";

const Modal = ({ isOpen, onClose, onConfirm, item, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        className="modal"
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          width: "50vh",
          height: "20vh",
          maxWidth: "90%",
          textAlign: "center",
        }}
      >
        <p>{message}</p>

        <div
          className="modal-actions"
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <button
            style={{
              padding: "10px",
              borderRadius: "4px",
              backgroundColor: "blue",
              color: "white",
            }}
            onClick={onConfirm}
          >
            Confirmar
          </button>
          <button
            style={{
              padding: "10px",
              borderRadius: "4px",
              backgroundColor: "gray",
              color: "white",
            }}
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
