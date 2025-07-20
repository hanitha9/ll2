import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default async function LeaderboardPage() {
  const leaderboard = [
    { userId: "1", userName: "John Doe", userImageSrc: "/user1.svg", points: 150 },
    { userId: "2", userName: "Jane Smith", userImageSrc: "/user2.svg", points: 120 },
    { userId: "3", userName: "Alice Wong", userImageSrc: "/user3.svg", points: 100 },
  ];

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 animate-slide-in">
      <div className="sticky top-0">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">Hearts: 5 ❤️</p>
          <p className="text-lg font-semibold">Points: 0 ⭐</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <Image src="/leaderboard.svg" alt="Leaderboard" height={90} width={90} />
        <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">Leaderboard</h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
          See where you stand among other learners in the community.
        </p>
        <Separator className="mb-4 h-0.5 rounded-full" />
        {leaderboard.map((userProgress, index) => (
          <div
            key={userProgress.userId}
            className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
          >
            <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
            <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
              <AvatarImage className="object-cover" src={userProgress.userImageSrc} />
            </Avatar>
            <p className="font-bold text-neutral-800 flex-1">{userProgress.userName}</p>
            <p className="text-muted-foreground">{userProgress.points} XP</p>
          </div>
        ))}
      </div>
    </div>
  );
}
