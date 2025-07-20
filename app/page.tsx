import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-6 animate-slide-in">
      <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Welcome to LanguageLadder!</h1>
      <p className="text-xl text-gray-700 mb-8">Master languages with fun, interactive lessons!</p>
      <div className="flex space-x-4">
        <Link href="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md animate-bounce">
          Start Learning
        </Link>
        <Link href="/leaderboard" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition shadow-md animate-bounce">
          View Leaderboard
        </Link>
      </div>
    </div>
  );
}
