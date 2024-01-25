"use client";
import Hero from "@/components/Hero/Hero";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!/^\d{10}$/.test(e.target.value)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneError("");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setNameError("Name is required");
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email");
    }
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
    }
    if (message.trim() === "") {
      setMessageError("Message is required");
    }
    // Add form submission logic here
  };

  return (
    <>
      <Hero title={"Contact Us"} src={"/images/Al_reem_island.jpg"} />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 mt-5">
          <div className="">
            <div role="application" aria-label="Map" tabIndex="0">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29046.333863403936!2d54.40849225!3d24.492672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67becd78ccdd%3A0xad4befbe23b2d345!2sAl%20Reem%20Island!5e0!3m2!1sen!2sae!4v1705832592454!5m2!1sen!2sae"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 md:h-full"
              ></iframe>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={handleNameChange}
                className={`ps-2 mt-1 h-12 block w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm shadow-gray-500 ${
                  nameError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {nameError && (
                <p className="text-red-500 font-semibold text-sm">
                  {nameError}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleEmailChange}
                className={`ps-2 mt-1 h-12 block w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm shadow-gray-500 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {emailError && (
                <p className="text-red-500 font-semibold text-sm">
                  {emailError}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                placeholder="Enter your phone number"
                onChange={handlePhoneChange}
                className={`ps-2 mt-1 h-12 block w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm shadow-gray-500 ${
                  phoneError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {phoneError && (
                <p className="text-red-500 font-semibold text-sm">
                  {phoneError}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your message"
                className={`ps-2 pt-2 mt-1 h-24 block w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm shadow-gray-500 ${
                  messageError ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {messageError && (
                <p className="text-red-500 text-sm font-semibold">
                  {messageError}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
