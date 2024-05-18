import { ContactButton } from "./ContactButton";
import { ContactIconButton } from "./ContactIconButton";

export function ContactLinksSet({ contactInfo, socialLinks }) {
  return (
    <>
      <div className="pt-4">
        <div className="flex flex-col gap-3 items-start">
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
      <div className="flex my-4 justify-start gap-2">
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
