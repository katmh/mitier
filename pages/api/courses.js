import courses from "../../data/courses.json";

export default function handler(req, res) {
  const query = req.query.query.toLowerCase();
  if (!query) {
    return;
  }
  const results = courses.filter(
    (course) =>
      course.number.toLowerCase().includes(query) ||
      course.title.toLowerCase().includes(query)
  );
  // remove duplicates: https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
  const uniqueResults = Array.from(
    new Set(results.map((course) => course.number))
  ).map((number) => {
    return courses.find((course) => course.number === number);
  });
  res.status(200).json(uniqueResults);
}
