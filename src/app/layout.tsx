import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

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
  title: {
    template: "%s | WC",
    default: "WC",
  },
  description: "SHYN",
  applicationName: "WC"
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
        {/* 상단 장식 */}
        {/* <div className="fixed top-0 left-0 w-full h-40 pointer-events-none"> */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/floral-top.png')] bg-contain bg-no-repeat bg-center opacity-20" /> */}
        {/* </div> */}

        <div className="relative min-h-screen backdrop-blur-sm">
          <SidebarProvider>
            <AppSidebar />
            <main className="px-2 w-full">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <SidebarTrigger />
                {children}
              </ThemeProvider>
            </main>
          </SidebarProvider>
        </div>
        {/* 하단 장식 */}
        {/* <div className="fixed bottom-0 left-0 w-full h-40 pointer-events-none"> */}
          {/* <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/images/floral-bottom.png')] bg-contain bg-no-repeat bg-center opacity-20" /> */}
        {/* </div> */}

        {/* 배경 장식 요소들 */}
        <div className="fixed top-1/4 -left-20 w-40 h-40 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="fixed top-1/3 -right-20 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed" />
        <div className="fixed bottom-1/4 -left-20 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      </body>
    </html>
  );
}
