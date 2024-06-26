import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LanguageSwitcher = ({ header }) => {
  const router = useRouter();
  const { locales, locale, asPath } = router;
  const [shouldReload, setShouldReload] = useState(false);

  // Determine the other locale
  const otherLocale = locales.find((curLocale) => curLocale !== locale);

  useEffect(() => {
    const handleRouteChange = () => {
      if (shouldReload) {
        router.reload();
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [shouldReload, router]);

  const handleLocaleSwitch = () => {
    setShouldReload(true);
    router.push(asPath, asPath, { locale: otherLocale });
  };

  return (
    <div className="flex md:justify-center items-center gap-2 py-2 md:py-0">
      <div
        onClick={handleLocaleSwitch}
        className={`${header ? "text-[#082833] hover:text-[#3a6776]" : "text-gray-100 hover:text-gray-300"} font-bold cursor-pointer transition duration-300 ease-in-out`}
      >
        {otherLocale === "en" ? "English" : "العربية"}
      </div>
      <div
        className={`${header ? "text-[#082833] hover:text-[#3a6776]" : "text-gray-100 hover:text-gray-300"} font-bold cursor-pointer transition duration-300 ease-in-out`}
      >
        {"/"}
      </div>
      <div
        onClick={handleLocaleSwitch}
        className={`${header ? "text-[#082833] hover:text-[#3a6776]" : "text-gray-100 hover:text-gray-300"} font-bold underline underline-offset-2 transition duration-300 ease-in-out`}
      >
        {otherLocale === "en" ? "العربية" : "English"}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
