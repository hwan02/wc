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
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiasing
          min-h-screen
          bg-gradient-to-b from-pink-50 to-white
          bg-[url('/images/floral-pattern.png')] bg-repeat bg-opacity-10
        `}
      >
        <div className="bg-white/70 backdrop-blur-sm min-h-screen">
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
      </body>
    </html>
  );
}
