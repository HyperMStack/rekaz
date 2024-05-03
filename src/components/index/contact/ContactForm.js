import Image from "next/image";
import { ContactField } from "./ContactField";

export function ContactForm({}) {
  return (
    <div className="m-5 text-[#0B0E3F]">
      <div className="flex flex-col gap-5">
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
          />
        </div>
        <div>
          <button className="bg-gray-600 text-white px-5 py-2 w-full md:w-auto rounded-none">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
