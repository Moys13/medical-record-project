import { useEffect } from "react";
import {
  CiWarning,
  CiCircleInfo,
  CiCircleCheck,
  CiCircleRemove,
} from "react-icons/ci";

interface AlertProps {
  message: string;
  type: "success" | "warning" | "info" | "error";
  onClose: () => void;
  autoCloseTime?: number;
}

export default function Alert({
  message,
  type,
  onClose,
  autoCloseTime = 3000,
}: AlertProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, autoCloseTime);
    return () => clearTimeout(timer);
  }, [onClose, autoCloseTime]);

  let icon;
  let alertType;

  switch (type) {
    case "success":
      icon = <CiCircleCheck size={30} />;
      alertType = "bg-green-400";
      break;
    case "error":
      icon = <CiCircleRemove size={30} />;
      alertType = "bg-yellow-400";
      break;
    case "warning":
      icon = <CiWarning size={30} />;
      alertType = "bg-yellow-400";
      break;
    case "info":
      icon = <CiCircleInfo size={30} />;
      alertType = "bg-sky-400";
      break;
  }

  return (
    <div
      className={`absolute alert ${alertType} w-1/2 bottom-2 right-4 md:w-1/3 shadow-lg`}
    >
      {icon}
      <span className="text-xs">{message}</span>
    </div>
  );
}
