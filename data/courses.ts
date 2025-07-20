export const courses = [
  { id: 1, title: "Spanish", imageSrc: "/es.svg" },
  { id: 2, title: "French", imageSrc: "/fr.svg" },
  { id: 3, title: "German", imageSrc: "/de.svg" },
];

export const units = [
  {
    id: 1,
    courseId: 1,
    title: "Unit 1",
    description: "Learn the basics of Spanish",
    order: 1,
  },
];

export const lessons = [
  { id: 1, unitId: 1, title: "Nouns", order: 1, completed: false },
  { id: 2, unitId: 1, title: "Verbs", order: 2, completed: false },
];
