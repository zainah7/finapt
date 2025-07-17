import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <main className="flex-grow flex items-center justify-center px-4 md:px-16 md:py-0 mb-10">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Left Column */}
        <div className="bg-white w-full md:w-[685px] h-auto md:h-[685px] rounded-[30px] p-6 md:p-[38px] flex flex-col justify-between">
          <div>
            <h1 className="text-[36px] md:text-[50px] font-medium text-[#000000] leading-[120%] tracking-[-0.01em] mb-4">
              Your Smart <br />
              <span
                className={`text-[#0066DA] relative ${pacifico.className} text-[32px] md:text-[45px] leading-[120%] tracking-[-0.01em]`}
              >
                Financial
                <Image
                  src="/assets/images/green-circle.svg"
                  alt="Green Circle"
                  width={150}
                  height={10}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                />
              </span>{" "}
              Sidekick
            </h1>
            <p className="text-base md:text-lg text-[#7A7A7A] mb-8">
              Automate your payments, track your expenses, and get AI-powered
              budgeting, personalized just for you.
            </p>
            <Button
              asChild
              className="bg-[#0066DA] hover:bg-[#0080DA] rounded-full px-3 py-5 text-base shadow-lg"
            >
              <Link href="#" className="flex items-center gap-2">
                Get started for free
                <Image
                  src="/assets/icons/arrow-up-right.svg"
                  alt="Arrow Icon"
                  width={16}
                  height={16}
                />
              </Link>
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-[#000000] mb-2">
              Download our App
            </h3>
            <div className="mb-4">
              <Image
                src="/assets/images/qr-code.svg"
                alt="QR Code"
                width={170}
                height={120}
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/icons/apple.svg"
                  alt="App Store"
                  width={20}
                  height={20}
                />
                <Image
                  src="/assets/icons/google-play.svg"
                  alt="Google Play"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-[#000000] font-medium text-lg">Available on</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[543px] h-auto md:h-[685px] flex justify-center items-center">
          <Image
            src="/assets/images/hero-image.svg"
            alt="Finapt App Screenshot"
            width={543}
            height={685}
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </main>
  );
}
