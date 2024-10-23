import Link from "next/link";
import { ModeToggle} from "@/components/ModeToggle";

export default function Home() {
  return (
        <div className="bg-black bg-home-img bg-conver bg-center">
          <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
            <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
              <h1 className="text-4xl font-bold">WC</h1>
              <address>청량리역</address>
              <p>
                2025년 10월 18일 18시
              </p>
              <Link href="tel: 55555555" className="hover:underline">555-555</Link>
              <ModeToggle/>
            </div>
          </main>
        </div>
  );
}
