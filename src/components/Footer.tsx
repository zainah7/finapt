import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer
      className="w-full py-12 px-6 md:px-16 rounded-t-lg relative overflow-hidden"
      style={{
        backgroundColor: "#F7F7F7", // A light gray base color for the overall footer
      }}
    >
      {/* Gradient Overlay Div */}
      <div
        className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-0 opacity-30 pointer-events-none"
        style={{
          width: "80%", // You can adjust this (e.g., 60%, 70%, etc.)
          background: "linear-gradient(to bottom, #00AC47 0%, #0066DA 100%)",
          maskImage:
            "radial-gradient(farthest-side at bottom center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(farthest-side at bottom center, black 40%, transparent 80%)",
          backdropFilter: "blur(400px)",
          WebkitBackdropFilter: "blur(400px)",
        }}
      ></div>

      <div className=" mx-auto flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col items-start space-y-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/icons/logo.svg"
                alt="Company Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>

            {/* Email */}
            <a
              href="mailto:hub@usefinapt.com"
              className="text-[#6E6E6E] hover:text-gray-800 text-base"
            >
              hub@usefinapt.com
            </a>

            {/* Social Media Icons */}
            <div className="flex space-x-7">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Instagram"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Image
                  src="/assets/icons/Twitter.svg"
                  alt="X (Twitter)"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-900 font-semibold text-lg">Company</h3>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              Blog
            </Link>
            <Link
              href="/about-us"
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              About Us
            </Link>
            <Link
              href="/legal"
              className="text-gray-600 hover:text-gray-800 text-sm"
            >
              Legal
            </Link>
          </div>
        </div>

        {/* Right Side: CTA, QR Code, App Stores */}
        <div className="flex flex-col items-start md:items-end space-y-4 text-left md:text-right">
          <p className="text-[#717171] text-lg font-medium max-w-xs">
            Let&apos;s handle spending money, you handle making it
          </p>
          <Image
            src="/assets/images/qr-code.svg"
            alt="QR Code"
            width={120}
            height={120}
            className="rounded-lg shadow-md"
          />
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/icons/apple.svg"
              alt="Apple"
              width={18}
              height={18}
            />
            <Image
              src="/assets/icons/google-play.svg"
              alt="Google Play"
              width={18}
              height={18}
            />
            <span className="text-gray-900 text-base">Available on</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
