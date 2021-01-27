import re
import json

colors = {}
with open("coursecolors.css") as f:
    lines = f.readlines()
    for line in lines:
        # format: .course-1 { background-color: #DE4343; }
        course = line.split("-")[1].split(" {")[0]
        color = line.split(": ")[1].split(";")[0]
        colors[course] = color
with open("colors.json", "w") as f:
    json.dump(colors, f)

courses = []
with open("courses.txt") as f:
    lines = f.readlines()
    for line in lines:
        number, title = line.split(" ", 1)
        courses.append({"number": number, "title": title.rstrip("\n")})
with open("courses.json", "w") as f:
    json.dump(courses, f)

