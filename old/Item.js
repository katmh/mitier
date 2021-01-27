import { resetServerContext } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";

resetServerContext();

const Item = ({ number, title, color, index }) => {
  return (
    <Draggable draggableId={number} index={index}>
      {(provided) => (
        <div
          className="item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
