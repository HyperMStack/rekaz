import { ContactButton } from "./ContactButton";
import { ContactIconButton } from "./ContactIconButton";

export function ContactLinksSet({ contactInfo, socialLinks }) {
  return (
    <>
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
    </>
  );
}
