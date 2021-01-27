import React from "react";
import Item from "./Item";
import courses from "../data/courses.json";
import { Droppable } from "react-beautiful-dnd";

export default class Row extends React.Component {
  constructor(props) {
    super(props);
  }
  removeFromTier(number) {
    this.props.removeCourse(this.props.title, number);
  }
  render() {
    return (
      <div className="row">
        <div className="title">{this.props.title}</div>
        <Droppable droppableId={this.props.title}>
          {(provided) => (
            <div
              className="items"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.items.map((number, index) => {
                const arr = courses.find((course) => course.number == number);
                const title = arr ? arr.title : "";
                return (
                  <Item
                    key={number}
                    number={number}
                    index={index}
                    title={title}
                    removeCourse={this.removeFromTier.bind(this)}
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
            background: ${this.props.color};
            padding: 3rem 1rem;
            width: 5rem;
            text-align: center;
            font: bold 1.25rem/1 sans-serif;
            border-right: 1px solid #111;
          }
          .items {
            background: #232323;
            width: 100%;
            padding: 1rem;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
        `}</style>
      </div>
    );
  }
}
