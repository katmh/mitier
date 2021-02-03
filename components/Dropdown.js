import React from "react";
import CONFIG from "../config";

export default class Dropdown extends React.Component {
  render() {
    const haveResults = this.props.results.length;
    return (
      <ul
        className={"results" + (this.props.menuHidden ? " hidden" : "")}
        onChange={this.props.selectCourse}
      >
        {haveResults &&
          this.props.results.map((course) => (
            <li className="option">
              <input
                key={course.id}
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
        {!haveResults && (
          <p className="label">{CONFIG.SEARCH.NO_RESULTS_MESSAGE}</p>
        )}
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

          label,
          .label {
            display: block;
            max-width: 400px;
            padding: 0.5rem;
            background: #eee;
          }

          label {
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
