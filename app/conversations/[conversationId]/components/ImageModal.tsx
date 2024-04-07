"use client";

import Image from "next/image";
import Modal from "@/components/Modal";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal = ({ isOpen, onClose, src }: ImageModalProps) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image className="object-cover" fill alt="Image" src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
