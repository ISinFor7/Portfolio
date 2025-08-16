import Lines1 from "@/components/lines1";
import NavMenu from "@/components/navmenu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <NavMenu></NavMenu>
      <main className="flex flex-row gap-[32px] content-center row-start-2 items-center justify-center sm:items-start text-gray-700 dark:text-amber-700 text-shadow-md boxDiv p-6">
        <div className="flex flex-col gap-5 items-center sm:items-start">
          <div className="flex flex-col gap-3 mb-4 rounded-2xl p-3 items-start">
            <p className="text-lg font-extrabold px-1 from-[#9C8A6F] to-[#AD9E8B] bg-linear-to-b text-white ">Berrouiguet Lilo</p>
            <p className="text-sm font-semibold px-1 from-[#9C8A6F] to-[#AD9E8B] bg-linear-to-b text-white">
              Développeur web <br /> Développeur UI/UX
            </p>
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border-3 border-solid border-b-[#8B6465] border-t-[#311E1E#8B6465] transition-colors flex items-center justify-center from-[#9C8A6F] to-[#AD9E8B] bg-linear-to-b gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base text-white h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="#projects"
            >
              Continuer la visite
            </a>
          </div>
        </div>
          <Image
            className="top-0 left-0 rounded-full "
            src="/photo.png"
            alt="Me"
            width={180}
            height={180}
          />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
