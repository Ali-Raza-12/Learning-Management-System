import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MdCheckCircle,
  MdError,
  MdWarning,
  MdInfo,
} from "react-icons/md";

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored" 
  />
);

const toastStyles = {
  success: {
    icon: <MdCheckCircle size={22} className="text-emerald-400" />,
    className: "bg-gray-800 text-gray-100 border border-emerald-500 shadow-lg",
  },
  error: {
    icon: <MdError size={22} className="text-red-400" />,
    className: "bg-gray-800 text-gray-100 border border-red-500 shadow-lg",
  },
  warning: {
    icon: <MdWarning size={22} className="text-yellow-400" />,
    className: "bg-gray-800 text-gray-100 border border-yellow-500 shadow-lg",
  },
  info: {
    icon: <MdInfo size={22} className="text-blue-400" />,
    className: "bg-gray-800 text-gray-100 border border-blue-500 shadow-lg",
  },
};

export const showToast = (type, message) => {
  const style = toastStyles[type] || toastStyles.info;

  toast(message, {
    icon: style.icon,
    className: `flex items-center px-5 py-3 rounded-xl ${style.className}`,
    progressClassName: "bg-gray-600",
  });
};

export const toastSuccess = (msg) => showToast("success", msg);
export const toastError = (msg) => showToast("error", msg);
export const toastWarning = (msg) => showToast("warning", msg);
export const toastInfo = (msg) => showToast("info", msg);

export default Toast;
