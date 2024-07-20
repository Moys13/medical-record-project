"use client";
import { useState } from "react";

const Modal = ({
  children,
  header,
  show,
  onClose,
}: {
  children: React.ReactNode;
  header: string;
  show: boolean;
  onClose: () => void;
}) => {
  if (!show) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="transition ease-in-out delay-150 fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div className="modal-box">
        <h3 className="border-b-2 border-gray-400 text-gray-600 font-bold text-lg">
          {header}
        </h3>
        <div className="mt-3 text-md">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

