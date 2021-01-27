import React from "react";

export default class Dropdown extends React.Component {
  render() {
    return (
      <ul
        className={"results" + (this.props.menuHidden ? " hidden" : "")}
        onChange={this.props.selectCourse}
      >
        {this.props.results.map((course) => (
          <li className="option">
            <input
              key={course.number}
              type="checkbox"
              value={course.number}
              id={course.number}
              name={course.number}
            />
            <label htmlFor={course.number}>
              {course.number} {course.title}
            </label>
          </li>
        ))}
        <style jsx>{`
          ul {
            display: block;
            overflow-y: scroll;
            position: absolute;
            float: left;
            max-height: 25rem;
          }

          li {
            list-style: none;
          }

          label {
            display: block;
            max-width: 400px;
            padding: 0.5rem;
            background: #eee;
            transition: 0.1s;
            cursor: pointer;
          }

          label:hover {
            background: #ddd;
          }

          input[type="checkbox"] {
            display: none;
          }
        `}</style>
      </ul>
    );
  }
}
