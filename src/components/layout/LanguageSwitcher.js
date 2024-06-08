import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitcher = () => {
  const { locales, locale, asPath } = useRouter();

  // Determine the other locale
  const otherLocale = locales.find((curLocale) => curLocale !== locale);

  return (
    <Link href={asPath} locale={otherLocale}>
      {otherLocale === "en" ? "English" : "العربية"}
    </Link>
  );
};

export default LanguageSwitcher;
