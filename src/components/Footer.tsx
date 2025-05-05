export default function Footer() {
  return (
    <>
      <footer className="relative w-full h-screen bg-[url('/images/top-01.webp')] bg-fixed bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        <div className="relative z-10 w-full h-screen flex items-center justify-center p-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-white">Contact Us</h2>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full p-4">
            <span className="text-white text-sm">Copyright © 2025 株式会社HLT All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}
