import React from "react";
import Item from "./Item";
import courses from "../data/courses.json";
import { Droppable } from "react-beautiful-dnd";

export default class Row extends React.Component {
  constructor(props) {
    super(props);
  }
  removeFromTier(id) {
    this.props.removeCourse(this.props.title, id);
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
              {this.props.items.map((id, index) => {
                const course = courses.find((course) => course.id == id);
                return (
                  <Item
                    key={course.id}
                    id={course.id}
                    number={course.number}
                    index={index}
                    title={course.title}
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
            padding: 3.5rem 0;
            width: 5rem;
            max-width: 7.5vw;
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
