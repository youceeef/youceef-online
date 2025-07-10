import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-gray-300 text-xl">
          Something amazing is in the works
        </p>
      </div>
    </main>
  );
}
