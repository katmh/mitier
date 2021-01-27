import { Droppable } from "react-beautiful-dnd";
import colors from "../data/colors.json";
import courses from "../data/courses.json";
import Item from "./Item";

const Row = ({ color, title, items }) => {
  return (
    <div>
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            className="items"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items &&
              items.map((number, i) => {
                const title = courses.filter(
                  (course) => (course.number = number)
                ).title;
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <style jsx>{`
        .row {
          display: flex;
          border-bottom: 1px solid #111;
        }
        .row:last-of-type {
          border: none;
        }
        .title {
          background: ${color};
          padding: 1.5rem;
          width: 4rem;
          text-align: center;
          font: bold 1.25rem/1 sans-serif;
          border-right: 1px solid #111;
        }
        .items {
          background: #232323;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Row;
