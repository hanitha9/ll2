import { Card } from "@/components/Card";
import { courses } from "@/data/courses";

export default async function CoursesPage() {
  return (
    <div className="max-w-[912px] mx-auto px-3 py-6 animate-slide-in">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            id={course.id}
            title={course.title}
            imageSrc={course.imageSrc}
            onClick={() => {}}
            disabled={false}
            active={false}
          />
        ))}
      </div>
    </div>
  );
}
