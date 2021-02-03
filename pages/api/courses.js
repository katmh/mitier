import courses from "../../data/courses.json";

export default function handler(req, res) {
  const query = req.query.query.toLowerCase();
  if (!query) {
    res.status(200).json({});
  }
  const results = courses.filter(
    (course) =>
      course.number.toLowerCase().includes(query) ||
      course.title.toLowerCase().includes(query)
  );
  res.status(200).json(results);
}
