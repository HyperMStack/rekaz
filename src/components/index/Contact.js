import { contactInfo, socialLinks } from "../../data/data";
import { ContactBg } from "./contact/ContactBg";
import { ContactLinksSet } from "./contact/ContactLinksSet";
import { ContactForm } from "./contact/ContactForm";

export function Contact({ className }) {
  const bgImage = "/images/contact.jpg";
  return (
    <div className={`relative h-screen ${className}`}>
      <ContactBg bgImage={bgImage} />
      <div className="flex absolute top-0 md:top-[15%] left-0 md:left-1/3 md:translate-y-[-12.5%]">
        <div className="bg-white text-gray-700 rounded-lg md:m-16 lg:m-10 p-4 lg:p-12">
          <div className="p-4">
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <ContactLinksSet
                  contactInfo={contactInfo}
                  socialLinks={socialLinks}
                />
              </div>
              <div className="bg-white rounded-lg col-span-2 md:col-span-1">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
