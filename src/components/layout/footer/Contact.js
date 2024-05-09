import { contactInfo, socialLinks } from "../../../data/data";
import { ContactBg } from "./contact/ContactBg";
import { ContactLinksSet } from "./contact/ContactLinksSet";
import { ContactForm } from "./contact/ContactForm";

export function Contact({ className }) {
  const bgImage = "/images/contact.jpg";
  return (
    <div
      className="container grid grid-cols-2 px-4 mt-12 overflow-hidden"
      id="contact"
    >
      <div className="col-span-2 md:col-span-1">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <ContactLinksSet contactInfo={contactInfo} socialLinks={socialLinks} />
      </div>
      <div className="col-span-2 md:col-span-1 lg:ms-8">
        <p className="text-2xl my-3 lg:mt-5 text-gray-700">
          Fill up the form to contact us
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
