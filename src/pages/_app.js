import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NextIntlClientProvider locale={router.locale}>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
