import Link from "next/link";
import Image from "next/image"
import Invitation from "@/app/(wc)/home/invitation/Invitation";
import Account from "@/app/(wc)/home/Account/account";
import Gallery from "@/app/(wc)/home/Gallery/gallery";

export const metadata = {
  title: "Home",
}
export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-conver bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-gray-500 w-5/6 mx-auto text-white sm:text-2xl">
          <div>
            <Image className="m-0 rounded-xl" src="images/next.svg" width={300} height={300}
                   sizes="300px" alt="큰 사진" priority={true} title="큰 사진" />
          </div>
          <h1 className="text-2xl font-bold">예식 일시 장소</h1>
          <Invitation />
          <address>장소</address>
          <p>
            일시
          </p>
          {/*<Gallery />*/}
          {/*<Account />*/}
          <section id="gallery" className="py-12">
            <Gallery />
          </section>

          <section id="account" className="py-12">
            <Account />
          </section>
          <Link href="tel: 55555555" className="hover:underline">연락처</Link>
        </div>
      </main>
    </div>
  )
}