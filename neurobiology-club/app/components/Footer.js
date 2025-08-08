import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between mx-auto px-4 md:px-0">
      <div className="flex-1 md:flex-none">
        <p className="pb-6 pt-6 md:pb-10 md:pt-10 md:pl-24 text-xs md:text-base text-left md:text-left leading-tight md:leading-normal"> Copyright &copy; {new Date().getFullYear()} UW Neurobiology | Web Impact UW</p>
      </div>

      <div className="flex items-center md:mr-32 ml-2 md:ml-0">
        <Link href="https://www.instagram.com/uwneurobiologyclub/#" target="_blank" className="mr-3 md:mr-0">
          <Image src="/insta.svg"
            alt="Instagram logo + link"
            width={35}
            height={35}
            className="md:w-[50px] md:h-[50px]"/>
        </Link>
        <Link href="https://discord.com/invite/bpRed7s5" target="_blank">
          <Image src="/discord.svg"
            alt="Discord logo + link"
            width={30}
            height={30}
            className="md:w-[40px] md:h-[40px]"/>
        </Link>
      </div>
    </footer>
  );
}