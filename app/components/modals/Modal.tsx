"use client";

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

type Props = {
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
};

const Modal: React.FC<Props> = (props: Props) => {
  const [showModal, setShowModal] = useState(props.isOpen);
  useEffect(() => {
    setShowModal(props.isOpen);
  }, [props.isOpen]);

  const handleClose = useCallback(() => {
    if (props.disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      props.onClose();
    }, 300);
  }, [props.disabled, props.onClose]);

  const handleSubmit = useCallback(() => {
    if (props.disabled) {
      return;
    }
    props.onSubmit();
  }, [props.disabled, props.onSubmit]);

  const handleSecodaryAction = useCallback(() => {
    if (props.disabled || !props.secondaryAction) {
      return;
    }
    props.secondaryAction();
  }, [props.disabled, props.secondaryAction]);

  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none focus:outline-none">
        <div className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5">
          {/* CONTENT */}
          <div
            className={`translate h-full duration-300 
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="
              translate 
              relative 
              flex 
              h-full
              w-full 
              flex-col 
              rounded-lg
              border-0
              bg-white
              shadow-lg
              outline-none
              focus:outline-none
              md:h-auto
              lg:h-auto"
            >
              {/* HEADER */}
              <div
                className="
                relative
                flex
                items-center
                justify-center
                rounded-t
                border-b-[1px]
                p-6"
              >
                <button
                  onClick={handleClose}
                  className="
                    absolute
                    left-9
                    border-0
                    p-1
                    transition
                    hover:opacity-70
                    "
                >
                  <IoMdClose></IoMdClose>
                </button>
                <div className="foont-semibold text-lg">{props.title}</div>
              </div>
              {/* BODY */}
              <div className="relative flex-auto p-6">{props.body}</div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="flex 
                w-full 
                flex-row 
                items-center 
                gap-4"
                >
                  {props.secondaryAction && props.secondaryActionLabel && (
                    <Button
                      outline
                      disabled={props.disabled}
                      label={props.secondaryActionLabel}
                      onClick={handleSecodaryAction}
                    />
                  )}

                  <Button
                    disabled={props.disabled}
                    label={props.actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
