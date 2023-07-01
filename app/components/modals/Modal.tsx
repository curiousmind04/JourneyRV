"use client";

import { useState, useCallback, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import classes from "./Modal.module.css";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);

    //this timeout is for animation
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.backdrop}>
      <div className={classes.modalContainer}>
        {/* CONTENT */}
        <div
          className={
            showModal ? classes.shownContainer : classes.hiddenContainer
          }
        >
          <div className={classes.container}>
            {/* HEADER */}
            <div className={classes.header}>
              <button className={classes.close} onClick={handleClose}>
                <IoMdClose size={18} />
              </button>
              <div className={classes.title}>{title}</div>
            </div>
            {/* BODY */}
            <div className={classes.body}>{body}</div>
            {/* FOOTER */}
            <div className={classes.footer}>
              <div className={classes.actions}>
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  />
                )}
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
