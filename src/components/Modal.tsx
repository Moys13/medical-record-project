'use client'
import { useState } from "react";

const Modal = ({ children, header, show, onClose }: { children: React.ReactNode, header: string, show: boolean, onClose: () => void }) => {
    if (!show) return null

    const handleOutsideClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center" onClick={handleOutsideClick}>
            <div className="bg-white p-4 rounded-md transition ease-in delay-150 duration-300">
                <h3 className="border-b-2 border-gray-400">{header}</h3>
                <div className="mt-3">{children}</div>
            </div>
        </div>
    )
}

export default Modal;