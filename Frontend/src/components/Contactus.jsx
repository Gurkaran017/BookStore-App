import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import toast from "react-hot-toast";
import axios from "axios";

function Contactus() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Sending data to the backend
      await axios.post("http://localhost:4001/contact", data); 
      toast.success("Message sent successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send the message.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  type="text"
                  placeholder="Type your message"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
