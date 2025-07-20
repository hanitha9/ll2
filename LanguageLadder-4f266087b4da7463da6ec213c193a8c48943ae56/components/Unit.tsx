import Link from "next/link";
import { NotebookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonButton } from "@/components/LessonButton";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: any[];
  activeLesson: any;
  activeLessonPercentage: number;
};

export const Unit = ({ id, order, title, description, lessons, activeLesson, activeLessonPercentage }: Props) => {
  return (
    <>
      <div className="w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between animate-slide-in">
        <div className="space-y-2.5">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
        <Link href="/lesson">
          <Button
            size="lg"
            variant="secondary"
            className="hidden xl:flex border-2 border-b-4 active:border-b-2"
          >
            <NotebookText className="mr-2" />
            Continue
          </Button>
        </Link>
      </div>
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
