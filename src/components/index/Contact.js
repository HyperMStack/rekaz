import { ContactLinksSet } from "./contact/ContactLinksSet";
import { ContactForm } from "./contact/ContactForm";

export function Contact({ language, contactsData }) {
  return (
    <div
      className="max-w-[1350px] mx-auto container grid grid-cols-2 px-4 mt-12 overflow-hidden"
      id="contact"
    >
      <div className="col-span-2 md:col-span-1">
        <h2 className="text-4xl font-bold">
          {language == "ar" ? "تواصل معنا" : "Contact Us"}
        </h2>
        <ContactLinksSet contactsData={contactsData} />
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="lg:ms-8 h-128 text-[#0B0E3F]">
          <ContactForm language={language} />
        </div>
      </div>
    </div>
  );
}
