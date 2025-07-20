import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Unit } from "@/components/Unit";
import { lessons, units } from "@/data/courses";

export default async function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6 animate-slide-in">
      <div className="sticky top-0">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">Hearts: 5 ❤️</p>
          <p className="text-lg font-semibold">Points: 0 ⭐</p>
        </div>
      </div>
      <div className="w-full">
        <div className="sticky top-0 bg-white pb-3 flex items-center justify-between border-b-2 mb-5 text-neutral-400">
          <Link href="/courses">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
            </Button>
          </Link>
          <h1 className="font-bold text-lg">Spanish</h1>
          <div />
        </div>
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              title={unit.title}
              description={unit.description}
              lessons={lessons}
              activeLesson={lessons[0]}
              activeLessonPercentage={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
