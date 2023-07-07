"use client";

import { useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import classes from "./RegisterModal.module.css";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const registerModal = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("api/register", data)
      .then(() => {
        registerModal.onClose;
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className={classes.bodyContainer}>
      <Heading title="Welcome to JourneyRV" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
    <div className={classes.footerContainer}>
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className={classes.switchModeOuter}>
        <div className={classes.switchModeInner}>
          <div>Already have an account?</div>
          <div
            className={classes.switchToLogin}
            onClick={registerModal.onClose}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Register"
      actionLabel="Continue"
      isOpen={registerModal.isOpen}
      onSubmit={handleSubmit(onSubmit)}
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
export default RegisterModal;
