import React from "react";
import ReactDOM from "react-dom";

const LoadingPopup = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-cover bg-slate-500/[0.8] flex justify-center items-center text-4xl font-bold text-white">
      <div>Posting tweet. Please wait...</div>
    </div>,
    document.body
  );
};

export default LoadingPopup;
