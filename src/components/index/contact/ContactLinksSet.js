import { urlForImage } from "../../../../sanity/lib/image";
import { ContactButton } from "./ContactButton";
import { ContactIconButton } from "./ContactIconButton";

export function ContactLinksSet({ contactsData, color }) {
  return (
    <>
      <div className="pt-4">
        <div className="flex flex-col gap-3 items-start">
          {contactsData.contactInfo.contactFields.map((contact) => (
            <ContactButton
              key={contact._key}
              text={contact.text}
              icon={urlForImage(contact.icon)}
              link={contact.link}
              color={color}
            />
          ))}
        </div>
      </div>
      <div className="flex my-4 justify-start gap-2">
        {contactsData.socialLinks.socialLinksRecord.map((social) => (
          <ContactIconButton
            label={social.title}
            icon={urlForImage(social.icon)}
            key={social._key}
            link={social.link}
          />
        ))}
      </div>
    </>
  );
}
