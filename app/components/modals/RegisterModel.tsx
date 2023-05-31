"use client";
import React from "react";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModel from "@/app/hooks/useRegister";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";

type Props = {};

const RegisterModel = (props: Props) => {
  const registerModel = useRegisterModel();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModel.onClose();
      })
      .catch((errors) => {
        console.log(errors);
        toast.error("Some thing went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="username"
        label="Username"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continute with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continute with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="mt-4 text-center font-light text-neutral-500">
        <div className="flex flex-row items-center justify-center gap-2">
          <div> Already have an account ?</div>
          <div onClick={registerModel.onClose} className="text-nutral-800 cursor-pointer hover:underline">
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModel;
