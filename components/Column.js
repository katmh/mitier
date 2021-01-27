import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

export default class Column extends React.Component {
  render() {
    return (
      <div className="container">
        <p className="title">{this.props.title}</p>
        <Droppable droppableId={this.props.title}>
          {(provided) => (
            <div
              className="task_list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.items.map((number, index) => (
                <Task key={number} number={number} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <style jsx>{`
          .container {
            margin: 8px;
            border: 1px solid lightgrey;
            border-radius: 2px;
          }
          .title {
            padding: 8px;
          }
          .task_list {
            padding: 8px;
          }
        `}</style>
      </div>
    );
  }
}
