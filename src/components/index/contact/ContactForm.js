import Image from "next/image";
import { ContactField } from "./ContactField";
import { useState } from "react";

export function ContactForm() {
  const [responseStatus, setResponseStatus] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setResponseStatus("success");
    } else {
      setResponseStatus("error");
    }
  }
  if (responseStatus == "success") {
    return <p>Thank you for contacting us</p>;
  }

  if (responseStatus == "error") {
    return (
      <p className="my-auto">
        Failed to send email, Please try to refresh the page and try later
      </p>
    );
  }

  return (
    <>
      <p className="text-2xl my-3 lg:my-0 lg:mb-3 text-gray-700">
        Fill up the form to contact us
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <ContactField
          id={"name"}
          label={"Name"}
          icon={
            <Image
              width={16}
              height={16}
              src="/images/svg/profile-outline.svg"
              alt="name"
            />
          }
          placeholder={"Your Name"}
        />
        <ContactField
          id={"phone"}
          label={"Phone Number"}
          icon={
            <Image
              width={16}
              height={16}
              src="/images/svg/phone-outline.svg"
              alt="phone"
            />
          }
          placeholder={"Your Phone Number"}
        />
        <ContactField
          id={"email"}
          label={"Email"}
          icon={
            <Image
              width={16}
              height={16}
              src="/images/svg/email-outline.svg"
              alt="email"
            />
          }
          placeholder={"Your Email"}
        />
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="box-border outline-2 outline-sky-600 border border-gray-300  rounded-md w-full p-2"
            placeholder="Message"
            name="message"
            id="message"
            required
          />
        </div>
        <div>
          <button className="bg-gray-600 text-white px-5 py-2 w-full md:w-auto rounded-none">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}
