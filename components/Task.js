import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
            <style jsx>{`
              div {
                border: 1px solid lightgrey;
                border-radius: 2px;
                padding: 8px;
                margin-bottom: 8px;
                background-color: white;
              }
            `}</style>
          </div>
        )}
      </Draggable>
    );
  }
}
