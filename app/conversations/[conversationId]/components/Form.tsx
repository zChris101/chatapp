"use client";

import useConversation from "@/app/hooks/useConversation";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { conversationId } = useConversation();

  const { register, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  return <div>Form</div>;
};

export default Form;
