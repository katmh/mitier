import { resetServerContext } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

resetServerContext();

const Item = ({ color, number, title, index }) => {
  return (
    <Draggable draggableId={number} index={index}>
      {(provided) => (
        <div
          className="item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          <p>
            {number} {title}
          </p>
          <style jsx>{`
            .item {
              background: ${color};
            }
          `}</style>
        </div>
      )}
    </Draggable>
  );
};

export default Item;
