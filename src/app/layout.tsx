import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: '서승환 ❤️ 홍예나 결혼합니다.',
  description: '서승환 ❤️ 홍예나 결혼식에 초대합니다.',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiasing
          min-h-screen
          bg-gradient-to-b from-rose-50 via-white to-rose-50
          bg-[url('/images/floral.png')] bg-repeat bg-opacity-10
        `}
      >
        <div className="relative min-h-screen backdrop-blur-sm">
          <main className="px-2 w-full">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </main>
        </div>

        {/* 배경 장식 요소들 */}
        <div className="fixed top-1/4 -left-20 w-40 h-40 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="fixed top-1/3 -right-20 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed" />
        <div className="fixed bottom-1/4 -left-20 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      </body>
    </html>
  );
}
