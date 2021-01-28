# Data

The app uses `colors.json` to determine what color each course rectangle thing should be and `courses.json` as the list of courses. I got `courses.json` through these steps:

- Copy and paste list from `student.mit.edu/catalog/search.cgi?search=&style=verbatim&when=*&termleng=4&days_offered=*&start_time=*&duration=*&total_units=*` into `courses.txt`
- Remove lines that just say "(New)" (https://stackoverflow.com/a/61775852)
- Remove duplicate lines (https://toniguga.it/blog/2020/03/17/how-to-remove-duplicate-lines-in-visual-studio-code/)
- Write script to get color data (first half of `script.py`) from `coursecolors.css`, an excerpt of this [Courseroad CSS file](https://github.com/sipb/courseroad2/blob/master/src/assets/css/coursecolors.css)
- Start learning regex to process `courses.txt`, then realize I don't need regex ([this is a great interactive regex course](https://regexone.com/))
- Trying my script surfaces a few more issues: Remove items with no course numbers (e.g. UPOP workshop). Put 3.022, 3.024, and 21M.121 on one line.
- Use the second half of `script.py`

Am I a data scientist yet?

## To Do
- Add old courses people may have taken (e.g. 6.00)