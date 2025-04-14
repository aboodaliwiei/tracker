
import React from 'react';

const ToastNotification = ({ message, type, onClose }) => {
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>×</button>
    </div>
  );
};

export default ToastNotification;
