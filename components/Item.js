import React from "react";
import colors from "../data/colors.json";
import { Draggable } from "react-beautiful-dnd";

export default class Item extends React.Component {
  render() {
    // to forgo color-coding, you could delete `subject` and set `color`
    // to a constant color value, e.g. "#bbb"
    const subject = this.props.number.split(".")[0]; // for MIT
    const color = colors[subject];
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided) => (
          <div
            className="item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <span
              className="del"
              onClick={() => this.props.removeCourse(this.props.id)}
            >
              ✕
            </span>
            <div>
              <p className="number">{this.props.number}</p>
              <p className="title">
                {this.props.title.substring(0, 50) +
                  (this.props.title.length >= 50 ? "..." : "")}
              </p>
            </div>
            <style jsx>{`
              .item {
                border-radius: 2px;
                padding: 8px;
                margin: 0 8px 8px 0;
                background: ${color};
                max-width: 200px;
                height: auto;
                box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%),
                  0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
                display: flex;
                align-items: start;
              }
              p {
                font-size: 1rem;
                line-height: 1.5;
              }
              .del {
                margin: 4px 7px 3px 2px;
                font-size: 12px;
                color: #ccc;
                background: rgba(0, 0, 0, 0.4);
                display: inline-block;
                padding: 2px 4px;
                border-radius: 40px;
              }
              .number {
                font-weight: bold;
                font-size: 1.1rem;
              }
            `}</style>
          </div>
        )}
      </Draggable>
    );
  }
}
