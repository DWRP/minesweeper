import "@/app/styles/globals.css";
import { AdPlaceholder } from "@/components/ads";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <AdPlaceholder className="w-full h-24 mb-6" />
          {children}
          <AdPlaceholder className="w-full h-24 mt-6" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
