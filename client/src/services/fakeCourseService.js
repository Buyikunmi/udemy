const courses = [
  {
    id: "001",
    title: "Interaction Design",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 1,
    duration: 54,
    isPaid: 1,
  },
  {
    id: "002",
    title: "Visual Design",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 1,
    duration: 54,
    isPaid: 0,
  },
  {
    id: "003",
    title: "Wireframe Protos",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 2,
    duration: 54,
    isPaid: 1,
  },
  {
    id: "004",
    title: "Color theory",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 1,
    duration: 54,
    isPaid: 0,
  },
  {
    id: "005",
    title: "Typography",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 3,
    duration: 54,
    isPaid: 0,
  },
  {
    id: "006",
    title: "Picture Selection",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 2,
    duration: 54,
    isPaid: 1,
  },
  {
    id: "007",
    title: "Interaction Design",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 1,
    duration: 54,
    isPaid: 0,
  },
  {
    id: "008",
    title: "Visual Design",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 3,
    duration: 54,
    isPaid: 1,
  },
  {
    id: "009",
    title: "Wireframe Protos",
    description:
      "Replenish of third creature and meat blessed void a fruit gathered waters.",
    lectures: 12,
    category: "Design",
    rating: 10,
    skillLevel: 3,
    duration: 54,
    isPaid: 1,
  },
];

export function getCourses() {
  return courses;
}

export function getCourse(_id) {
  const course = course.find((c) => _id === c.id);
  return course;
}
