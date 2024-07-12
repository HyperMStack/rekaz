import Link from "next/link";

export function Footer({ footerLinks, websiteName, language }) {
  return (
    <div className={`max-w-[1350px] mx-auto lg:px-10`}>
      <footer className="text-sm relative mt-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <p className="text-center lg:text-start text-sm w-full">
            &copy; 2023{" "}
            <Link href="/" className="hover:underline">
              {websiteName}
            </Link>
            {language == "en"
              ? ". All rights reserved."
              : ". جميع الحقوق محفوظة."}
          </p>
          <div className="w-full flex flex-wrap gap-4 justify-center lg:justify-end my-4">
            {footerLinks.map((item) => (
              <div key={item._key} className="w-auto">
                <Link href={item.link} className="hover:underline">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
