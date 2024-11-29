"use client";
import React from "react";
import Image from "next/image";

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
        <div className="relative w-full h-auto max-h-[65vh]">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={800}
            height={600}
            className="w-full h-auto max-h-[65vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
