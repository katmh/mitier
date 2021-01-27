import axios from "axios";
import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const query = event.target.value;
    const url = `/api/courses/?query=${encodeURIComponent(query)}`;
    const response = await axios.get(url).catch(() => {
      alert("Unfortunately, an error occured :(");
      return;
    });
    console.log(response.data);
    this.setState({ results: response.data });
  }

  handleSelect(e) {
    this.props.addClass(e.target.value);
  }

  render() {
    return (
      <div className="select-search">
        <input
          className="ss_input"
          id="search"
          name="search"
          type="text"
          placeholder="Search courses"
          onChange={this.handleChange}
        />
        <select className="results" onChange={this.handleSelect.bind(this)}>
          {this.state.results.map((course) => (
            <option key={course.number} value={course.number}>
              {course.number} {course.title}
            </option>
          ))}
        </select>
        <style jsx>{`
          select {
            appearance: none;
            background-color: transparent;
            padding: 0 1em 0 0;
            margin: 0;
            width: 100%;
            font-family: inherit;
            font-size: inherit;
            cursor: inherit;
            line-height: inherit;
            -webkit-appearance: menulist-button;
          }
        `}</style>
      </div>
    );
  }
}
