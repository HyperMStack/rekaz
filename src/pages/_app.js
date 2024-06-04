import useScrollbar from "@/hooks/useScrollbar";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    // Set the dir attribute on the body based on the locale
    document.body.dir = router.locale === "ar" ? "rtl" : "ltr";
    document.body.className = router.locale === "ar" ? "ar" : "en";
  }, [router.locale]);
  useScrollbar();

  return (
    <NextIntlClientProvider locale={router.locale}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
