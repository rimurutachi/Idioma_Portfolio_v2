"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      const templateParams = {
        user_name: `${formData.get("firstname")} ${formData.get("lastname")}`,
        user_email: formData.get("email"),
        service: formData.get("service"),
        message: formData.get("message"),
      };

      await emailjs.send(
        "service_ywev8zr", // Replace with your EmailJS service ID
        "template_wsu38gx", // Replace with your EmailJS template ID
        templateParams,
        "HAc1o6iIqfmC0Diy_" // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="containter mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              {/* title and description */}
              <div>
                <h2 className="h2 mb-6">
                  Get In <span className="text-tertiary">Touch with us!</span>
                </h2>
                <p className="max-w-[460px]">
                  If you want to get in touch with us, please fill out the form
                  below and we will get back to you as soon as possible.
                </p>
              </div>
              {/* contact info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone */}
                <div className="flex items-center gap-4 text-lg ">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl text-tertiary" />
                  </span>
                  <span>+639555634705</span>
                </div>
                {/* email */}
                <div className="flex items-center gap-4 text-lg ">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl text-tertiary" />
                  </span>
                  <span>jimmaridioma20@gmail.com</span>
                </div>
                {/* address */}
                <div className="flex items-center gap-4 text-lg ">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl text-tertiary" />
                  </span>
                  <span>Bacoor City, Cavite, Philippines</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start"
              >
                {/* first and last name */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="name">
                      First Name <span className="text-tertiary">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your first name."
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="name">
                      Last Name <span className="text-tertiary">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Enter your last name."
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Email <span className="text-tertiary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email."
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="name">
                    I'm interested in...{" "}
                    <span className="text-tertiary">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="Web Design">Web Design</SelectItem>
                      <SelectItem value="Full Stack Development">
                        Full Stack Development
                      </SelectItem>
                      <SelectItem value="Game Development">
                        Game Development
                      </SelectItem>
                      <SelectItem value="Mobile Development">
                        Mobile Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* text area */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Message <span className="text-tertiary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                    required
                  />
                </div>
                {/* submit button */}
                <button
                  type="submit"
                  className="btn btn-lg btn-accent"
                  disabled={isLoading}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-black">
                      {isLoading ? "Sending..." : "Send Message"}
                    </span>
                    {!isLoading && (
                      <HiOutlineArrowLongRight className="text-xl text-black" />
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
