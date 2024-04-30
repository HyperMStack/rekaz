import { ContactButton } from "./contact/ContactButton";
import { ContactIconButton } from "./contact/ContactIconButton";
import { ContactField } from "./contact/ContactField";
import { contactInfo, socialLinks } from "../../data/data";
import Image from "next/image";

export function Contact({ className }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/contact.jpg"
        alt="rekaz-contact"
        className="!h-screen w-screen object-cover !static"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/25" />
      <div className="flex absolute top-0 md:top-[15%] left-0 md:left-1/3 mx-[5%] md:translate-y-[-12.5%]">
        <div className="bg-white text-gray-700 rounded-lg m-4 md:m-16 lg:10 p-5 md:p-5 lg:p-12">
          <div className="p-4">
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <b className="text-4xl">Contact Us</b>
                <p className="mt-3 lg:mt-5 text-gray-500">
                  Fill up the form to contact us
                </p>
                <div className="py-5 md:py-8 lg:py-10">
                  <div className="flex flex-col pl-0 gap-3 items-start">
                    {contactInfo.map((contact) => (
                      <ContactButton
                        key={contact.id}
                        text={contact.text}
                        icon={contact.icon}
                        link={contact.link}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex mt-5 md:mt-10 md:pe-5 justify-around mx-auto md:justify-start md:gap-5">
                  {socialLinks.map((social) => (
                    <ContactIconButton
                      label={social.text}
                      icon={social.icon}
                      key={social.id}
                      link={social.link}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg col-span-2 md:col-span-1">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
