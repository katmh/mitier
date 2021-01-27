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
                max-width: 170px;
                height: auto;
                box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
                  0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
              }
              p {
                font-size: 1.1rem;
                line-height: 25px;
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
