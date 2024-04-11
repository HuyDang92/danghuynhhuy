import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
// import DialogComponent from "../Dialog";
interface FormValues {
   name: string;
   email: string;
   message: string;
}

const MyForm: React.FC = () => {
   let [isCheck, setCheck] = useState(false);

   const initialValues: FormValues = {
      name: "",
      email: "",
      message: "",
   };

   const validationSchema = Yup.object().shape({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string().email("Please enter a valid email address").required("Email is required"),
      message: Yup.string().required("Please enter a message"),
   });

   const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: any) => {
      setCheck(true);
      var templateParams = {
         to_name: "Huy",
         from_name: values.name,
         from_email: values.email,
         message: values.message,
      };

      emailjs.send("service_4lu85nf", "template_8r3vein", templateParams, "Yiqj2GPJf2l6GCnly").then(
         function (response) {
            console.log("Email gửi thành công!", response);
         },
         function (error) {
            console.error("Lỗi khi gửi email:", error);
         }
      );
      setSubmitting(false);
      resetForm();
   };

   return (
      <div>
         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            <Form className="space-y-2">
               <Field
                  className="py-2 px-5 w-full rounded-[15px] border-2 border-gray-400 outline-none"
                  type="text"
                  name="name"
                  placeholder="Name"
               />
               <p className="text-[13px]">
                  <ErrorMessage name="name" component="div" className="text-red-500" />
               </p>
               <Field
                  className="py-2 px-5 w-full rounded-[15px] border-2 border-gray-400 outline-none"
                  type="email"
                  name="email"
                  placeholder="Email"
               />
               <p className="text-[13px]">
                  <ErrorMessage name="email" component="div" className="text-red-500" />
               </p>
               <Field
                  className="py-2 px-5 w-full h-40 rounded-[15px] border-2 border-gray-400 outline-none"
                  as="textarea"
                  name="message"
                  placeholder="Message"
               />
               <p className="text-[13px]">
                  <ErrorMessage name="message" component="div" className="text-red-500" />
               </p>
               {/* <br /> */}
               <Button type="submit" className="rounded-full bg-cs_purple text-white hover:text-cs_purple border hover:border-cs_purple">
                  Send
                  <Icon  name="send" className="ps-2 text-xl" />
               </Button>
            </Form>
         </Formik>
         {/* <DialogComponent check={isCheck} /> */}
      </div>
   );
};

export default MyForm;
