import React from "react";

const ImageModal = ({ image, title, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20"
      onClick={onClose}
    >
      <div
        className="bg-neutral-300 rounded shadow-lg max-w-3xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt={title} className="w-full h-auto max-h-[65vh]" />
      </div>
    </div>
  );
};

export default ImageModal;
