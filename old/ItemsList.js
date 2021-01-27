import Item from "./Item";
import colors from "../data/colors.json";
import courses from "../data/courses.json";

const ItemsList = ({ items, children }) => {
  return (
    <div>
      {items &&
        items.map((number, i) => {
          const title = courses.filter((course) => (course.number = number))
            .title;
          const color = colors[number.split(".")[0]];
          return (
            <Item
              key={number}
              number={number}
              title={title}
              color={color}
              index={i}
            />
          );
        })}
      {children}
    </div>
  );
};

export default ItemsList;
