import React from "react";
import colors from "../data/colors.json";
import { Draggable } from "react-beautiful-dnd";

export default class Item extends React.Component {
  render() {
    const color = colors[this.props.number.split(".")[0]];
    return (
      <Draggable draggableId={this.props.number} index={this.props.index}>
        {(provided) => (
          <div
            className="item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <p className="number">{this.props.number}</p>
            <p className="title">{this.props.title}</p>
            <style jsx>{`
              .item {
                border-radius: 2px;
                padding: 8px;
                margin: 0 8px 8px 0;
                background: ${color};
              }
              p {
                font: normal 17px/25px Roboto, sans-serif;
              }
              .number {
                font-weight: bold;
              }
            `}</style>
          </div>
        )}
      </Draggable>
    );
  }
}
